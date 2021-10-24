import dbConnec from '../../../utils/dbConnect';
import User from '../../../models/UserModel';
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');

dbConnec();

export default async (req, res) =>{
    const {method} = req;
    switch (method) {
        case 'POST':
            {
                try {
                    let username = req.body.username;
                    let password = req.body.password;
                    console.log(username , password);
                    let loadedUser;
                    await User.findOne({username:username})
                    .then((userlogin)=>{
                        if(!userlogin){
                            res.status(401).json({seccess:false,message:'کاربر با این نام کاربری وجود ندارد :('});
                        }
                        loadedUser = userlogin;
                        return bcrypt.compare(password,userlogin.password)
                    })
                    .then(isEqual=>{
                        if(!isEqual){
                            res.status(401).json({seccess:false,message:'پسورد اشتباه است :('});
                        }
                        const token= jwt.sign({
                            userId:loadedUser._id,
                            // userId:loadedUser._id.toString(),
                            // isAdmin:loadedUser.isAdmin
                        },
                        'MySuperSecret',
                        {expiresIn:'1h'}
                        );

                        console.log('tokentokentoken' ,token);
                        // res.statusCode(200).json({token:token,userId:loadedUser._id.toString()})
                        res.json({seccess:true,token:token,userInfo:loadedUser})
                    })
                    .catch(err=>{
                        // if(!err.statusCode){
                        //     err.statusCode=500;
                        // }
                        // next(err);
                        res.status(200).json({seccess:false,message:'مشکلی رخ داده است !!!'});
                    })
                    
                    
                } catch (error) {
                    res.status(400).json({seccess:false,message:'کاربر تشکیل نشد!!',});
                }
                break;
        }
        default:
            res.status(400).json({seccess:false,message:'مشکلی رخ داده است !!!',});
            break;
    }
}