import mongoose  from'mongoose';
import dbConnec from '../../../utils/dbConnect';
import verifyToken from '../../../utils/middleware/withValidation';
import User from '../../../models/UserModel';
import Files from '../../../models/FileModel';

dbConnec();

const handler = async (req, res) =>{
    const {method} = req;
    switch (method) {
        case 'GET':
            {
                try {

                    ////////////////////////////////////////
                    var decoded = req.auth;
                    var id = decoded.userId;
                    // var id = mongoose.Types.ObjectId(decoded.userId);
                    
                    User.findOne({user : id }).exec((err, user) => {
                      const data = {};
                      data.user = user;
                      if(err){
                        res.status(401).json({seccess:false,message:'مشکلی رخ داده است !'});
                      }else{
                        Files.find({user : id }).exec((err, filesUser) => {
                          data.files = filesUser;
                          if(err){
                            res.status(401).json({seccess:false,message:'مشکلی رخ داده است !'});
                          }else{
                            res.status(200).send({seccess:true , data: data});
                          }
                        });
                      }
                    });
                    
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
////////////////////////////////////////////////////