const multer=require('multer');
const { uuid } = require('uuidv4');
//////////////////////////////////////
export const config = {
    api: {
      bodyParser: false,
    },
}
///////////////////////////////////////
const fileStorage=multer.diskStorage({
    
    destination:(req,file,cb)=>{//مقصد
        cb(null,'./public/upload');
    },
    filename:(req,file,cb)=>{//نام فایل
        // cb(null,new Date().toISOString() + '-'+ file.originalname)
        cb(null,uuid() + '-' + file.originalname);
    }
})

const fileFilter=(req,file,cb)=>{
    if(file.mimetype==='image/png'|| file.mimetype==='image/jpg' || file.mimetype==='image/jpeg'){
        cb(null,true);
    }else{
        cb(null,false);
    }
}

var upload = multer({ storage: fileStorage , fileFilter:fileFilter });
////////////////////////////////////////////////////////////////////
const myUpload = (req, res) =>{
    return new Promise((resolve , reject) => {
        var name = '';
        return upload.single("myFile")(req, {}, err => {
            if(err){
                reject(err);
                return;
                // return res.status(200).send({seccess:false, message : 'خطایی رخ داده است پس از مدتی مجددا تلاش کنید!!!'});
            }
            else{
                if(req.file){
                    const { filename: image } = req.file;
                    name = image;
                }else{
                    name = 'zzzzzzzzzzzzzzzzzzzz';
                }

                req.fileName = name;
                // return handler(req, res);
                resolve(name);
            }
            // return handler(req, res);

            
        });
    })
}
const withUpload = (handler) =>{
    return async(req , res) =>{
        console.log('req.body4444');
        return myUpload(req, res).then(data =>{
            console.log('req.body333' ,data);
            // return res.status(401).send({seccess:false, message : 'خطایی رخ داده است پس از مدتی مجددا تلاش کنید!!!'});
            return handler(req, res);
        }).catch(err =>{
            return res.status(401).send({seccess:false, message : 'خطایی رخ داده است پس از مدتی مجددا تلاش کنید!!!'});
        })

        // return handler(req, res);
        /////////////////////////////////////
        // var name = '';
        // return upload.single("myFile")(req, {}, err => {
        //     if(err){
        //         return res.status(200).send({seccess:false, message : 'خطایی رخ داده است پس از مدتی مجددا تلاش کنید!!!'});
        //     }
        //     else{
        //         if(req.file){
        //             const { filename: image } = req.file;
        //             name = image;
        //         }else{
        //             name = 'zzzzzzzzzzzzzzzzzzzz';
        //         }

        //         console.log('req.body1111' , name);
        //         req.fileName = name;
        //         console.log('req.body2222' , req.fileName);
                
                
        //     }
        //     // return handler(req, res);
        //     console.log('req.body333' , req.fileName);
        //     return handler(req, res);

            
        // });
        // console.log('req.body333' , req.fileName);
        // return handler(req, res);
    }
};
///////////////////////////////////////////
export default withUpload;
//////////////////////////////////////////