import MyNavbar from '../../component/Menu/Navbar2.component';
import { GalleryPageSecion } from '../../pagesStyles/mySaved.styled';
import SavedBoxesPageComponent from '../../component/mySaved/mySavedPage.component';
//////////////////////////////////////////////
const SavedPage = () =>{
    return(
        <GalleryPageSecion >
            <MyNavbar />
            <SavedBoxesPageComponent/>
        </GalleryPageSecion>
    )
};

export default SavedPage;