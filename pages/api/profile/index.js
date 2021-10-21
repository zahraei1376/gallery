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
                const token =
                req.body.token || req.query.token || req.headers["x-access-token"];
            
                if (!token) {
                    return res.status(403).send("توکن برای اعتبار سنجی نیاز است!!!");
                }
                try {
                    const decoded = jwt.verify(token, "MySuperSecret");
                    req.user = decoded;
                } catch (err) {
                    return res.status(401).send("Invalid Token");
                }
                break;
        }
        default:
            res.status(400).json({seccess:false,message:'مشکلی رخ داده است !!!',});
            break;
    }
}