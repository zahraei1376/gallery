import {useState} from 'react';
import {TopicBoxContainer , TopicImageContainer ,TopicImage,TopicPhotographerContainer,
    TopicPhotographerImageContainer,TopicPhotographerImage, TopicPhotographerName,
     TopicBoxSubTitle ,PhotographerInfo ,PhotographerTitle , TopicLayerBack , AttachContainer ,AttachIcon } from './topicBox.styles';

const TopicBox = ({topic}) =>{
    const [location , setLocation] = useState(null);
    const handleLoaction = (e) =>{
        console.log('dddddddddd' , e , {x: e.screenX, y: e.screenY})
        setLocation({x: e.screenX, y: e.screenY});
    }
    return(
        <TopicBoxContainer onMouseEnter = {e => handleLoaction(e)} location={location}>
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