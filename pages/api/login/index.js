import dbConnec from '../../../utils/dbConnect';
import User from '../../../models/UserModel';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

dbConnec();

const LoginApi = async (req, res) => {
    const { method } = req;
    switch (method) {
        case 'POST':
            {
                let username = req.body?.username;
                let password = req.body?.password;
                let loadedUser;
                const userlogin = await User.findOne({ username: username });
                if (userlogin) {
                    loadedUser = userlogin;
                    const comparePass = await bcrypt.compare(password, userlogin.password);
                    if (!comparePass) {
                        res.status(401).json({ seccess: false, message: 'پسورد اشتباه است :(' });
                    } else {
                        const token = jwt.sign({
                            userId: loadedUser._id,
                        },
                            'MySuperSecret',
                            // {expiresIn:'1h'}
                        );

                        res.status(200).json({ seccess: true, token: token, userInfo: loadedUser });
                    }
                } else {
                    res.status(401).json({ seccess: false, message: 'کاربر با این نام کاربری وجود ندارد :(' });
                }
                break;
            }
        default:
            res.status(400).json({ seccess: false, message: 'مشکلی رخ داده است !!!', });
            break;
    }
}

export default LoginApi;