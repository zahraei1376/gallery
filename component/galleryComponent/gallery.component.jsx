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
import { createApi } from 'unsplash-js';
// const images = [
//     {id: "1",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-1.jpg'},
//     {id: "2",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-2.jpg'},
//     {id: "3",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-3.jpg'},
//     {id: "4",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-4.jpg'},
//     {id: "5",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-5.jpg'},
//     {id: "6",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-6.jpg'},
//     {id: "7",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-7.jpg'},
//     {id: "8",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-8.jpg'},
//     {id: "9",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-9.jpg'},
//     {id: "10",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-10.jpg'},
//     {id: "11",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-11.jpg'},
//     {id: "12",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-12.jpg'},
//     {id: "13",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-13.jpg'},
//     {id: "14",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-14.jpg'},
//     {id: "15",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-15.jpg'},
//     {id: "16",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-16.jpg'},
//     {id: "17",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-17.jpg'},
//     {id: "18",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-18.jpg'},
//     {id: "19",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-19.jpg'},
//     {id: "20",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-20.jpg'},
// ];
//////////////////////////////////////////////
// oU1NXiOT4ruv0yx6UBACJ3ddHQArACDGPA9UmLNAzCE access
// oe_j2TRIsQ3UaZnE7RCzyiGM5bdswTAOCFUeI63t6-M secret

// const unsplash = createApi({
//     accessKey: 'MY_ACCESS_KEY',
//     // `fetch` options to be sent with every request
//     headers: { 'X-Custom-Header': 'foo' },
//   });

// const unsplash = createApi({ accessKey: 'oU1NXiOT4ruv0yx6UBACJ3ddHQArACDGPA9UmLNAzCE' });
  
const images = [
    {id: "1",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-1.jpg'},
    {id: "2",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-2.jpg'},
    {id: "3",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-3.jpg'},
    {id: "4",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-4.jpg'},
    {id: "5",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-5.jpg'},
    {id: "6",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-6.jpg'},
    {id: "7",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-7.jpg'},
    {id: "8",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-8.jpg'},
    {id: "9",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-9.jpg'},
    {id: "10",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-10.jpg'},
    {id: "11",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-11.jpg'},
    {id: "12",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-12.jpg'},
    {id: "13",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-13.jpg'},
    {id: "14",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-14.jpg'},
    {id: "15",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-15.jpg'},
    {id: "16",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-16.jpg'},
    {id: "17",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-17.jpg'},
    {id: "18",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-18.jpg'},
    {id: "19",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-19.jpg'},
    {id: "20",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-20.jpg'},
    {id: "21",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-21.jpg'},
    {id: "22",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-22.jpg'},
    {id: "23",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-23.jpg'},
    {id: "24",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-24.jpg'},
    {id: "25",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-25.jpg'},
    {id: "26",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-26.jpg'},
    {id: "27",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-27.jpg'},
    {id: "28",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-28.jpg'},
    {id: "29",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-29.jpg'},
    {id: "30",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-30.jpg'},
    {id: "31",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-31.jpg'},
    {id: "32",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-32.jpg'},
    {id: "33",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-33.jpg'},
    {id: "34",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-34.jpg'},
    {id: "35",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-35.jpg'},
    {id: "36",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-36.jpg'},
    {id: "37",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-37.jpg'},
    {id: "38",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-38.jpg'},
    {id: "39",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-39.jpg'},
    {id: "40",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-40.jpg'},
    {id: "41",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-41.jpg'},
    {id: "42",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-42.jpg'},
    {id: "43",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-43.jpg'},
    {id: "44",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-44.jpg'},
    {id: "45",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-45.jpg'},
    {id: "46",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-46.jpg'},
    {id: "47",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-47.jpg'},
    {id: "48",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-48.jpg'},
    {id: "49",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-49.jpg'},
    {id: "50",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/random/random-50.jpg'},

];

const Gallery = ({RemoveItem}) =>{
    // unsplash.photos.list({}).then(result => {
    //     switch (result.type) {
    //       case 'error':
    //         console.log('error occurred: ', result.errors[0]);
    //       case 'success':
    //         const photo = result.response;
    //         console.log(photo);
    //     }
    //   });
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
        // if(window.innerWidth < 360){
        //     console.log('11111111111');
        //     SIZE = 1;
        //     setConverterImages(chunkify(images, SIZE , false));
        // }else if(window.innerWidth < 540){
        //     console.log('2222222222222222');
        //     SIZE = 2;
        //     setConverterImages(chunkify(images, SIZE , false));
        // }else if(window.innerWidth < 768){
        //     console.log('3333333333333');
        //     SIZE = 3;
        //     setConverterImages(chunkify(images, SIZE , false));
        // }else{
        //     console.log('444444444444');
        //     SIZE = 4;
        //     setConverterImages(chunkify(images, SIZE , false));
        // }

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
    useEffect(() =>{
        RemoveItem();
        // console.log('SIZE',SIZE);
        // @media only screen and (max-width: 360px){
        //     ${SIZE.size == 1}
        // }
    
        // @media only screen and (max-width: 540){
        //     ${SIZE.size == 2}
        // }
    
        // @media only screen and (max-width: 768px){
        //     ${SIZE.size == 3}
        // }

        window.addEventListener('resize', () =>{
            ResizeWindows();
        });

        ResizeWindows();

        // setConverterImages(chunkify(images, SIZE , false));
    },[]);
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
    

    const handleShowImage = (src) => {
        setSrcImage(src);
        toggleShowImage();
    }

    const toggleShowImage = () => {
        setShowComponent(pre => !pre);
    }
    //////////////////////////////////////////////
    return(
        <>
            <GalleryTitle>عکس های رایگان ما</GalleryTitle>
            {!loading ? 
                <GallerySecion size = {size}>
                   
                    {converterImages.map((CVI , topIndex) =>(
                        <GalleryColumn key={topIndex}>
                            {
                                CVI.map((image , index) =>{
                                    return(
                                            <Gallery__item key={index}>
                                                <ImageWrapper onClick = {() => handleShowImage(image.src)}>
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
                            }
                        </GalleryColumn>
                    ))}
                    {/* /////////////////////////////////////////////// */}
                    {showComponent ? <ShowImage imageSrc = {srcImage} close = {toggleShowImage} caption = "" /> : ""}
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