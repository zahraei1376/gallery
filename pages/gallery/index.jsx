import { useEffect , useState } from 'react';
import MyNavbar from '../../component/Menu/Navbar.component';
import Gallery from '../../component/galleryComponent/gallery.component';
import { useRouter } from 'next/router';
import { withRouter } from 'next/router'
import { GalleryPageSecion ,TitleContainer,Title , SunTitle} from './galleryPage.styles';
import ShowTopicsForGallery from '../../component/showTopicsForAnotherPage/showTopics.component';
//////////////////////////////////////////////
const GalleryPage = (props) =>{
    //////////////////////////////////////////
    const router = useRouter()
    // const { images } = router.query;
    const [pics , setPics] = useState([]);
    /////////////////////////////////////////////
    useEffect(() =>{
        // RemoveItem();
        setPics(JSON.parse(props.router.query.images));
    },[props.router.query.images]);
    //////////////////////////
    var name = 'طبیعت';
    return(
        <GalleryPageSecion>
            <MyNavbar scrolling = {true} />
            <TitleContainer>
            <Title>{name}</Title>
            <SunTitle>{`یافتن بهترین و جذاب ترین عکس های رایگان  از ${name} را از لنز دوربین 'گالری' ببینید با ما دنیای اطراف خود را زیباتر و با دقت تر ببینید`}</SunTitle>
            </TitleContainer>
            
            <ShowTopicsForGallery/>
            <Gallery images = {pics} />
        </GalleryPageSecion>
    )
};

export default withRouter(GalleryPage);