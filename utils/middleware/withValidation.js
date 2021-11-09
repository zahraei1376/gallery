const jwt = require("jsonwebtoken");

const verifyToken = (handler) =>{
    return async(req , res) =>{
        const token = req.headers.authorization;
        if (!token) {
            return res.status(403).json({seccess:false,reload:true,message:'توکن برای اعتبار سنجی نیاز است!!! وارد شوید'});
        }

        try {
            const decoded = jwt.verify(token, "MySuperSecret");
            req.auth = decoded;
           
        } catch (err) {
            return res.status(401).json({seccess:false,reload:true,message:'توکن نامعتبر است وارد شوید'});
        }
        return handler(req, res);
    }
};

export default verifyToken;