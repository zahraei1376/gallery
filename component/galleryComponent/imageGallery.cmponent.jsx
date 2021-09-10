import {MyImage} from './gallery.styles';
const ImageGallery = ({imageSrc }) =>{
    return(
        <MyImage 
        // loader={prismicLoader}
        src={imageSrc}
        layout='fill'
        alt={`Gallery image`} />
    )
};

export default ImageGallery;