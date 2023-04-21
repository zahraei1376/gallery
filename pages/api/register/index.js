import User from '../../../models/UserModel';
import dbConnec from '../../../utils/dbConnect';
const bcrypt = require('bcryptjs');

dbConnec();

const RegisterApi = async (req, res) => {
    const { method } = req;
    switch (method) {
        case 'POST':
            {
                try {
                    const username = req.body?.username;
                    const photographer = req.body?.fullName;
                    const email = req.body?.email;
                    const password = req.body?.password;
                    const hashPw = await bcrypt.hash(password, 12);
                    const UserRegister = new User({
                        username: username,
                        password: hashPw,
                        photographer: photographer,
                        email: email,
                    });
                    await UserRegister.save().then(user => {
                        res.status(201).json({ seccess: true, message: 'کاربر تشکیل شد!!', });
                    })

                } catch (error) {
                    let errors = "";
                    if (error.name === "ValidationError") {
                        Object.keys(error.errors).forEach((key) => {
                            errors += error.errors[key].message;
                        });
                    }
                    res.status(400).json({ seccess: false, message: errors, });
                }
                break;
            }
        default:
            res.status(400).json({ seccess: false, message: 'کاربر تشکیل نشد!!', });
            break;
    }
}
export default RegisterApi;