import {useState} from 'react';
import MyNavbar from '../../component/Menu/Navbar2.component';
import {ProfileInfoName,ProfileContainer ,ProfileHeader,TabsContainer,Tabs, ProfileImage, ProfileImageContainer,ProfileInfoContainer, ProfileInfo, ProfileInfoGroup, ProfileInfoText, YearIcon, LocationIcon } from './profile.styles';
import user from '../../assets/img/user.png';
import ShowUploadBoxes from './showAllUpload.component';
import ShowSaveBoxes from './showAllSave.component';
import MyButton from '../../component/ButtonComponent/Button.component';
const Profile = () =>{
    const [showBox , setShowBox] = useState("1");
    return(
        <ProfileContainer>
            <MyNavbar scrolling = {true} />
            <ProfileHeader>

            </ProfileHeader>
            <ProfileInfoContainer>
                <ProfileInfo>
                    <ProfileInfoGroup>
                        <ProfileInfoName>زهرا علیپور نوایی</ProfileInfoName>
                    </ProfileInfoGroup>
                    <ProfileInfoGroup>
                        <ProfileInfoText>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</ProfileInfoText>
                    </ProfileInfoGroup>
                    <MyButton text="تغییر پروفایل" />
                    
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
                        <div>H\g,n</div>
                    )
                }
                else if (showBox === "2") {
                    return (
                        <div>H\g,n222222</div>
                    )
                }else{
                    return ""
                }
            })()}
            </TabsContainer>

            
        </ProfileContainer>
    )
};
export default Profile;