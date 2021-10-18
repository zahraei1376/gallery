import { useEffect, useState } from 'react';
import MyNavbar from '../component/Menu/Navbar.component';
import Gallery from '../component/galleryComponent/gallery.component';
import Header from '../component/header/header.component';
import {mainPic} from '../generalMethod/topics';
import {GalleryTitle} from './homePage.styled';
import Head from 'next/head'
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
    // if ( y >= 61) {
    if ( y >= 170) {
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
  return (
    <div onScroll = {()=> scrollFunction()} id="navbar">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <MyNavbar scrolling = {scrolling} />
      <Header/>
      <GalleryTitle>عکس های رایگان ما</GalleryTitle>
      <Gallery images ={mainPic} />
    </div>
  )
}
