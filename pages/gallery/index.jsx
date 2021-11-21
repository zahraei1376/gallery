import { useEffect , useState } from 'react';
import MyNavbar from '../../component/Menu/Navbar2.component';
import Gallery from '../../component/galleryComponent/gallery.component';
import { withRouter } from 'next/router'
import { GalleryPageSecion ,TitleContainer,Title , SunTitle} from '../../pagesStyles/galleryPage.styles';
import ShowTopicsForGallery from '../../component/showTopicsForAnotherPage/showTopics.component';
import {animals , waterfall , cars ,people ,dress} from '../../generalMethod/topics';
//////////////////////////////////////////////
// import path from 'path';
// import fs from 'fs/promises';
//////////////////////////////////////////////
const GalleryPage = (props) =>{
    //////////////////////////////////////////
    const [topic,setTopic] = useState("");
    const [pics , setPics] = useState(props.data);
    const [customPics , setCustomPics] = useState(props.data);
    const [text , setText] = useState(props.textTopic);
    /////////////////////////////////////////////
    // useEffect(() =>{
    //     setPics(props.data);
    //     setCustomPics(props.data);
    //     setText(props.router.query.images);
    // },[props.router.query.images]);
    //////////////////////////
    useEffect(() =>{
        if(topic){
            setText(props.textTopic + " " + topic );
            // setText(props.router.query.images + " " + topic );
            var newPics = pics.filter(pic => pic.properties === topic);
            setCustomPics(newPics);
        }   
    },[topic]);
    //////////////////////////
    return(
        <GalleryPageSecion>
            <MyNavbar text={text} />
            <TitleContainer>
            </TitleContainer>
            
            <ShowTopicsForGallery setTopic={setTopic}/>
            <Gallery 
            images = {customPics}
            />
        </GalleryPageSecion>
    )
};

// export function getStaticParams() {
//     return ['images'];
// };

// export async function getStaticPaths() {
//     let paramList = [];
//     Topics.forEach(bundle => {
//       paramList.push({
//         params: {
//           images : bundle.name
//        }
//       });
//    });

//    return {
//       paths: paramList,
//       fallback: true
//     }
//   }

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
//     const {query} = context;

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
//             return {notFound:true};
//             // break;
//     }

//     return {
//         props : {
//             data:pics,
//         },
//         // fallback:'blocking'
//     }
// };
////////////////////////////////
export async function getServerSideProps(context){
    // const filePath = path.join(process.cwd() , 'generalMethod' , 'topics.js');
    // const fileData = await fs.readFile(filePath);
    // const data = JSON.parse(fileData);

    // if(!data){
    //     return {
    //         redirect:{
    //             destinaion:'/'
    //         }
            
    //     }
    // }

    // if(!data.value){
    //     return{notFound:true,}
    // }
    // return {
    //     props : {
    //         data:data,
    //     }
    // }
    // const {query} = context;
    

    const {query : {images}} = context;
    var pics;
    switch (images) {
        case 'حیوانات اهلی':
            pics = animals;
            break;
        case 'حیوانات وحشی':
            pics = animals;
            break;
        case 'حیوانات':
            pics = animals;
            break;
        case 'پوشاک':
            pics = dress;
            break;
        case 'مردم':
            pics = people;
            break;
        case 'طبیعت':
            pics = waterfall;
            break;
        case 'ماشین':
            pics = cars;
            break;
        default:
            // pics = animals;
            return {notFound:true};
            // break;
    }

    return {
        props : {
            data:pics,
            textTopic:images,
        },
        // fallback:'blocking'
    }
};

export default withRouter(GalleryPage);