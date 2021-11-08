import dbConnec from '../../../utils/dbConnect';
import verifyToken from '../../../utils/middleware/withValidation';
import withUpload from '../../../utils/middleware/withUpload';
import User from '../../../models/UserModel';
import File from '../../../models/FileModel';
import formParse from '../../../utils/formParse';

dbConnec();

export const config = {
    api: {
      bodyParser: false,
    }
  };

const handler = async (req, res) =>{
    const {method} = req;
    switch (method) {
        case 'POST':
        {
            try {
                await withUpload(req, res);
                console.log('after upload' , req.body);
                console.log('formmmmmmmmmmmmmmm');
                const properties =  req.body.properties;
                const title = req.body.title;
                const sunTitle = req.body.sunTitle;
                var decoded = req.auth;
                var fileName = req.fileName;
                User.findById(decoded.userId)
                .then((existUser)=>{
                    console.log('existUser',existUser);
                    if(!existUser){
                        res.status(401).send({seccess:false , message:'اطلاعاتی یافت نشد'});
                    }
                    const FileModel = new File({
                        properties,
                        title,
                        sunTitle,
                        src:fileName,
                        // user:decoded.userId,
                        // age:age,
                    });
                    // FileModel.user.push(existUser);
                    FileModel.user = existUser;
                    FileModel.save(); 
                    res.status(201).json({seccess:true,message:'فایل آپلود شد!!!',});
                }).catch(err =>{
                    res.status(401).send({seccess:false , message:'مشکلی رخ داده است'});
                })
            //     await formParse(req, res).then(({ fields, files }) => {
            //         console.log('formmmmmmmmmmmmmmm');
            //         const location =  fields.location;
            //         const email = fields.email;
            //         const photographer = fields.photographer;
            //         var decoded = req.auth;
            //         var fileName = req.fileName;
            //         User.findByIdAndUpdate(decoded.userId , 
            //         {
            //             location:location,
            //             email:email,
            //             photographerPicture:fileName,
            //             photographer:photographer,
            //         },
            //         { returnOriginal: false },
            //         )
            //         .then((existUser)=>{
            //             console.log('userrrrrrrrr' , existUser);
            //             res.status(200).send({seccess:true , data: existUser});
            //         }).catch(err =>{
            //             res.status(401).send({seccess:false , message:'مشکلی رخ داده است'});
            //         })

            //     })
            } catch (err) {
                res.status(401).json({seccess:false,message:'مشکلی رخ داده است'});
            }
            break;
        }
        default:
            res.status(400).json({seccess:false,message:'مشکلی رخ داده است !!!',});
            break;
    }
}

export default verifyToken(handler);
// export default verifyToken(withUpload(handler));