import { IncomingForm } from 'formidable';
const formParse = (req, res) =>{
    return new Promise((resolve, reject) => {
        const form = new IncomingForm()
        
        form.parse(req, (err, fields, files) => {
            if (err) return reject(err)
            return resolve({ fields, files })
        })
    });
};

export default formParse;