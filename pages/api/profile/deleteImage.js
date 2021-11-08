import dbConnec from '../../../utils/dbConnect';
import verifyToken from '../../../utils/middleware/withValidation';
import Files from '../../../models/FileModel';
import deletefile from '../../../utils/deleteFile';

dbConnec();

const handler = async (req, res) =>{
    const {method} = req;
    switch (method) {
        case 'POST':
            {
                try {
                    var decoded = req.auth;
                    var id = decoded.userId;
                    const arrayId = req.body.arrayId;
                    // for (let index = 0; index < arrayId.length; index++) {
                    //     const element = arrayId[index];
                    //     Files.findOneAndDelete({ user : id , _id:element }).exec((err, fileUser) => {
                    //         if(err){
                    //           res.status(401).json({seccess:false,message:'مشکلی رخ داده است !'});
                    //         }
                    //         // else{
                    //         // //   deletefile()
                    //         //   res.status(200).send({seccess:true , data: true});
                    //         // }
                    //         // statements
                    //     });
                        
                    // }


                    for await (const file of arrayId) {
                        const element = file;
                        Files.findOneAndDelete({ user : id , _id:element }).exec((err, fileUser) => {
                            if(err){
                              res.status(401).json({seccess:false,message:'مشکلی رخ داده است !'});
                            }
                            else{
                                console.log('fileUser',fileUser);
                                deletefile(fileUser.src);
                            }
                        });
                    }

                    res.status(200).send({seccess:true , data: true});
                      
                    
                    
                } catch (err) {
                    res.status(401).json({seccess:false,message:'مشکلی رخ داده است !!!'});
                }
                break;
        }
        // case 'POST':
        // {
        //     const location = req.body.location;
        //     const email = req.body.email;
        //     // const photographerPicture = req.body.file;
        //     const photographer = req.body.photographer;
        //     const fileName = req.fileName;

        //     var decoded = req.auth;

        //     try {
        //         User.findByIdAndUpdate(decoded.userId , 
        //         {
        //             location:location,
        //             email:email,
        //             photographerPicture:fileName,
        //             photographer:photographer,
        //         },
        //         { returnOriginal: false },
        //         )
        //         .then((existUser)=>{
        //             // console.log('userrrrrrrrr' , existUser);
        //             res.status(200).send({seccess:true , data: existUser});
        //         })
        //     } catch (err) {
        //         res.status(401).json({seccess:false,message:'مشکلی رخ داده است'});
        //     }
        //     break;
        // }
        default:
            res.status(400).json({seccess:false,message:'مشکلی رخ داده است !!!',});
            break;
    }
}
// export default verifyToken(handler);
export default verifyToken(handler);
////////////////////////////////////////////////////

// export default async (req, res) =>{
//     const {method} = req;
//     switch (method) {
//         case 'GET':
//             {
//                 const token = req.headers.authorization;
                
//                 if (!token) {
//                     return res.status(403).json({seccess:false,message:'توکن وجود ندارد'});
//                 }
//                 try {
//                     const decoded = jwt.verify(token, "MySuperSecret");
//                     // console.log('decodeddecoded' , decoded);
//                     if(decoded){
//                         await User.findById({ _id : decoded.userId })
//                         .then((existUser)=>{
//                             // console.log('userrrrrrrrr' , existUser);
//                             res.status(200).send({seccess:true , data: existUser});
//                         })
                        
                        
//                     }else{
//                         return res.status(403).json({seccess:false,message:'توکن وجود ندارد'});
//                     }
//                 } catch (err) {
//                     res.status(401).json({seccess:false,message:'توکن اشتباه است'});
//                 }
//                 break;
//         }
//         case 'POST':
//         {
//             // console.log('fileeeeeeeeeeeeee' , req.file);
//             const token = req.headers.authorization;
//             // const location = req.body.location;
//             // const email = req.body.email;
//             // // const photographerPicture = req.body.file;
//             // const photographer = req.body.photographer;
            
//             if (!token) {
//                 return res.status(403).json({seccess:false,message:'توکن وجود ندارد'});
//             }
//             try {
//                 // await upload().then(file => {
//                 //     console.log('not errrrrrrrrrr');
//                 //     const decoded = jwt.verify(token, "MySuperSecret");
            
