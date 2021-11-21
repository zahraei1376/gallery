
import {Container,AllTopicSubTitle, AllTopicTitle, AllTopicTitleContainer, HeaderContainer , HeaderImage, TitleContainer} from './headerShowTopics.styles';
import  image from '../../assets/img/header11_3.png';
const HeaderPage =  () => {
    return(
        <Container>
            <HeaderContainer>
                <HeaderImage src={image} layout="fill" />
            </HeaderContainer>
            <AllTopicTitleContainer>
                <TitleContainer>
                    <AllTopicTitle>عنوان های ما</AllTopicTitle>
                    <AllTopicSubTitle>جهان را از دید ما و دریچه دوربین ما زیبا ببینید</AllTopicSubTitle>
                </TitleContainer>
            </AllTopicTitleContainer>
        </Container>
    )
};


export default HeaderPage;