import { useState , useEffect } from 'react';
import { GallerySecion,Gallery__item ,ImageWrapper,TitleContainer,Title,SavedBoxContainer, GalleryColumn,} from './gallery.styles';
import ImageGallery from './imageGallery.cmponent';
import ShowImage from '../../component/imageShow/showImage.component';
import SavedImages from '../../component/savedImage/savedImage.component';
import CardSaved from '../../component/sevedBox/savedBox.component';
//////////////////////////////////////////////
import {RemoveItem} from '../../redux/cart/cart.action';
import {connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import axios from 'axios';
const row = [1,2,3];
const images = [
    {id: "1",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-1.jpg'},
    {id: "2",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-2.jpg'},
    {id: "3",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-3.jpg'},
    {id: "4",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-4.jpg'},
    {id: "5",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-5.jpg'},
    {id: "6",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-6.jpg'},
    {id: "7",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-7.jpg'},
    {id: "8",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-8.jpg'},
    {id: "9",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-9.jpg'},
    {id: "10",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-10.jpg'},
    {id: "11",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-11.jpg'},
    {id: "12",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-12.jpg'},
    {id: "13",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-13.jpg'},
    {id: "14",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-14.jpg'},
    {id: "15",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-15.jpg'},
    {id: "16",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-16.jpg'},
    {id: "17",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-17.jpg'},
    {id: "18",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-18.jpg'},
    {id: "19",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-19.jpg'},
    {id: "20",title:'حیوانات دوست داشتنی' , sunTitle :'خرگوش در طبیعت' , src :'/img/bunny/bunny-20.jpg'},
];
//////////////////////////////////////////////
const Gallery = ({RemoveItem}) =>{
    //////////////////////////////////////////////
    const [showComponent , setShowComponent] = useState(false);
    const [srcImage , setSrcImage] = useState('');
    const [ location, setLocation] = useState({})
    //////////////////////////////////////////////
    useEffect(() =>{
        // RemoveItem();

        // fetch("https://nijikokun-random-cats.p.rapidapi.com/random/kitten", {
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-host": "nijikokun-random-cats.p.rapidapi.com",
        //         "x-rapidapi-key": "4dc52e988bmsh84a87edcff12eb0p148fb2jsn48d292c20ffc"
        //     }
        // })
        // .then(response => {
        //     return response.json();
            
        // })
        // .then(res =>{
        //     console.log('response' , res);
        // })
        // .catch(err => {
        //     console.error(err);
        // });

        // fetch("https://cors-anywhere.herokuapp.com/https://slashtheapidog.com/api/bones")
        // .then(response => {
        //     return response.json();
            
        // })
        // .then(res =>{
        //     console.log('response' , res);
        // })
        // .catch(err => {
        //     console.error(err);
        // });

        var formdata = new FormData();
        formdata.append('username', 'Chris');

        var requestOptions = {
        method: 'GET',
        body: formdata,
        redirect: 'follow'
        };

        fetch("https://cors-anywhere.herokuapp.com/https://slashtheapidog.com/api/bones", {
            method: 'GET',
            // body: formdata, 
            // headers: {
            //   'Content-Type': 'application/x-www-form-urlencoded',
            // },
            redirect: 'follow', 
            
          }).then(response =>{ 
            console.log("result",response)
              return response.text();
            })
          .then(result => console.log("result",result))
          .catch(error => console.log('error', error));

        // fetch("https://cors-anywhere.herokuapp.com/https://slashtheapidog.com/api/bones", requestOptions)
        // .then(response => response.text())
        // .then(result => console.log("result",result))
        // .catch(error => console.log('error', error));
        
    },[]);
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
                                            <SavedBoxContainer >
                                                <SavedImages setLocation={setLocation} imageInfo = {images[(topIndex + 1) * (index + 1)]}/>
                                            </SavedBoxContainer>
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

const mapDispatchToProps = dispatch =>({
    RemoveItem: () => dispatch(RemoveItem()),
});

export default connect(null , mapDispatchToProps)(Gallery);