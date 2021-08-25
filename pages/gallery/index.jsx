import { useState , useEffect } from 'react';
import { GallerySecion,Gallery__item ,ImageWrapper,TitleContainer,Title,SavedBoxContainer, GalleryColumn,} from './gallery.styles';
import ImageGallery from './imageGallery.cmponent';
import ShowImage from '../../component/imageShow/showImage.component';
import SavedImages from '../../component/savedImage/savedImage.component';
import CardSaved from '../../component/sevedBox/savedBox.component';
//////////////////////////////////////////////
const row = [1,2,3];
const images = [
    {title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-1.jpg'},
    {title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-2.jpg'},
    {title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-3.jpg'},
    {title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-4.jpg'},
    {title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-5.jpg'},
    {title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-6.jpg'},
    {title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-7.jpg'},
    {title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-8.jpg'},
    {title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-9.jpg'},
    {title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-10.jpg'},
    {title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-11.jpg'},
    {title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-12.jpg'},
    {title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-13.jpg'},
    {title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-14.jpg'},
    {title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-15.jpg'},
    {title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-16.jpg'},
    {title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-17.jpg'},
    {title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-18.jpg'},
    {title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-19.jpg'},
    {title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-20.jpg'},
];
//////////////////////////////////////////////
const Gallery = () =>{
    //////////////////////////////////////////////
    const [showComponent , setShowComponent] = useState(false);
    const [srcImage , setSrcImage] = useState('');
    const [ location, setLocation] = useState({})
    //////////////////////////////////////////////
    useEffect( () => {
        console.log('locationlocationlocation',location);
    },[location]);
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
                                            <ImageWrapper onClick = {() => handleShowImage(`/img/bunny/bunny-${(topIndex + 1) * (index + 1)}.jpg`)}>
                                                <ImageGallery index = {(topIndex + 1) * (index + 1)} />
                                            </ImageWrapper>
                                            <SavedBoxContainer>
                                                <SavedImages setLocation={setLocation} />
                                            </SavedBoxContainer>
                                            
                                            
                                            {/* <TitleContainer>
                                                <Title>{image.title}</Title>
                                            </TitleContainer> */}
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
            <CardSaved location={location} setLocation = {setLocation} />
        </GallerySecion>
    )
};

export default Gallery;