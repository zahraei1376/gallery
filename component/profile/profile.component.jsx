import MyNavbar from '../../component/Menu/Navbar.component';
import {ProfileContainer ,ProfileHeader, ProfileImage, ProfileImageContainer,ProfileInfoContainer, ProfileInfo, ProfileInfoGroup, ProfileInfoText, YearIcon, LocationIcon } from './profile.styles';
import user from '../../assets/img/user.png';
const Profile = () =>{
    return(
        <ProfileContainer>
            <MyNavbar scrolling = {true} />
            <ProfileHeader>

            </ProfileHeader>
            <ProfileInfoContainer>
                <ProfileImageContainer>
                    <ProfileImage src ={user} layout="fill" />
                </ProfileImageContainer>
                <ProfileInfo>
                    <ProfileInfoGroup>
                        <YearIcon />
                        <ProfileInfoText>17 مرداد 1376</ProfileInfoText>
                    </ProfileInfoGroup>
                    <ProfileInfoGroup>
                        <ProfileInfoText>زهرا علیپور نوایی</ProfileInfoText>
                        {/* <LocationIcon /> */}
                    </ProfileInfoGroup>
                </ProfileInfo>
               
            </ProfileInfoContainer>
        </ProfileContainer>
    )
};
export default Profile;