// import {connectToDataBase} from '../../../lib/db';
import User from '../../../models/UserModel';
import Files from '../../../models/FileModel';
import dbConnec from '../../../utils/dbConnect';
const jwt=require('jsonwebtoken');

// dbConnec();

export async function handler(authorization , req , res) {
    await dbConnec();
    // const client = await connectToDataBase();
    // const db = client.db();
    const token = authorization;
    const decoded = jwt.verify(token, "MySuperSecret");
    var id = decoded.userId;
    // const userCollection = db.collection('users').findOne({_id : id});
    // // const userFind = await userCollection.findOne({_id : id});
    // if(!userCollection){
    //     // throw new Error('کاربر یافت نشد');
    //     return {seccess:false,message:'مشکلی رخ داده است !'};
    // }
// 
    

    return User.findOne({_id : id }).then((user) => {
        const data = {};
        data.user = user;
        // if(err){
        //   return {seccess:false,message:'مشکلی رخ داده است !'};
        //   // res.status(401).json({seccess:false,message:'مشکلی رخ داده است !'});
        // }else{
          return Files.find({user : id }).exec((err, filesUser) => {
            data.files = filesUser;
            if(err){
              return {seccess:false,message:'مشکلی رخ داده است !'};
              // res.status(401).json({seccess:false,message:'مشکلی رخ داده است !'});
            }else{
              return {seccess:true , data: data};
              // res.status(200).send({seccess:true , data: data});
            }
          });
        // }
    });

    
    // client.close();
};

// export default handler;