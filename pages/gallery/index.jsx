import { useEffect, useState } from 'react';
import MyNavbar from '../../component/Menu/Navbar2.component';
import Gallery from '../../component/galleryComponent/gallery.component';
import { withRouter } from 'next/router'
import { GalleryPageSecion, TitleContainer, Title, SunTitle } from '../../pagesStyles/galleryPage.styles';
import ShowTopicsForGallery from '../../component/showTopicsForAnotherPage/showTopics.component';
import { animals, waterfall, cars, people, dress } from '../../generalMethod/topics';

const GalleryPage = ({ data, textTopic }) => {
    //////////////////////////////////////////
    const [topic, setTopic] = useState("");
    const [pics, setPics] = useState(data);
    const [customPics, setCustomPics] = useState(data);
    const [text, setText] = useState(textTopic);
    /////////////////////////////////////////////
    useEffect(() => {
        if (topic) {
            setText(textTopic + " " + topic);
            // setText(props.router.query.images + " " + topic );
            var newPics = pics.filter(pic => pic.properties === topic);
            setCustomPics(newPics);
        }
    }, [topic]);

    useEffect(() => {
        if (textTopic) {
            setText(textTopic)
        }
    }, [textTopic])
    //////////////////////////
    return (
        <GalleryPageSecion>
            <MyNavbar text={text} />
            <TitleContainer>
            </TitleContainer>

            <ShowTopicsForGallery setTopic={setTopic} />
            <Gallery
                images={customPics}
            />
        </GalleryPageSecion>
    )
};
////////////////////////////////
export async function getServerSideProps(context) {
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


    const { query: { images } } = context;
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
            return { notFound: true };
        // break;
    }

    return {
        props: {
            data: pics,
            textTopic: images,
        },
        // fallback:'blocking'
    }
};

export default withRouter(GalleryPage);