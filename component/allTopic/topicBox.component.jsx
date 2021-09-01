import{TopicBoxContainer , TopicImageContainer ,TopicImage,TopicPhotographerContainer,
    TopicPhotographerImageContainer,TopicPhotographerImage, TopicPhotographerName,
     TopicBoxSubTitle ,PhotographerInfo ,PhotographerTitle } from './topicBox.styles';
import topicPic from '../../assets/img/back1.jpg';

const TopicBox = ({topic}) =>{
    return(
        <TopicBoxContainer>
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