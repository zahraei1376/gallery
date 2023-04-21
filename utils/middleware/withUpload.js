const multer = require('multer');
import { v4 as uuidv4 } from 'uuid';
//////////////////////////////////////
export const config = {
    api: {
        bodyParser: false,
    },
}
///////////////////////////////////////
const fileStorage = multer.diskStorage({

    destination: (req, file, cb) => {//مقصد
        cb(null, './public/upload');
    },
    filename: (req, file, cb) => {//نام فایل
        cb(null, uuidv4() + '-' + file.originalname);
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

var upload = multer({ storage: fileStorage, fileFilter: fileFilter });
////////////////////////////////////////////////////////////////////
const myUpload = (req, res) => {
    return new Promise((resolve, reject) => {
        var name = '';
        return upload.single("myFile")(req, {}, err => {
            if (err) {
                return reject(err);
            }
            else {
                if (req.file) {
                    const { filename: image } = req.file;
                    name = image;
                    req.fileName = `/upload/${name}`;
                } else {
                    req.fileName = ``;
                }

                return resolve(name);
            }
        });
    })
}

async function withUpload(req, res) {
    return await new Promise(async (resolve, reject) => {
        await myUpload(req, res).then(data => {
            return;
        }).catch(err => {
            return res.status(401).send({ seccess: false, message: 'خطایی رخ داده است پس از مدتی مجددا تلاش کنید!!!' });
        })
        return resolve();
    })
};


export default withUpload;