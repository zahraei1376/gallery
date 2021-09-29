import { useEffect , useState } from 'react';
import MyNavbar from '../../component/Menu/Navbar.component';
import Gallery from '../../component/galleryComponent/gallery.component';
import { withRouter } from 'next/router'
import { GalleryPageSecion ,TitleContainer,Title , SunTitle} from './galleryPage.styles';
import ShowTopicsForGallery from '../../component/showTopicsForAnotherPage/showTopics.component';
import {animals , waterfall , cars ,people} from '../../generalMethod/topics';
// import { selectCartItem } from '../../redux/cart/cart.selectors';
// import { createStructuredSelector } from 'reselect';
// import { connect } from 'react-redux';
//////////////////////////////////////////////
const GalleryPage = (props) =>{
    //////////////////////////////////////////
    const [topic,setTopic] = useState(props.router.query.images);
    const [pics , setPics] = useState([]);
    /////////////////////////////////////////////
    const handleImage = () => {
        switch (topic) {
            case 'حیوانات اهلی':
                setPics(animals);
                break;
            case 'حیوانات وحشی':
                setPics(animals);
                break;
            case 'حیوانات':
                setPics(animals);
                break;
            case 'پوشاک':
                setPics(animals);
                break;
            case 'طراحی داخلی':
                setPics(animals);
                break;
            case 'مردم':
                setPics(people);
                break;
            case 'طبیعت':
                setPics(waterfall);
                break;
            case 'فیلم':
                setPics(people);
                break;

            case 'ماشین':
                setPics(cars);
                break;

            case 'خیابان':
                setPics(animals);
                break;

            // case 'ذخیره':
            //     setPics(saveCartItem);
            //     break;
        
            default:
                setPics(animals);
                break;
        }
    }
    /////////////////////////////////////////////
    useEffect(() =>{
        // setPics(JSON.parse(props.router.query.images));
        // setPics(props.router.query.images);
        handleImage();
    },[props.router.query.images]);
    //////////////////////////
    return(
        <GalleryPageSecion>
            <MyNavbar scrolling = {true} />
            <TitleContainer>
            <Title>{props.router.query.images}</Title>
            <SunTitle>{`یافتن بهترین و جذاب ترین عکس های رایگان  از ${props.router.query.images} را از لنز دوربین 'گالری' ببینید با ما دنیای اطراف خود را زیباتر و با دقت تر ببینید`}</SunTitle>
            </TitleContainer>
            
            <ShowTopicsForGallery/>
            <Gallery 
            images = {pics}
            />
        </GalleryPageSecion>
    )
};

// const mapStateToProps = createStructuredSelector({
//     saveCartItem : selectCartItem,
//  });


export default withRouter(GalleryPage);

// export default withRouter(connect(mapStateToProps)(GalleryPage));