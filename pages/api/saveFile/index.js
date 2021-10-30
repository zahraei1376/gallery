const multer=require('multer');
const { uuid } = require('uuidv4');

export const config = {
    api: {
      bodyParser: false,
    },
  }

const fileStorage=multer.diskStorage({
    
    destination:(req,file,cb)=>{//مقصد
        // console.log('uploadupload');
        cb(null,'./public/upload');
    },
    filename:(req,file,cb)=>{//نام فایل
        // console.log('file.originalname',file.originalname);
        // cb(null,new Date().toISOString() + '-'+ file.originalname)
        cb(null,uuid() + '-' + file.originalname);
    }
})

// const fileFilter=(req,file,cb)=>{
//     if(file.mimetype==='image/png'|| file.mimetype==='image/jpg' || file.mimetype==='image/jpeg'){
//         cb(null,true);
//     }else{
//         cb(null,false);
//     }
// }

// var upload = multer({ storage: fileStorage , fileFilter:fileFilter });
var upload = multer({ storage: fileStorage});

export default async (req, res) => {

console.log('omadddddddd');

await upload.single("myFile")(req, {}, err => {
      if(err){
        console.log('errrrrrrrrrrrrr', err) // do something with the files here
        res.status(200).send({seccess:false,});
      }
      else{
        const { filename: image } = req.file;
        console.log('imageimageimage',image);
        res.status(200).send({seccess:true,});
      }
  })
}