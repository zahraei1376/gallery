import { useEffect , useState } from 'react';
import MyNavbar from '../../component/Menu/Navbar2.component';
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
// import path from 'path';
// import fs from 'fs/promises';
//////////////////////////////////////////////
const GalleryPage = (props) =>{
    //////////////////////////////////////////
    const [topic,setTopic] = useState("");
    const [pics , setPics] = useState([]);
    const [customPics , setCustomPics] = useState([]);
    const [text , setText] = useState('');
    ////////////////////////////////////////////
    const [scrolling,setScrolling] = useState(false);
    ////////////////////////////////////////////
    useEffect(()=>{
        window.addEventListener('scroll', scrollFunction);
        return () => window.removeEventListener('scroll', scrollFunction);
    },[]);
    ////////////////////////////////////////////
    const scrollFunction = () => {
        var y = window.scrollY;
        // if ( y >= 61) {
        if ( y >= 70) {
            if(!scrolling){
                setScrolling(true);
            }
        }else{
            // if(scrolling){
                setScrolling(false);
            // }
        }
    } 
    ////////////////////////////////////////////
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
        // setPics(props.data);
        // setCustomPics(props.data);
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
            <MyNavbar scrolling = {scrolling} text={text} />
            <TitleContainer>
            {/* <Title>{props.router.query.images}</Title> */}
            {/* <TitleStyle text={text}/> */}
            {/* <SunTitle>{`یافتن بهترین و جذاب ترین عکس های رایگان  از ${text} را از لنز دوربین 'گالری' ببینید با ما دنیای اطراف خود را زیباتر و با دقت تر ببینید`}</SunTitle> */}
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

// export async function getStaticProps(context){
//     // const filePath = path.join(process.cwd() , 'generalMethod' , 'topics.js');
//     // const fileData = await fs.readFile(filePath);
//     // const data = JSON.parse(fileData);

//     // if(!data){
//     //     return {
//     //         redirect:{
//     //             destinaion:'/'
//     //         }
            
//     //     }
//     // }

//     // if(!data.value){
//     //     return{notFound:true,}
//     // }
//     // return {
//     //     props : {
//     //         data:data,
//     //     }
//     // }
//     console.log('context', context.params);

//     // const {params} = context;
//     // const galleryId = params.gId;
//     var pics;
//     switch ("1") {
//         case 'حیوانات اهلی':
//             pics = animals;
//             break;
//         case 'حیوانات وحشی':
//             pics = animals;
//             break;
//         case 'حیوانات':
//             pics = animals;
//             break;
//         case 'پوشاک':
//             pics = dress;
//             break;
//         case 'مردم':
//             pics = people;
//             break;
//         case 'طبیعت':
//             pics = waterfall;
//             break;
//         case 'ماشین':
//             pics = cars;
//             break;
//         default:
//             pics = animals;
//             break;
//     }

//     return {
//         props : {
//             data:pics,
//         }
//     }
// };

export default withRouter(GalleryPage);

// export default withRouter(connect(mapStateToProps)(GalleryPage));