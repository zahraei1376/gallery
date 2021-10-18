import dbConnec from '../../utils/dbConnect';
import User from '../../models/User';
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');

dbConnec();

export default async (req, res) =>{
    const {method} = req;

    switch (method) {
        case 'POST':
            {
                try {
                    // const errors = validationResult(req);
                    // if(!errors.isEmpty()){
                    //     return res
                    //     .status(422)
                    //     .json({
                    //         message:"داده وارد شده نامعتبر است :(",
                    //         errors:errors.array()
                    //     });
                    // }
                    // const user = User.create(req.body);
                    const username=req.body.username;
                    const name=req.body.name;
                    const mobileNumber=req.body.mobileNumber;
                    const email=req.body.email;
                    const password=req.body.password;
                    bcrypt.hash(password,12)
                    .then(hashPw=>{
                        const UserRegister = new User({
                            username:username,
                            password:hashPw,
                            name:name,
                            email:email,
                            isAdmin:false,
                            field:""
                        });
                        return UserRegister.save();  
                    })
                    .then(result=>{
                        res.status(201).json({seccess:true,message:'کاربر تشکیل شد!!',userId:result._id});
                    })
                    .catch(err=>{
                        if(!err.statusCode){
                            err.statusCode=500;
                        }
                        next(err)
                    })

                    break;
                    
                } catch (error) {
                    res.status(400).json({seccess:false,message:'کاربر تشکیل نشد!!',});
                }
        }
        default:
            res.status(400).json({seccess:false,message:'کاربر تشکیل نشد!!',});
            break;
        
    }
}