//                 //     if(decoded){
//                 //         User.findByIdAndUpdate(decoded.userId , 
//                 //         {
//                 //             location:location,
//                 //             email:email,
//                 //             photographerPicture:"",
//                 //             photographer:photographer,
//                 //         },
//                 //         { returnOriginal: false },
//                 //         )
//                 //         .then((existUser)=>{
//                 //             // console.log('userrrrrrrrr' , existUser);
//                 //             res.status(200).send({seccess:true , data: existUser});
//                 //         })
                        
                        
//                 //     }else{
//                 //         return res.status(403).json({seccess:false,message:'توکن وجود ندارد'});
//                 //     }
//                 // }).catch(err =>{
//                 //     res.status(401).json({seccess:false,message:'فایل اپلود نشد مجددا تلاش کنید'});
//                 // })
//                 await upload.single('file')
//                 (req, {}, err => {
                    
//                     if(err){
//                         console.log('errrrrrrrrrr',err);
//                         res.status(401).json({seccess:false,message:'فایل اپلود نشد مجددا تلاش کنید'});
//                     }else{

//                         console.log('not errrrrrrrrrr');
//                         const decoded = jwt.verify(token, "MySuperSecret");
                
//                         if(decoded){
//                             User.findByIdAndUpdate(decoded.userId , 
//                             {
//                                 // location:location,
//                                 // email:email,
//                                 photographerPicture:"",
//                                 // photographer:photographer,
//                             },
//                             { returnOriginal: false },
//                             )
//                             .then((existUser)=>{
//                                 // console.log('userrrrrrrrr' , existUser);
//                                 res.status(200).send({seccess:true , data: existUser});
//                             })
                            
                            
//                         }else{
//                             return res.status(403).json({seccess:false,message:'توکن وجود ندارد'});
//                         }
//                     }
                    
//                 });
//                 // const { filename: image } = req.file;
//                 // console.log('fileeeeeeeeeeeeee' , image);
//                 // const decoded = jwt.verify(token, "MySuperSecret");
                
//                 // if(decoded){
//                 //     User.findByIdAndUpdate(decoded.userId , 
//                 //     {
//                 //         location:location,
//                 //         email:email,
//                 //         photographerPicture:"",
//                 //         photographer:photographer,
//                 //     },
//                 //     { returnOriginal: false },
//                 //     )
//                 //     .then((existUser)=>{
//                 //         // console.log('userrrrrrrrr' , existUser);
//                 //         res.status(200).send({seccess:true , data: existUser});
//                 //     })
                    
                    
//                 // }else{
//                 //     return res.status(403).json({seccess:false,message:'توکن وجود ندارد'});
//                 // }
        
//                 // console.log('req.fileeeeeeeeeeeee2',req.file);
//                 // // const { filename: image } = req.file;
//                 // myResolve("OK");
//                 // await upload(req, res)
//                 // .then(file =>{
//                 //     const decoded = jwt.verify(token, "MySuperSecret");
//                 //     console.log('fileeeeeeeeeeeeee' , file);
//                 //     if(decoded){
//                 //         User.findByIdAndUpdate(decoded.userId , 
//                 //         {
//                 //             location:location,
//                 //             email:email,
//                 //             photographerPicture:"",
//                 //             photographer:photographer,
//                 //         },
//                 //         { returnOriginal: false },
//                 //         )
//                 //         .then((existUser)=>{
//                 //             // console.log('userrrrrrrrr' , existUser);
//                 //             res.status(200).send({seccess:true , data: existUser});
//                 //         })
                        
                        
//                 //     }else{
//                 //         return res.status(403).json({seccess:false,message:'توکن وجود ندارد'});
//                 //     }
//                 // }).catch(err=>{
//                 //     res.status(401).json({seccess:false,message:'فایل اپلود نشد مجددا تلاش کنید'})
//                 // })
//                 // const decoded = jwt.verify(token, "MySuperSecret");
//                 // console.log('decodeddecoded' , decoded);
//                 // if(decoded){
//                 //     await User.findByIdAndUpdate(decoded.userId , 
//                 //     {
//                 //         location:location,
//                 //         email:email,
//                 //         photographerPicture:photographerPicture,
//                 //         photographer:photographer,
//                 //     },
//                 //     { returnOriginal: false },
//                 //     )
//                 //     .then((existUser)=>{
//                 //         console.log('userrrrrrrrr' , existUser);
//                 //         res.status(200).send({seccess:true , data: existUser});
//                 //     })
                    
                    
//                 // }else{
//                 //     return res.status(403).json({seccess:false,message:'توکن وجود ندارد'});
//                 // }
//             } catch (err) {
//                 res.status(401).json({seccess:false,message:'مشکلی رخ داده است'});
//             }
//             break;
//         }
//         default:
//             res.status(400).json({seccess:false,message:'مشکلی رخ داده است !!!',});
//             break;
//     }
// }