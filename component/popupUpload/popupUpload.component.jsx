import { useState } from 'react';
import {PopUpContainer ,TextArea, PopUpBody,ContentFile ,Form, MyCloseIcon,Group,Lable,Input,SettingIcon,
  ContentContainer,BtnClose,LogoContainer,Title, PopUpHeader,FileContainer, MyImage, ImageWrapper,} from './popupUpload.styles';
import MySnackbar from '../messageBox/messageBox.component';
import MyButton from '../ButtonComponent/Button.component';
import MyDropDown from '../dropDown/dropDown.component';
import CameraIcon from '@mui/icons-material/Camera';
import { setApiRequest } from '../../utils/getDataOFServer';
const PopUpUpload = ({currentUser ,close ,refreshData,setTriggerDeleteFile,triggerDeleteFile,}) => {
    const [showMessage,setShowMessage] = useState(false);
    const [message,setMessage] =useState('');
    const [status,setStatus] = useState('0');
    const [srcImage , setSrcImage] = useState('');
    const [info , setInfo] = useState({
        properties:'',
        title:'',
        sunTitle:'',
        myFile:null,
    });
    /////////////////////////////////////////////////////////////
    const handleOnClick = async(e) =>{
       e.preventDefault();
       if(info.title && info.myFile){
            const formData = new FormData();
            formData.append('properties', info.properties);
            formData.append('title',info.title);
            formData.append('sunTitle',info.sunTitle);
            formData.append('myFile',info.myFile);
            const { error, isLoaded, data ,reload } = await setApiRequest("/api/profile/upload" ,formData, true , currentUser )
            if(reload){
              setStatus('0')
              setMessage(error)
              setShowMessage(true);
              setTimeout(() => {
                  router.push('/login')
              }, 1000);
            }else if(error){
              setStatus('0')
              setMessage(error)
              setShowMessage(true);
            }else{
              setStatus('1')
              setMessage('اطلاعات شما با موفقیت ثبت شد');
              setShowMessage(true);
              refreshData();
            //   setTriggerDeleteFile(!triggerDeleteFile);
            }
            ///////////////////////////////////////////////////////
            // await fetch("/api/profile/upload", {
            //     headers: {
            //         'Authorization': currentUser
            //     },
            //     method:"POST",
            //     body:formData
            // })
            // .then((response)=>{ 
            //     return response.json();   
            // })
            // .then((dataRes)=>{
            //     if(dataRes.seccess){
            //         setStatus('1')
            //         setMessage('فایل مورد نظر ثبت شد');
            //         setShowMessage(true);
            //         setTriggerDeleteFile(!triggerDeleteFile);
            //     }else{
            //         if(dataRes.reload){
            //             setStatus('0')
            //             setMessage(dataRes.message)
            //             setShowMessage(true);
            //             setTimeout(() => {
            //                 router.push('/login')
            //             }, 1000);
            //         }else{
            //             setStatus('0')
            //             setMessage(dataRes.message)
            //             setShowMessage(true);
            //         }
            //     }

            // })
            // .catch(err => {
            //     setStatus('0')
            //     setMessage(err.message)
            //     setShowMessage(true);
            // });
       }else{
            setStatus('0')
            setMessage('انتخاب فایل و پر کردن عنوان الزامی است!!!');
            setShowMessage(true);
       }
        
    }


    const handlefile = (event) => {
        var oFReader = new FileReader();
        oFReader.readAsDataURL(event.target.files[0]);

        oFReader.onload = function (oFREvent) {
            setSrcImage(oFREvent.target.result);
        };
        setInfo({...info , myFile:event.target.files[0]});
    };

    const handleValue = (val) =>{
        setInfo({...info , properties: val});
    }

    return (
        <PopUpContainer>
          <PopUpBody> 
          <ContentFile>
                {srcImage && <ImageWrapper>
                    <MyImage layout="fill" src = {srcImage} />
                </ImageWrapper>}
            </ContentFile> 
            <ContentContainer>
                <PopUpHeader>
                    <FileContainer>
                        <label htmlFor="upload" id="lable" style={{cursor:"pointer"}}>
                            <LogoContainer>
                                <CameraIcon style={{fontSize:'9rem' , color:'#191e3e'}} />
                                <SettingIcon/>
                            </LogoContainer>
                        </label>
                        <input
                            style={{display:"none"}}
                            type="file"
                            id="upload"
                            // accept="image/*"
                            accept="image/png,image/jpeg"
                            onChange={e => handlefile(e)}
                        />
                    </FileContainer>
                    <Title>برای انتخاب عکس موردنظر بر روی لوگوی بالا کلیک کنید</Title>
                </PopUpHeader>
                <Form>
                    
                    <Group>
                        <Lable shirink={info.title ? "true" : null} htmlFor="title" >عنوان</Lable>
                        <Input id="title" type="text" onChange={e => setInfo({...info , title: e.target.value})} />
                    </Group>
                    <Group>
                        <Lable shirink={info.properties ? "true" : null}>انتخاب نوع</Lable>
                        <MyDropDown borderBottom="true" handleValue={handleValue} />
                    </Group>
                    <Group>
                        <Lable shirink={info.sunTitle ? "true" : null} htmlFor="explain" >توضیحات</Lable>
                        <TextArea shirink={info.sunTitle ? "true" : null} rows="1" id="explain" onChange={e => setInfo({...info , sunTitle: e.target.value})} />
                    </Group>
                    <MyButton mg="3" text="ارسال" onClick = {(e)=>handleOnClick(e)} />
                </Form>
            </ContentContainer> 
                    
          </PopUpBody>
          <BtnClose onClick = {close}><MyCloseIcon/></BtnClose>
          {
                showMessage && <MySnackbar message={message} status={status} showMessage={showMessage} setShowMessage={setShowMessage} /> 
          }
        </PopUpContainer>
      );
};

export default PopUpUpload;