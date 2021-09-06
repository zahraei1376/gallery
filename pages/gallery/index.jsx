import { useEffect , useState } from 'react';
import Gallery from '../../component/galleryComponent/gallery.component';
import { useRouter } from 'next/router';
import { withRouter } from 'next/router'
import { GalleryPageSecion} from './galleryPage.styles';
//////////////////////////////////////////////
const GalleryPage = (props) =>{
    //////////////////////////////////////////
    const router = useRouter()
    // const { images } = router.query;
    const [pics , setPics] = useState([]);
    /////////////////////////////////////////////
    useEffect(() =>{
        // RemoveItem();
        setPics(props.router.query.images);
    },[props.router.query.images]);
    //////////////////////////
    return(
        <GalleryPageSecion>
            <Gallery images = {pics} />
        </GalleryPageSecion>
    )
};

export default withRouter(GalleryPage);