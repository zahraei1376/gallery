import ShowAllTopicComponent from '../../component/allTopic/allTopic.component';
import HeaderPage from '../../component/allTopic/headerShowTopics.component';
import Footer from '../../component/footer/footer.component';
import MyNavbar from '../../component/Menu/Navbar2.component';
import {Container} from '../../pagesStyles/showAllTopic.styles';

const ShowAllTopic = () =>{
    return(
        <Container>
            <MyNavbar />
            <HeaderPage/>
            <ShowAllTopicComponent/>
            <Footer/>
        </Container>
    )};

export default ShowAllTopic;