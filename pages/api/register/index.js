import dbConnec from '../../../utils/dbConnect';
import User from '../../../models/UserModel';
const bcrypt = require('bcryptjs');

dbConnec();

export default async (req, res) =>{
    const {method} = req;
    switch (method) {
        case 'POST':
            {
                try {
                    
                    const username=req.body.username;
                    const photographer = req.body.fullName;
                    const email=req.body.email;
                    const password = req.body.password;
                    // const age = req.body.age;
                    console.log('hashPw1111111111' , req.body);
                    await bcrypt.hash(password,12)
                    .then(hashPw=>{
                        // const user = User.create({...req.body , password:hashPw});
                        const UserRegister = new User({
                            username:username,
                            password:hashPw,
                            photographer:photographer,
                            email:email,
                            // age:age,
                        });
                        UserRegister.save(); 
                        res.status(201).json({seccess:true,message:'کاربر تشکیل شد!!',});
                        // return user; 
                    })
                    // .then(result=>{
                    //      res.status(201).json({seccess:true,message:'کاربر تشکیل شد!!',userId:result._id});
                    // })
                    // .catch(err=>{
                    //      res.status(400).json({seccess:false,message:'کاربر تشکیل نشد!!',});
                    // })
                    // res.status(201).json({seccess:true,message:'کاربر تشکیل شد!!',userId:result._id});
                    
                    
                } catch (error) {
                    res.status(400).json({seccess:false,message:'کاربر تشکیل نشد!!',});
                }

                break;
        }
        default:
            res.status(400).json({seccess:false,message:'کاربر تشکیل نشد!!',});
            break;
    }
}