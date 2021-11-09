import dbConnec from '../../../utils/dbConnect';
import verifyToken from '../../../utils/middleware/withValidation';
import withUpload from '../../../utils/middleware/withUpload';
import User from '../../../models/UserModel';
import File from '../../../models/FileModel';

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
                const properties =  req.body.properties;
                const title = req.body.title;
                const sunTitle = req.body.sunTitle;
                var decoded = req.auth;
                var fileName = req.fileName;
                User.findById(decoded.userId)
                .then((existUser)=>{
                    if(!existUser){
                        res.status(401).send({seccess:false , message:'اطلاعاتی یافت نشد'});
                    }
                    const FileModel = new File({
                        properties,
                        title,
                        sunTitle,
                        src:fileName,
                    });
                    FileModel.user = existUser;
                    FileModel.save(); 
                    res.status(201).json({seccess:true,message:'فایل آپلود شد!!!',});
                }).catch(err =>{
                    res.status(401).send({seccess:false , message:'مشکلی رخ داده است'});
                })
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