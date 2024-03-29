import dbConnec from '../../../utils/dbConnect';
import verifyToken from '../../../utils/middleware/withValidation';
import UserModel from '../../../models/UserModel';
import Files from '../../../models/FileModel';

dbConnec();

const handler = async (req, res) => {
  const { method } = req;
  switch (method) {
    case 'GET':
      {
        try {

          ////////////////////////////////////////
          var decoded = req.auth;
          if (!decoded) {
            res.status(403).json({ seccess: false, reload: true, message: 'توکن برای اعتبار سنجی نیاز است!!! وارد شوید' });
          }
          var id = decoded.userId;
          UserModel.findOne({ user: id }).exec((err, findedUser) => {
            const data = {};
            data.user = findedUser;
            if (err) {
              res.status(401).json({ seccess: false, message: 'مشکلی رخ داده است !' });
            } else {
              if (!findedUser) {
                res.status(403).json({ seccess: false, reload: true, message: 'توکن برای اعتبار سنجی نیاز است!!! وارد شوید' });
              } else {
                Files.find({ user: id }).exec((err, filesUser) => {
                  data.files = filesUser;
                  if (err) {
                    res.status(401).json({ seccess: false, message: 'مشکلی رخ داده است !' });
                  } else {
                    res.status(200).send({ seccess: true, data: data });
                  }
                });
              }
            }
          });

        } catch (err) {
          res.status(500).json({ seccess: false, message: 'مشکلی رخ داده است !!!' });
        }
        break;
      }
    default:
      res.status(400).json({ seccess: false, message: 'مشکلی رخ داده است !!!', });
      break;
  }
}
export default verifyToken(handler);
////////////////////////////////////////////////////