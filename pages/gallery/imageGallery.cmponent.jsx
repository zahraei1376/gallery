import Image from 'next/image';
import {MyImage} from './gallery.styles';
import { useEffect , useState} from 'react';
const ImageGallery = ({index , handleRowImages}) =>{
    const [state , setState] = useState({dimensions: {}});
    useEffect(() =>{
        console.log('index',index);
    },[]);

    // const onImgLoad = ({target:img}) => {
    //     var currWidth = img.naturalWidth;
    //     var currHeight = img.naturalHeight;
    //     let ratio = currWidth / currHeight;
    //     // var rounded = Math.round(ratio * 10) / 10;
    //     // var rounded = Math.floor(ratio);
    //     // console.log('HorizontalRectangle' , rounded);
    //     // handleRowImages(index , rounded);
    //     if(ratio >= 1.6){
    //         console.log('HorizontalRectangle' , ratio);
    //         handleRowImages(index , 2);
    //     }else if(ratio < 0.5){
    //         console.log('VerticalRectangle' , ratio);
    //         handleRowImages(index , 4);
    //     }else{
    //         console.log('Square' , ratio);
    //         handleRowImages(index , 3);
    //     }
    // }

    return(
        <MyImage 
        // onLoad={onImgLoad}
         src={`/img/gal-${index}.jpg`} 
        layout='fill'
        // layout="responsive" objectFit="cover"
          alt={`Gallery image ${index + 1}`} />
    )
};

export default ImageGallery;