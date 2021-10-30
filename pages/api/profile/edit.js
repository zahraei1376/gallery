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
                formParse(req, res).then(({ fields, files }) => {
                    const location =  fields.location;
                    const email = fields.email;
                    const photographer = fields.photographer;
                    var decoded = req.auth;
                    var fileName = req.fileName;
                    console.log('decoded' , decoded , fileName , photographer, email, location);
                    User.findByIdAndUpdate(decoded.userId , 
                    {
                        location:location,
                        email:email,
                        photographerPicture:fileName,
                        photographer:photographer,
                    },
                    { returnOriginal: false },
                    )
                    .then((existUser)=>{
                        // console.log('userrrrrrrrr' , existUser);
                        res.status(200).send({seccess:true , data: existUser});
                    }).catch(err =>{
                        res.status(401).send({seccess:false , message:'مشکلی رخ داده است'});
                    })

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
export default verifyToken(withUpload(handler));