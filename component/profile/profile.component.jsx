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
import { useRouter } from 'next/router';
// import user from '../../assets/img/myPic.jpg';
const Profile = ({currentUser}) =>{
    const [showBox , setShowBox] = useState("1");
    const [showProfile , setShowProfile] = useState(false);
    const [showUploadBox , setShowUploadBox] = useState(false);
    const [uploadFiles , setUploadFiles] = useState([]);
    const [uploadFilesSelect , setUploadFilesSelect] = useState([]);
    const [triggerDeleteFile , setTriggerDeleteFile] = useState(false);
    const [user , setUser ] = useState('');
    /////////////////////////////////////////////////////////
    const [showMessage,setShowMessage] = useState(false);
    const [message,setMessage] =useState('');
    const [status,setStatus] = useState('0');
    ///////////////////////////////////////////////////////////
    const [scrolling,setScrolling] = useState(false);
    ///////////////////////////////////////////////////////////
    const router = useRouter();
    ////////////////////////////////////////////////////////////
    useEffect(()=>{
        window.addEventListener('scroll', scrollFunction);
        return () => window.removeEventListener('scroll', scrollFunction);
    },[]);
    ////////////////////////////////////////////
    const scrollFunction = () => {
        var y = window.scrollY;
        // if ( y >= 61) {
        console.log('yyyyyyyyyy' , y);
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
    useEffect(() =>{
        // console.log('type' , type);
        // setTextBtn(0);
        // if(type === 1){
            // console.log('22222222222' , currentUser);

            fetch("/api/myUpload", {
                headers: {
                    // 'Content-Type': 'application/json',
                    'Authorization': currentUser
                    // 'Authorization': `Bearer ${currentUser} `
                    },
                method:"GET",
                // body: JSON.stringify(data)
            })
            .then((response)=>{ 
                return response.json();   
            })
            .then((dataRes)=>{ 
                if(dataRes.seccess){
                    console.log('dataRes.data',dataRes.data);
                    var selected = dataRes.data.files.slice(- 5);
                    var count = 5 - selected.length ;
                    if(count !== 0){
                        for (let index = 0; index < count; index++) {
                            selected.unshift(undefined);
                        }
                        // selected.push(undefined, undefined,)
                    }
                    setUploadFilesSelect(selected);
                    setUploadFiles(dataRes.data.files);
                    setUser(dataRes.data.user);
                    
                }else{
                    if(dataRes.reload){
                        setStatus('0')
                        setMessage(dataRes.message)
                        setShowMessage(true);
                        setTimeout(() => {
                            router.push('/login')
                        }, 1000);
                    }else{
                        setStatus('0')
                        setMessage(dataRes.message)
                        setShowMessage(true);
                    }
                }

            })
            .catch(err => {
                setStatus('0')
                setMessage(err.message)
                setShowMessage(true);
                // setLoading(false);
            });
        // }
    },[triggerDeleteFile]);
    ////////////////////////////////////////////////////////

    const handleOnClick = () =>{
        setShowProfile(!showProfile);
    }

    const handleUploadBox = () =>{
        setShowUploadBox(!showUploadBox);
    }

    return(
        <ProfileContainer>
            <MyNavbar scrolling = {scrolling} />
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
                    <ShowUploadBoxes setShowBox={setShowBox} showBox={showBox} imageArray = {uploadFilesSelect} count = {uploadFiles.length} />
                    <ShowSaveBoxes setShowBox={setShowBox} showBox={showBox}/>
                    <ShowSaveBoxes setShowBox={setShowBox} showBox={showBox}/>
                </Tabs>
                {(() => {
                if (showBox === "1") {
                    return (
                        <SavedBoxesComponent type={1} uploadFiles={uploadFiles} setTriggerDeleteFile={setTriggerDeleteFile} triggerDeleteFile={triggerDeleteFile}/>
                    )
                }
                else if (showBox === "2") {
                    return (
                        // <div>H\g,n222222</div>
                        <SavedBoxesComponent type={2} />
                    )
                }else{
                    return ""
                }
            })()}
            </TabsContainer>

            {showProfile && <PopUpProfile currentUser = {currentUser} close={handleOnClick}/>}
            {showUploadBox && <PopUpUpload setTriggerDeleteFile={setTriggerDeleteFile} triggerDeleteFile={triggerDeleteFile} currentUser = {currentUser} close={handleUploadBox}/>}
            {showMessage && <MySnackbar message={message} status={status} showMessage={showMessage} setShowMessage={setShowMessage} />  }
        </ProfileContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    currentUser:currentUser,
 });


//  const mapDispatchToProps = dispatch =>({
//     RemoveItems: (IDS) => dispatch(RemoveItems(IDS)),
//     RemoveItem: () => dispatch(RemoveItem()),
// });

// export default Profile;
export default connect(mapStateToProps)(Profile);