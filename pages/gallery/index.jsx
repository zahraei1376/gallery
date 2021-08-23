import { useState } from 'react';
import { GallerySecion,Gallery__item ,ImageWrapper,TitleContainer,Title, GalleryColumn} from './gallery.styles';
import ImageGallery from './imageGallery.cmponent';
import ShowImage from '../../component/imageShow/showImage.component';
//////////////////////////////////////////////
const row = [1,2,3];
const images = [{title:'حیوانات دوست داشتنی'},{title:'حیوانات دوست داشتنی'},{title:'حیوانات دوست داشتنی'},{title:'حیوانات دوست داشتنی'},
{title:'حیوانات دوست داشتنی'},{title:'حیوانات دوست داشتنی'},{title:'حیوانات دوست داشتنی'},{title:'حیوانات دوست داشتنی'},
{title:'حیوانات دوست داشتنی'},{title:'حیوانات دوست داشتنی'},{title:'حیوانات دوست داشتنی'},{title:'حیوانات دوست داشتنی'}];
//////////////////////////////////////////////
const Gallery = () =>{
    //////////////////////////////////////////////
    const [showComponent , setShowComponent] = useState(false);
    const [srcImage , setSrcImage] = useState('');
    //////////////////////////////////////////////
    const handleShowImage = (src) => {
        setSrcImage(src);
        toggleShowImage();
    }

    const toggleShowImage = () => {
        setShowComponent(pre => !pre);
    }
    //////////////////////////////////////////////
    return(
        <GallerySecion>
            {
                row.map((cul , topIndex) =>(
                    <GalleryColumn key={topIndex}>
                        {
                             images.map((image , index) =>{
                                console.log('topIndex * index < images.length',(topIndex + 1) * (index + 1 ) , images.length);
                                return (topIndex + 1) * (index + 1) < images.length ?
                                (
                                        <Gallery__item key={index}>
                                            <ImageWrapper onClick = {() => handleShowImage(`/img/gal-${(topIndex + 1) * (index + 1)}.jpg`)}>
                                                <ImageGallery index = {(topIndex + 1) * (index + 1)} />
                                            </ImageWrapper>
                                            <TitleContainer>
                                                <Title>{image.title}</Title>
                                            </TitleContainer>
                                        </Gallery__item>
                                        
                                ): ''
                            })
                        }
                    </GalleryColumn>
                ))
            }
            {/* /////////////////////////////////////////////// */}
            {/* {
                images.map((image , index) =>(
                    <GalleryColumn key = {index}>
                        <Gallery__item key = {index} id={`animal${index}`} row = {state && state[index] ? state[index] : null} >
                            <Gallery__item>
                                <ImageWrapper>
                                    <ImageGallery index = {index} handleRowImages = {handleRowImages} />
                                </ImageWrapper>
                                <TitleContainer>
                                    <Title>{image.title}</Title>
                                </TitleContainer>
                            </Gallery__item>
                            
                            
                            <Image  src={`/img/gal-${index + 1}.jpg`} layout='fill' alt={`Gallery image ${index + 1}`} /> 
                        </Gallery__item>
                    </GalleryColumn>
                ))
            } */}
            {/* /////////////////////////////////////////////// */}
            {showComponent ? <ShowImage imageSrc = {srcImage} close = {toggleShowImage} caption = "" /> : ""}
            {/* /////////////////////////////////////////////// */}
        </GallerySecion>
    )
};

export default Gallery;