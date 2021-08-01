import Head from 'next/head';
import Image from 'next/image';
import Header from '../component/HomePage/header/header.component';
// import '../styles/Home.styles.css';
// import styles from '../styles/Home.styles.css';

import MyNavbar from '../component/HomePage/Menu/Navbar.component';
// import CarouselComponnet from '../component/carouselHeader/carouselHeader.component';
// import AnswerQuestionComponent from '../component/answerQuestion/answerQuestion.component';
// import CustomersComments from '../component/CustomersComments/CustomersComments.component';
// import LastWeblog from '../component/lastWeblog/lastWeblog.component';
import ProductForHomePage from '../component/productHomePage/productHomePage.component';
// import WayBuy from '../component/wayBuy/wayBuy.component';
import {MainTitleContainer,MainTitle} from '../styles/Home.styles';

export default function Home() {
  return (
    <div 
    // className={styles.container}
    >
      <MyNavbar/>
      <Header/>
      {/* <MainTitleContainer>
          <MainTitle>زندگی حیوانات با زهرا</MainTitle>
      </MainTitleContainer> */}
      {/* <CarouselComponnet/> */}
      <ProductForHomePage/>
      {/* <WayBuy/>
      <AnswerQuestionComponent/>
      <CustomersComments/>
      <LastWeblog/> */}
    </div>
  )
}
