import MyNavbar from '../component/Menu/Navbar.component';
import Gallery from '../component/galleryComponent/gallery.component';
import Header from '../component/header/header.component';
import {mainPic} from '../generalMethod/topics';
import {GalleryTitle} from '../pagesStyles/homePage.styled';

export default function Home() { 
  return (
    <div id="navbar">
      <MyNavbar />
      <Header/>
      <GalleryTitle>عکس های رایگان ما</GalleryTitle>
      <Gallery images ={mainPic} />
    </div>
  )
}