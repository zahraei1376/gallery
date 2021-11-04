
import {Container,AllTopicSubTitle, AllTopicTitle, AllTopicTitleContainer, Button, ButtonContainer, HeaderContainer , HeaderImage, TitleContainer} from './headerShowTopics.styles';
import  image from '../../assets/img/header11.png';
import MyNavbar from '../Menu/Navbar2.component';
const HeaderPage =  () => {
    return(
        <Container>
            <HeaderContainer>
                <HeaderImage src={image} layout="fill" />
            </HeaderContainer>
            {/* <MyNavbar scrolling = {true} /> */}
            <AllTopicTitleContainer>
                {/* <ButtonContainer>
                    <Button
                    onClick={()=> router.push('/login')} 
                    >تماس با ما</Button>
                </ButtonContainer> */}
                <TitleContainer>
                    <AllTopicTitle>عنوان های ما</AllTopicTitle>
                    <AllTopicSubTitle>جهان را از دید ما و دریچه دوربین ما زیبا ببینید</AllTopicSubTitle>
                </TitleContainer>
            </AllTopicTitleContainer>
        </Container>
    )
};


export default HeaderPage;