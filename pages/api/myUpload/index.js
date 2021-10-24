import dbConnec from '../../../utils/dbConnect';
import verifyToken from '../../../utils/verifyToken';
import User from '../../../models/UserModel';
const jwt=require('jsonwebtoken');

dbConnec();

export default async (req, res) =>{
    const {method} = req;
    switch (method) {
        case 'GET':
            {
                // const token =
                // req.body.token || req.query.token || req.headers["x-access-token"];
                const token = req.headers.authorization;
                
                if (!token) {
                    // return res.status(403).send("توکن برای اعتبار سنجی نیاز است!!!");
                    return res.status(403).json({seccess:false,message:'توکن وجود ندارد'});
                }
                try {
                    const decoded = jwt.verify(token, "MySuperSecret");
                    console.log('decodeddecoded' , decoded);
                    // req.user = decoded;
                    if(decoded){
                        await User.findById({ _id : decoded.userId }).populate()
                        .then((users)=>{
                            console.log('userrrrrrrrr' , users);
                            res.status(200).send({seccess:true , data: users});
                        })


                        // ( async() => {

                        //     var users = await User.findById({ _id : decoded.userId });
                        //     console.log('userrrrrrrrr1' , users);
                        //     await users.populate( 'files' ).execPopulate(); // Works as expected
                        //     console.log('userrrrrrrrr2' , users);
                        //     res.status(200).send({seccess:true , data: users});
                        // } );

                        // User.findById({ _id : decoded.userId })
                        // .then((users)=>{
                        //     console.log('userrrrrrrrr' , users);
                        //     res.status(200).send({seccess:true , data: users});
                        // })
                        
                        
                    }else{
                        return res.status(403).json({seccess:false,message:'توکن وجود ندارد'});
                    }
                } catch (err) {
                    // return res.status(401).send("Invalid Token");
                    // res.json({seccess:true,token:token,userInfo:loadedUser});
                    res.status(401).json({seccess:false,message:'توکن اشتباه است'});
                }
                break;
        }
        default:
            res.status(400).json({seccess:false,message:'مشکلی رخ داده است !!!',});
            break;
    }
}