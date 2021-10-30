const jwt = require("jsonwebtoken");
// export const config = {
//     api: {
//        bodyParser: {
//           sizeLimit: '1mb',
//        },
//     },
//  }

const verifyToken = (handler) =>{
    return async(req , res) =>{
        const token = req.headers.authorization;
        if (!token) {
            return res.status(403).json({seccess:false,reload:true,message:'توکن برای اعتبار سنجی نیاز است!!! وارد شوید'});
        }

        try {
            const decoded = jwt.verify(token, "MySuperSecret");
            req.auth = decoded;
            
            // if(req.body){
            //     console.log('req.body',req.body.location);
            //     req.location = req.body.location;
            //     req.email = req.body.email;
            //     req.photographer = req.body.photographer;
            // }
           
        } catch (err) {
            return res.status(401).json({seccess:false,reload:true,message:'توکن نامعتبر است وارد شوید'});
        }
        // req.auth = true;
        return handler(req, res);
    }
};

export default verifyToken;



// const verifyToken = (req, res, next) => {
//   const token =
//     req.body.token || req.query.token || req.headers["x-access-token"];

//   if (!token) {
//     return res.status(403).send("توکن برای اعتبار سنجی نیاز است!!!");
//   }
//   try {
//     const decoded = jwt.verify(token, "MySuperSecret");
//     req.user = decoded;
//   } catch (err) {
//     return res.status(401).send("توکن نامعتبر است");
//   }
//   return next();
// };

// module.exports = verifyToken;