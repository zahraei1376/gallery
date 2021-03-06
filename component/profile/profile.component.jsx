import {useState , useEffect} from 'react';
import MyNavbar from '../../component/Menu/Navbar2.component';
import {ProfileInfoName,ButtonsContainer,ProfileContainer ,ProfileHeader,TabsContainer,Tabs, ProfileImage, ProfileImageContainer,ProfileInfoContainer, ProfileInfo, ProfileInfoGroup, ProfileInfoText, YearIcon, LocationIcon } from './profile.styles';
import userPic from '../../assets/img/user.png';
import ShowUploadBoxes from './showAllUpload.component';
import ShowSaveBoxes from './showAllSave.component';
import MyButton from '../../component/ButtonComponent/Button.component';
import SavedBoxesComponent from '../mySaved/mySaved.component';
import PopUpProfile from '../popupChangeProfile/popupChangeProfile.component';
import PopUpUpload from '../popupUpload/popupUpload.component';
import {currentUser} from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import MySnackbar from '../messageBox/messageBox.component';
/////////////////////////////////////
const Profile = ({currentUser , selected , files , userInfo , error , reload , refreshData}) =>{
    const [showBox , setShowBox] = useState("1");
    const [showProfile , setShowProfile] = useState(false);
    const [showUploadBox , setShowUploadBox] = useState(false);
    const [uploadFiles , setUploadFiles] = useState(files);
    const [uploadFilesSelect , setUploadFilesSelect] = useState(selected);
    const [triggerDeleteFile , setTriggerDeleteFile] = useState(false);
    const [user , setUser ] = useState(userInfo);
    /////////////////////////////////////////////////////////
    const [showMessage,setShowMessage] = useState(false);
    const [message,setMessage] =useState('');
    const [status,setStatus] = useState('0');
    ///////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////
    useEffect(() =>{
        setUploadFiles(files);
        setUploadFilesSelect(selected);
        setUser(userInfo);
    } , [userInfo , files , selected ]) 
    ////////////////////////////////////////////////////////

    const handleOnClick = () =>{
        setShowProfile(!showProfile);
    }

    const handleUploadBox = () =>{
        setShowUploadBox(!showUploadBox);
    }

    return(
        <ProfileContainer>
            <MyNavbar />
            <ProfileHeader>

            </ProfileHeader>
            <ProfileInfoContainer>
                <ProfileInfo>
                    <ProfileInfoGroup>
                        <ProfileInfoName>{user && user.photographer ? user.photographer : ''}</ProfileInfoName>
                        <ProfileImageContainer>
                            <ProfileImage src ={user && user.photographerPicture ? user.photographerPicture : userPic} layout="fill" />
                        </ProfileImageContainer>
                        
                    </ProfileInfoGroup>
                    <ProfileInfoGroup>
                        <ProfileInfoText>???????? ???????????? ?????? ???????????? ???? ?????????? ?????????? ?????????????? ???? ???????? ?????? ?? ???? ?????????????? ???? ???????????? ???????????? ?????? ?????????????? ?? ???????? ???????? ?????????????? ?? ???????? ???? ???????? ?? ?????????????????? ???? ???????? ?????? ?? ???????? ?????????? ???????? ???????????????? ???????? ????????</ProfileInfoText>
                    </ProfileInfoGroup>
                    <ButtonsContainer>
                        <MyButton text="?????????? ??????????????" onClick = {handleOnClick} />
                        <MyButton text="?????????? ??????" onClick = {handleUploadBox} />
                    </ButtonsContainer>
                    
                </ProfileInfo>
            </ProfileInfoContainer>
            <TabsContainer>
                <Tabs>
                    <ShowUploadBoxes setShowBox={setShowBox} showBox={showBox} imageArray = {uploadFilesSelect} 
                    count = {uploadFiles.length}
                     />
                    <ShowSaveBoxes setShowBox={setShowBox} showBox={showBox}/>
                    <ShowSaveBoxes setShowBox={setShowBox} showBox={showBox}/>
                </Tabs>
                {(() => {
                if (showBox === "1") {
                    return (
                        <SavedBoxesComponent type={1} uploadFiles={uploadFiles} refreshData={refreshData} />
                    )
                }
                else if (showBox === "2") {
                    return (
                        <SavedBoxesComponent type={2} />
                    )
                }else{
                    return ""
                }
            })()}
            </TabsContainer>

            {showProfile && <PopUpProfile currentUser = {currentUser} close={handleOnClick} refreshData={refreshData} />}
            {showUploadBox && <PopUpUpload refreshData={refreshData}
             currentUser = {currentUser} close={handleUploadBox}/>}
            {showMessage && <MySnackbar message={message} status={status} showMessage={showMessage} setShowMessage={setShowMessage} />  }
        </ProfileContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    currentUser:currentUser,
 });

export default connect(mapStateToProps)(Profile);