import dbConnec from '../../../utils/dbConnect';
import verifyToken from '../../../utils/middleware/withValidation';
import Files from '../../../models/FileModel';
import deletefile from '../../../utils/deleteFile';

dbConnec();

const handler = async (req, res) =>{
    const {method} = req;
    switch (method) {
        case 'POST':
            {
                try {
                    var decoded = req.auth;
                    var id = decoded.userId;
                    const arrayId = req.body.arrayId;
                    for await (const file of arrayId) {
                        const element = file;
                        Files.findOneAndDelete({ user : id , _id:element }).exec((err, fileUser) => {
                            if(err){
                              res.status(401).json({seccess:false,message:'مشکلی رخ داده است !'});
                            }
                            else{
                                deletefile(fileUser.src);
                            }
                        });
                    }

                    res.status(200).send({seccess:true , data: true});
                      
                    
                    
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