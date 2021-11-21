import dbConnec from '../../../utils/dbConnect';
import verifyToken from '../../../utils/middleware/withValidation';
import User from '../../../models/UserModel';

dbConnec();

const handler = async (req, res) =>{
    const {method} = req;
    switch (method) {
        case 'GET':
            {
                try {
                    var decoded = req.auth;
                    await User.findById({ _id : decoded.userId })
                    .then((existUser)=>{
                        res.status(200).send({seccess:true , data: existUser});
                    }).catch(err =>{
                        res.status(401).json({seccess:false,message:'مشکلی رخ داده است !'});
                    })
                } catch (err) {
                    res.status(401).json({seccess:false,message:'مشکلی رخ داده است !!!'});
                }
                break;
        }
 
        default:
            res.status(400).json({seccess:false,message:'مشکلی رخ داده است !!!',});
            break;
    }
}
export default verifyToken(handler);