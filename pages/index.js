import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../component/HomePage/header/header.component';
// import '../styles/Home.styles.css';
// import styles from '../styles/Home.styles.css';

import MyNavbar from '../component/HomePage/Menu/Navbar.component';
// import CarouselComponnet from '../component/carouselHeader/carouselHeader.component';
import OurServices from '../component/OurServices/OurServices.component';
import ShowCustomersComments from '../component/ShowCustomersComments/ShowCustomersComments.component';
// import LastWeblog from '../component/lastWeblog/lastWeblog.component';
import ProductForHomePage from '../component/productHomePage/productHomePage.component';
import WayBuy from '../component/wayBuy/wayBuy.component';
import {MainTitleContainer,MainTitle} from '../styles/Home.styles';
import ContactUs from '../component/contactUs/contactUs.component';
import Footer from '../layout/footer/footer.component';

export default function Home() {
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
    if ( y >= 61) {
        if(!scrolling){
            setScrolling(true);
        }
    }else{
        // if(scrolling){
          // console.log('scrolling', scrolling);
            setScrolling(false);
        // }
    }
  } 
  ////////////////////////////////////////////
  return (
    <div onScroll = {()=> scrollFunction()} id="navbar"
    // className={styles.container}
    >
      <MyNavbar scrolling = {scrolling} />
      <Header/>
      {/* <MainTitleContainer>
          <MainTitle>زندگی حیوانات با زهرا</MainTitle>
      </MainTitleContainer> */}
      {/* <CarouselComponnet/> */}
      <ProductForHomePage/>
      <WayBuy/>
      {/* <AnswerQuestionComponent/> */}
      <ShowCustomersComments/>
      <OurServices/>
      <ContactUs/>
      {/* <LastWeblog/> */}
      <Footer/>
    </div>
  )
}
