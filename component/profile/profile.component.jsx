import {useState} from 'react';
import MyNavbar from '../../component/Menu/Navbar2.component';
import {ProfileInfoName,ButtonsContainer,ProfileContainer ,ProfileHeader,TabsContainer,Tabs, ProfileImage, ProfileImageContainer,ProfileInfoContainer, ProfileInfo, ProfileInfoGroup, ProfileInfoText, YearIcon, LocationIcon } from './profile.styles';
import user from '../../assets/img/user.png';
import ShowUploadBoxes from './showAllUpload.component';
import ShowSaveBoxes from './showAllSave.component';
import MyButton from '../../component/ButtonComponent/Button.component';
import SavedBoxesComponent from '../mySaved/mySaved.component';
import PopUpProfile from '../popupChangeProfile/popupChangeProfile.component';
import PopUpUpload from '../popupUpload/popupUpload.component';

const Profile = () =>{
    const [showBox , setShowBox] = useState("1");
    const [showProfile , setShowProfile] = useState(false);
    const [showUploadBox , setShowUploadBox] = useState(false);

    const handleOnClick = () =>{
        setShowProfile(!showProfile);
    }

    const handleUploadBox = () =>{
        setShowUploadBox(!showUploadBox);
    }

    return(
        <ProfileContainer>
            <MyNavbar scrolling = {true} />
            <ProfileHeader>

            </ProfileHeader>
            <ProfileInfoContainer>
                <ProfileInfo>
                    <ProfileInfoGroup>
                        <ProfileInfoName>زهرا علیپور نوایی</ProfileInfoName>
                        <ProfileImageContainer>
                            <ProfileImage src ={user} layout="fill" />
                        </ProfileImageContainer>
                        
                    </ProfileInfoGroup>
                    <ProfileInfoGroup>
                        <ProfileInfoText>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</ProfileInfoText>
                    </ProfileInfoGroup>
                    <ButtonsContainer>
                        <MyButton text="تغییر پروفایل" onClick = {handleOnClick} />
                        <MyButton text="آپلود عکس" onClick = {handleUploadBox} />
                    </ButtonsContainer>
                    
                </ProfileInfo>
                {/* <ProfileImageContainer>
                    <ProfileImage src ={user} layout="fill" />
                </ProfileImageContainer> */}
            </ProfileInfoContainer>
            <TabsContainer>
                <Tabs>
                    <ShowUploadBoxes setShowBox={setShowBox} showBox={showBox} />
                    <ShowSaveBoxes setShowBox={setShowBox} showBox={showBox}/>
                    <ShowSaveBoxes setShowBox={setShowBox} showBox={showBox}/>
                </Tabs>
                {(() => {
                if (showBox === "1") {
                    return (
                        <SavedBoxesComponent type={1}/>
                    )
                }
                else if (showBox === "2") {
                    return (
                        // <div>H\g,n222222</div>
                        <SavedBoxesComponent type={2}/>
                    )
                }else{
                    return ""
                }
            })()}
            </TabsContainer>

            {showProfile && <PopUpProfile close={handleOnClick}/>}
            {showUploadBox && <PopUpUpload close={handleUploadBox}/>}
        </ProfileContainer>
    )
};
export default Profile;