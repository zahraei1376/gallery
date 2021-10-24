import dbConnec from '../../../utils/dbConnect';
import verifyToken from '../../../utils/verifyToken';
import User from '../../../models/UserModel';
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');

dbConnec();

export default async (req, res) =>{
    const {method} = req;
    switch (method) {
        case 'GET':
            {
                const token = req.headers.authorization;
                
                if (!token) {
                    return res.status(403).json({seccess:false,message:'توکن وجود ندارد'});
                }
                try {
                    const decoded = jwt.verify(token, "MySuperSecret");
                    console.log('decodeddecoded' , decoded);
                    // req.user = decoded;
                    if(decoded){
                        await User.findById({ _id : decoded.userId })
                        .then((existUser)=>{
                            console.log('userrrrrrrrr' , existUser);
                            res.status(200).send({seccess:true , data: existUser});
                        })
                        
                        
                    }else{
                        return res.status(403).json({seccess:false,message:'توکن وجود ندارد'});
                    }
                } catch (err) {
                    res.status(401).json({seccess:false,message:'توکن اشتباه است'});
                }
                break;
        }
        case 'POST':
        {
            const token = req.headers.authorization;
            const location = req.body.location;
            const email = req.body.email;
            const photographerPicture = req.body.photographerPicture;
            const photographer = req.body.photographer;
            
            if (!token) {
                return res.status(403).json({seccess:false,message:'توکن وجود ندارد'});
            }
            try {
                const decoded = jwt.verify(token, "MySuperSecret");
                console.log('decodeddecoded' , decoded);
                // req.user = decoded;
                if(decoded){
                    await User.findByIdAndUpdate(decoded.userId , 
                    {
                        location:location,
                        email:email,
                        photographerPicture:photographerPicture,
                        photographer:photographer,
                    },
                    { returnOriginal: false },
                    // function (err, docs) {
                    //     console.log("Updated User1 : ", docs);
                    //     if (!docs){
                    //         res.status(401).json({seccess:false,message:'مشکلی رخ داده مجددا تلاش کنید'});
                    //     }
                    //     else{
                    //     console.log("Updated User : ", docs);
                    //     // return docs;
                    //     return res.status(200).send({seccess:true , data: docs});
                    //     }}
                    )
                    .then((existUser)=>{
                        console.log('userrrrrrrrr' , existUser);
                        res.status(200).send({seccess:true , data: existUser});
                    })
                    
                    
                }else{
                    return res.status(403).json({seccess:false,message:'توکن وجود ندارد'});
                }
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