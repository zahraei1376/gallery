////////////////////////////////////////////
import { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
/////////////////////////////////////////////
// function CropImage({ src }) {
//     const [crop, setCrop] = useState({ aspect: 16 / 9 });
//     return <ReactCrop src={src} crop={crop} onChange={newCrop => setCrop(newCrop)} />;
// };

// export default CropImage;

function CropImage({ src , setCropImage}) {
    const [upImg, setUpImg] = useState();
    // const imgRef = useRef(null);
    // const previewCanvasRef = useRef(null);
    const [crop, setCrop] = useState({aspect: 16 / 9 });
    const [completedCrop, setCompletedCrop] = useState(null);

    const handle = (c) =>{
        console.log('ccccccccccccc',c);
        setCompletedCrop(c)
        // setCropImage(c)
    }
    return <ReactCrop
    src={src}
    // onImageLoaded={onLoad}
    crop={crop}
    onChange={(c) => setCrop(c)}
    onComplete={(c) => handle(c)}
  />;
};

export default CropImage;