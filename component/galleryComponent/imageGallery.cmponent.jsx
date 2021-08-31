import {MyImage} from './gallery.styles';
const ImageGallery = ({imageSrc }) =>{
    
    return(
        <MyImage 
        src={imageSrc} 
        layout='fill'
        alt={`Gallery image`} />
    )
};

export default ImageGallery;