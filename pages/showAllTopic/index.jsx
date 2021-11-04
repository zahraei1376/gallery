import { useEffect } from 'react';
import { useState } from 'react';
import ShowAllTopicComponent from '../../component/allTopic/allTopic.component';
import HeaderPage from '../../component/allTopic/headerShowTopics.component';
import Footer from '../../component/footer/footer.component';
import MyNavbar from '../../component/Menu/Navbar2.component';
import {Container} from './showAllTopic.styles';
const ShowAllTopic = () =>{
    ////////////////////////////////////////////
  const [scrolling,setScrolling] = useState(false);
  ////////////////////////////////////////////
  useEffect(()=>{
    window.addEventListener('scroll', scrollFunction);
    return () => window.removeEventListener('scroll', scrollFunction);
  },[]);
  ////////////////////////////////////////////
  const scrollFunction = () => {
    var y = window.scrollY;
    // if ( y >= 61) {
    if ( y >= 70) {
        if(!scrolling){
            setScrolling(true);
        }
    }else{
        // if(scrolling){
            setScrolling(false);
        // }
    }
  } 
  ////////////////////////////////////////////
    return(
        <Container>
            <MyNavbar scrolling = {scrolling} />
            <HeaderPage/>
            <ShowAllTopicComponent/>
            <Footer/>
        </Container>
    )};

export default ShowAllTopic;