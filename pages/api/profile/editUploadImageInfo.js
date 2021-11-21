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
                    const uploadId = req.body.uploadId;
                    const properties = req.body.properties;
                    const sunTitle = req.body.sunTitle;
                    const title = req.body.title;
                    var decoded = req.auth;
                    var id = decoded.userId;
                    Files.findOneAndUpdate({ user : id , _id:uploadId } ,{
                        properties,
                        sunTitle,
                        title
                    },
                    { returnOriginal: false },).exec((err, file) => {
                        if(err){
                          res.status(401).json({seccess:false,message:'مشکلی رخ داده است !'});
                        }else{
                            res.status(200).send({seccess:true , data: file});
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