import dbConnec from '../../../utils/dbConnect';
import verifyToken from '../../../utils/middleware/withValidation';
import Files from '../../../models/FileModel';
////////////////////////////////////////////////////
dbConnec();
////////////////////////////////////////////////////
const handler = async (req, res) =>{
    const {method} = req;
    switch (method) {
        case 'POST':
            {
                try {
                    var decoded = req.auth;
                    const uploadId = req.body.uploadId;
                    var id = decoded.userId;
                    console.log('uploadId' , uploadId , id);
                    // var id = mongoose.Types.ObjectId(decoded.userId);
                    Files.findOne({ user : id , _id:uploadId }).exec((err, fileUser) => {
                        if(err){
                          res.status(401).json({seccess:false,message:'مشکلی رخ داده است !'});
                        }else{
                            console.log('fileUser' , fileUser);
                            if(fileUser){
                                res.status(200).send({seccess:true ,can:true, data: fileUser});
                            }else{
                                res.status(401).send({seccess:true , can: false , data: fileUser});
                            }
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