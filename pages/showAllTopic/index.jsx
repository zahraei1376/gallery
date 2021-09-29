import ShowAllTopicComponent from '../../component/allTopic/allTopic.component';
import HeaderPage from '../../component/allTopic/headerShowTopics.component';
import Footer from '../../component/footer/footer.component';
import MyNavbar from '../../component/Menu/Navbar2.component';
import {Container} from './showAllTopic.styles';
const ShowAllTopic = () =>
    (
        <Container>
            {/* <MyNavbar scrolling = {true} /> */}
            <HeaderPage/>
            <ShowAllTopicComponent/>
            <Footer/>
        </Container>
    );

export default ShowAllTopic;