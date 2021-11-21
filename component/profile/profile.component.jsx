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
/////////////////////////////////////
const Profile = ({currentUser , selected , files , userInfo , error , data , reload , refreshData}) =>{
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
    const router = useRouter();
    ///////////////////////////////////////////////////////////// 
    // const { data, error } = useSWR(['/api/myUpload', currentUser] , fetcher)
    // useEffect(() =>{
    //     if(data){
    //         var selected = data.data.files.slice(- 5);
    //         var count = 5 - selected.length ;
    //         if(count !== 0){
    //             for (let index = 0; index < count; index++) {
    //                 selected.unshift(undefined);
    //             }
    //         }
    //         setUploadFilesSelect(selected);
    //         setUploadFiles(data.data.files);
    //         setUser(data.data.user);
    //     }
    // } ,[data , triggerDeleteFile]);
    /////////////////////////////////////////////////////////////
    // useEffect(() =>{
    //         fetch("/api/myUpload", {
    //             headers: {
    //                 'Authorization': currentUser
    //                 },
    //             method:"GET",
    //         })
    //         .then((response)=>{ 
    //             return response.json();   
    //         })
    //         .then((dataRes)=>{ 
    //             if(dataRes.seccess){
    //                 var selected = dataRes.data.files.slice(- 5);
    //                 var count = 5 - selected.length ;
    //                 if(count !== 0){
    //                     for (let index = 0; index < count; index++) {
    //                         selected.unshift(undefined);
    //                     }
    //                 }
    //                 setUploadFilesSelect(selected);
    //                 setUploadFiles(dataRes.data.files);
    //                 setUser(dataRes.data.user);
                    
    //             }else{
    //                 if(dataRes.reload){
    //                     setStatus('0')
    //                     setMessage(dataRes.message)
    //                     setShowMessage(true);
    //                     setTimeout(() => {
    //                         router.push('/login')
    //                     }, 1000);
    //                 }else{
    //                     setStatus('0')
    //                     setMessage(dataRes.message)
    //                     setShowMessage(true);
    //                 }
    //             }

    //         })
    //         .catch(err => {
    //             setStatus('0')
    //             setMessage(err.message)
    //             setShowMessage(true);
    //             // setLoading(false);
    //         });
    //     // }
    // },[triggerDeleteFile]);
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
                        <ProfileInfoText>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</ProfileInfoText>
                    </ProfileInfoGroup>
                    <ButtonsContainer>
                        <MyButton text="تغییر پروفایل" onClick = {handleOnClick} />
                        <MyButton text="آپلود عکس" onClick = {handleUploadBox} />
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
                        <SavedBoxesComponent type={1} uploadFiles={uploadFiles} 
                        refreshData={refreshData}
                        // setTriggerDeleteFile={setTriggerDeleteFile} triggerDeleteFile={triggerDeleteFile}
                        />
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

            {showProfile && <PopUpProfile currentUser = {currentUser} close={handleOnClick} 
            refreshData={refreshData}
            // setTriggerDeleteFile={setTriggerDeleteFile} triggerDeleteFile={triggerDeleteFile}
            />}
            {showUploadBox && <PopUpUpload refreshData={refreshData}
            // setTriggerDeleteFile={setTriggerDeleteFile} triggerDeleteFile={triggerDeleteFile}
             currentUser = {currentUser} close={handleUploadBox}/>}
            {showMessage && <MySnackbar message={message} status={status} showMessage={showMessage} setShowMessage={setShowMessage} />  }
        </ProfileContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    currentUser:currentUser,
 });


//  const withData = fn => ctx => {
//     // Fetch data
  
//     return fn({ ...ctx, data })
//   }


//   export async const getServerSideProps = withData(({ data }) => {

//     // ...
  
//     return {
//       props: {
//         data,
//       }
//     }
//   })



export default connect(mapStateToProps)(Profile);