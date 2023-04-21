import dbConnec from '../../../utils/dbConnect';
import verifyToken from '../../../utils/middleware/withValidation';
import withUpload from '../../../utils/middleware/withUpload';
import User from '../../../models/UserModel';
import File from '../../../models/FileModel';

dbConnec();

export const config = {
    api: {
        bodyParser: false,
    }
};

const handler = async (req, res) => {
    return new Promise(async (resolve) => {
        const { method } = req;
        switch (method) {
            case 'POST':
                {
                    try {
                        await withUpload(req, res);
                        const properties = req.body.properties;
                        const title = req.body.title;
                        const sunTitle = req.body.sunTitle;
                        var decoded = req.auth;
                        var fileName = req.fileName;
                        await User.findById(decoded.userId)
                            .then((existUser) => {
                                if (!existUser) {
                                    res.status(401).send({ seccess: false, message: 'اطلاعاتی یافت نشد' });
                                    resolve();
                                }
                                const FileModel = new File({
                                    properties,
                                    title,
                                    sunTitle,
                                    src: fileName,
                                });
                                FileModel.user = existUser;
                                FileModel.save();
                                res.status(201).json({ seccess: true, message: 'فایل آپلود شد!!!', });
                                resolve();
                            }).catch(err => {
                                res.status(401).send({ seccess: false, message: 'مشکلی رخ داده است' });
                                resolve();
                            })
                    } catch (err) {
                        res.status(401).json({ seccess: false, message: 'مشکلی رخ داده است' });
                        resolve();
                    }
                    break;
                }
            default:
                res.status(400).json({ seccess: false, message: 'مشکلی رخ داده است !!!', });
                break;
        }
    })
}

export default verifyToken(handler);