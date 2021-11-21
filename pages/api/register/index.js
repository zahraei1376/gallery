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
                    await bcrypt.hash(password,12)
                    .then(hashPw=>{
                        const UserRegister = new User({
                            username:username,
                            password:hashPw,
                            photographer:photographer,
                            email:email,
                        });
                        UserRegister.save(); 
                        res.status(201).json({seccess:true,message:'کاربر تشکیل شد!!',});
                    })
                    
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