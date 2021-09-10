import { useState , useEffect } from 'react';
import {GalleryTitle,SpinnerContainer, GallerySecion,Gallery__item ,ImageWrapper,TitleContainer,Title,SavedBoxContainer, GalleryColumn,} from './gallery.styles';
import ImageGallery from './imageGallery.cmponent';
import ShowImage from '../../component/imageShow/showImage.component';
import SavedImages from '../../component/savedImage/savedImage.component';
import CardSaved from '../../component/sevedBox/savedBox.component';
//////////////////////////////////////////////
import {RemoveItem} from '../../redux/cart/cart.action';
import {connect } from 'react-redux';
import MySpinner from '../MySpinner/MySpinner.component';
import { limitRecipeTitle } from '../../generalMethod/limitRecipeTitle';

const Gallery = ({RemoveItem , images}) =>{
    //////////////////////////////////////////////
    const [showComponent , setShowComponent] = useState(false);
    const [loading , setLoading] = useState(false);
    const [srcImage , setSrcImage] = useState('');
    const [ location, setLocation] = useState({});
    const [converterImages , setConverterImages] = useState([]);
    const [width, setWidth] = useState(0);
    const [size, setSize] = useState(0);
    //////////////////////////////////////////////
    function ResizeWindows(){
        setWidth(window.innerWidth);
        var SIZE = 4;
        if(images && images.length > 0 && images[0]){
            if(window.innerWidth < 540){
                SIZE = 1;
                setConverterImages(chunkify(images, SIZE , true));
            }else if(window.innerWidth < 768){
                SIZE = 2;
                setConverterImages(chunkify(images, SIZE , true));
            }else if(window.innerWidth < 1024){
                SIZE = 3;
                setConverterImages(chunkify(images, SIZE , true));
            }else{
                SIZE = 4;
                setConverterImages(chunkify(images, SIZE , true));
            }
    
            setSize(SIZE);
        }
        
    }

    useEffect(() => {
        RemoveItem();
        console.log('imagesimages',images);
        window.addEventListener('resize', () =>{
            ResizeWindows();
        });
    }, []);

    useEffect(() =>{
        ResizeWindows();
    },[images]);
    //////////////////////////////////////////////
    function chunkify(a, n, balanced) {
        if (n < 2)
            return [a];
    
        var len = a.length,
                out = [],
                i = 0,
                size;
    
        if (len % n === 0) {
            size = Math.floor(len / n);
            while (i < len) {
                out.push(a.slice(i, i += size));
            }
        }
    
        else if (balanced) {
            while (i < len) {
                size = Math.ceil((len - i) / n--);
                out.push(a.slice(i, i += size));
            }
        }
    
        else {
    
            n--;
            size = Math.floor(len / n);
            if (len % size === 0)
                size--;
            while (i < size * n) {
                out.push(a.slice(i, i += size));
            }
            out.push(a.slice(size * n));
    
        }
    
        return out;
    }
    

    const handleShowImage = (imageInfo) => {
        setSrcImage(imageInfo);
        toggleShowImage();
    }

    const toggleShowImage = () => {
        setShowComponent(pre => !pre);
    }
    //////////////////////////////////////////////

    return(
        <>
            {/* <GalleryTitle>عکس های رایگان ما</GalleryTitle> */}
            {!loading ? 
                <GallerySecion size = {size}>
                   
                    {converterImages.map((CVI , topIndex) =>(
                        <GalleryColumn key={topIndex}>
                            {CVI && CVI.length > 0 ?
                                CVI.map((image , index) =>{
                                    return(
                                            <Gallery__item key={index}>
                                                <ImageWrapper onClick = {() => handleShowImage(image)}>
                                                    <ImageGallery imageSrc = {image.src} />
                                                </ImageWrapper>
                                                <TitleContainer>
                                                    <Title>{limitRecipeTitle(image.title , 25)}</Title>
                                                </TitleContainer>
                                                <SavedBoxContainer >
                                                    <SavedImages setLocation={setLocation} imageInfo = {image}/>
                                                </SavedBoxContainer>
                                            </Gallery__item>
                                            
                                    )}
                                )
                            : ''}
                        </GalleryColumn>
                    ))}
                    {/* /////////////////////////////////////////////// */}
                    {showComponent ? <ShowImage data = {srcImage} close = {toggleShowImage} caption = "" /> : ""}
                    {/* /////////////////////////////////////////////// */}
                    <CardSaved location={location} setLocation = {setLocation} width={width} />
                </GallerySecion>
            : <SpinnerContainer><MySpinner /></SpinnerContainer>}
        </>
    )
};

const mapDispatchToProps = dispatch =>({
    RemoveItem: () => dispatch(RemoveItem()),
});

export default connect(null , mapDispatchToProps)(Gallery);