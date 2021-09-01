import ShowAllTopicComponent from '../../component/allTopic/allTopic.component';
import Footer from '../../component/footer/footer.component';
import MyNavbar from '../../component/Menu/Navbar.component';

const ShowAllTopic = () =>
    (
        <>
        <MyNavbar scrolling = {true} />
        <ShowAllTopicComponent/>
        <Footer/>
        </>
    );

export default ShowAllTopic;