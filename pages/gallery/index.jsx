import { useEffect , useState } from 'react';
import MyNavbar from '../../component/Menu/Navbar.component';
import Gallery from '../../component/galleryComponent/gallery.component';
import { withRouter } from 'next/router'
import { GalleryPageSecion ,TitleContainer,Title , SunTitle} from './galleryPage.styles';
import ShowTopicsForGallery from '../../component/showTopicsForAnotherPage/showTopics.component';
import {animals , waterfall , cars ,people ,dress} from '../../generalMethod/topics';
import TitleStyle from '../../component/title/title.component';
// import { selectCartItem } from '../../redux/cart/cart.selectors';
// import { createStructuredSelector } from 'reselect';
// import { connect } from 'react-redux';
//////////////////////////////////////////////
const GalleryPage = (props) =>{
    //////////////////////////////////////////
    const [topic,setTopic] = useState("");
    const [pics , setPics] = useState([]);
    const [customPics , setCustomPics] = useState([]);
    const [text , setText] = useState('');
    /////////////////////////////////////////////
    const handleImage = () => {
        switch (props.router.query.images) {
            case 'حیوانات اهلی':
                setPics(animals);
                setCustomPics(animals);
                break;
            case 'حیوانات وحشی':
                setPics(animals);
                setCustomPics(animals);
                break;
            case 'حیوانات':
                setPics(animals);
                setCustomPics(animals);
                break;
            case 'پوشاک':
                setPics(dress);
                setCustomPics(dress);
                break;
            case 'طراحی داخلی':
                setPics(animals);
                setCustomPics(animals);
                break;
            case 'مردم':
                setPics(people);
                setCustomPics(people);
                break;
            case 'طبیعت':
                setPics(waterfall);
                setCustomPics(waterfall);
                break;
            case 'فیلم':
                setPics(people);
                setCustomPics(people);
                break;

            case 'ماشین':
                setPics(cars);
                setCustomPics(cars);
                break;

            case 'خیابان':
                setPics(animals);
                setCustomPics(animals);
                break;
        
            default:
                setPics(animals);
                setCustomPics(animals);
                break;
        }
    }
    /////////////////////////////////////////////
    useEffect(() =>{
        handleImage();
        setText(props.router.query.images);
    },[props.router.query.images]);
    //////////////////////////
    useEffect(() =>{
        if(topic){
            setText(props.router.query.images + " " + topic );
            var newPics = pics.filter(pic => pic.properties === topic);
            setCustomPics(newPics);
        }   
    },[topic]);
    //////////////////////////
    return(
        <GalleryPageSecion>
            <MyNavbar scrolling = {true} />
            <TitleContainer>
            {/* <Title>{props.router.query.images}</Title> */}
            <TitleStyle text={text}/>
            <SunTitle>{`یافتن بهترین و جذاب ترین عکس های رایگان  از ${text} را از لنز دوربین 'گالری' ببینید با ما دنیای اطراف خود را زیباتر و با دقت تر ببینید`}</SunTitle>
            </TitleContainer>
            
            <ShowTopicsForGallery setTopic={setTopic}/>
            <Gallery 
            images = {customPics}
            />
        </GalleryPageSecion>
    )
};

// const mapStateToProps = createStructuredSelector({
//     saveCartItem : selectCartItem,
//  });


export default withRouter(GalleryPage);

// export default withRouter(connect(mapStateToProps)(GalleryPage));