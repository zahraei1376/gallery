import {useState , useEffect} from 'react';
import {TopicBoxContainer , TopicImageContainer ,TopicImage,TopicPhotographerContainer,
    TopicPhotographerImageContainer,TopicPhotographerImage, TopicPhotographerName,
     TopicBoxSubTitle ,PhotographerInfo ,PhotographerTitle , TopicLayerBack , AttachContainer ,AttachIcon } from './topicBox.styles';
import { useRouter } from 'next/router';
const TopicBox = ({topic}) =>{
    const [location , setLocation] = useState(null);
    const handleLoaction = (e) =>{
        setLocation({x: e.screenX, y: e.screenY});
    };
    const router = useRouter();

    return(
        <TopicBoxContainer onMouseEnter = {e => handleLoaction(e)} location={location} onClick={() => router.push({
            pathname: '/gallery',
            query: { images: topic.name} 
            })}>
            <TopicLayerBack />
            <AttachContainer>
                <AttachIcon/>
            </AttachContainer>
            <TopicImageContainer>
                <TopicImage src={topic.topicImage} layout="fill" objectFit="cover" />
            </TopicImageContainer>
            <TopicPhotographerContainer>
                <TopicPhotographerImageContainer>
                    <TopicPhotographerImage src={topic.picture} layout="fill" />
                </TopicPhotographerImageContainer>
                <PhotographerInfo>
                    <PhotographerTitle>{topic.title}</PhotographerTitle>
                    <TopicPhotographerName>{topic.photographer}</TopicPhotographerName>
                </PhotographerInfo>
                
            </TopicPhotographerContainer>
            <TopicBoxSubTitle>{topic.discription}</TopicBoxSubTitle>
        </TopicBoxContainer>
    )
};

export default TopicBox;