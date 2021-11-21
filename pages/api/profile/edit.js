import dbConnec from '../../../utils/dbConnect';
import verifyToken from '../../../utils/middleware/withValidation';
import withUpload from '../../../utils/middleware/withUpload';
import User from '../../../models/UserModel';
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
                const location =  req.body.location;
                const email = req.body.email;
                const photographer = req.body.photographer;
                var decoded = req.auth;
                var fileName = req.fileName;
                var data = {} ;
                if(fileName){
                    data = {
                        location:location,
                        email:email,
                        photographerPicture:fileName,
                        photographer:photographer,
                    }
                }else{
                    data = {
                        location:location,
                        email:email,
                        // photographerPicture:fileName,
                        photographer:photographer,
                    }
                }
                User.findByIdAndUpdate(decoded.userId , data ,
                { returnOriginal: false },
                )
                .then((existUser)=>{
                    res.status(200).send({seccess:true , data: existUser});
                }).catch(err =>{
                    res.status(401).send({seccess:false , message:'مشکلی رخ داده است'});
                })
            //     await formParse(req, res).then(({ fields, files }) => {
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