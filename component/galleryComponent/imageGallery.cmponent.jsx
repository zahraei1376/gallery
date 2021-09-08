import {useEffect} from 'react';
import {MyImage} from './gallery.styles';
const ImageGallery = ({imageSrc }) =>{
    // const prismicLoader = ({ src, width, quality }) => {
    //     return `${src}?w=${width}&q=${quality || 75}`
    //   }
    useEffect(() =>{
            console.log('imageSrcimageSrc',imageSrc);
    },[])
    return(
        <MyImage 
        // loader={prismicLoader}
        src={imageSrc}
        layout='fill'
        alt={`Gallery image`} />
    )
};

export default ImageGallery;