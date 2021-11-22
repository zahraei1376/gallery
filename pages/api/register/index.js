import dbConnec from '../../../utils/dbConnect';
import User from '../../../models/UserModel';
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');

dbConnec();

export default async (req, res) =>{
    const {method} = req;
    switch (method) {
        case 'POST':
            {
                try {
                    // const errors = validationResult(req);
                    // console.log('errorssssssssssss111111111',errors );
                    // if(!errors.isEmpty()){

                    //     console.log('errorssssssssssss',errors );
                    //     // const error=new Error("داده وارد شده نامعتبر است :(");
                    //     // error.statusCode=422;
                    //     // error.data=errors.array()
                    //     res.status(422).json({seccess:false,message:'"داده وارد شده نامعتبر است :("',});
                    // }
                    
                    const username=req.body.username;
                    const photographer = req.body.fullName;
                    const email=req.body.email;
                    const password = req.body.password;
                    const hashPw = await bcrypt.hash(password,12);
                    const UserRegister = new User({
                        username:username,
                        password:hashPw,
                        photographer:photographer,
                        email:email,
                    });
                    await UserRegister.save(); 
                    res.status(201).json({seccess:true,message:'کاربر تشکیل شد!!',});
                    // .then(hashPw=>{
                    //     const UserRegister = new User({
                    //         username:username,
                    //         password:hashPw,
                    //         photographer:photographer,
                    //         email:email,
                    //     });
                    //     await UserRegister.save(); 
                    //     res.status(201).json({seccess:true,message:'کاربر تشکیل شد!!',});
                    // })
                    
                } catch (error) {
                    let errors = "";
                    console.log('errorerrorerrorerror',error.name);
                    if(error.name === "ValidationError"){
                        
                        
                        Object.keys(error.errors).forEach((key) => {
                            errors += error.errors[key].message;
                        });

                        console.log('errorerrorerrorerror222222',errors);
                    }
                    res.status(400).json({seccess:false,message:errors,});
                    // res.status(400).json({seccess:false,message:'کاربر تشکیل نشد!!',});
                }

                break;
        }
        default:
            res.status(400).json({seccess:false,message:'کاربر تشکیل نشد!!',});
            break;
    }
}