import { useState , useEffect } from 'react';
import {PopUpContainer ,TextArea, PopUpBody,ContentFile ,Form, MyCloseIcon,Group,Lable,Input,SettingIcon,
  ContentContainer,BtnClose,LogoContainer,Logo,Title, PopUpHeader,FileContainer, MyImage, ImageWrapper,} from './popupUpload.styles';
import {addItem} from '../../redux/cart/cart.action';
import { connect } from 'react-redux';
import MySnackbar from '../messageBox/messageBox.component';
import { createStructuredSelector } from 'reselect';
import { selectedCart } from '../../redux/cart/cart.selectors';
import MyButton from '../ButtonComponent/Button.component';
// import logo from '../../assets/img/galleryLg.png';
import logo from '../../assets/img/galleryLg2.png';
import MyDropDown from '../dropDown/dropDown.component';
const PopUpUpload = ({currentUser ,close ,setTriggerDeleteFile,triggerDeleteFile,}) => {
    const [showMessage,setShowMessage] = useState(false);
    const [message,setMessage] =useState('');
    const [status,setStatus] = useState('0');
    const [load , setLoad] = useState(false);
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
       if(info.title && myFile){
            const formData = new FormData();
            formData.append('properties', info.properties);
            formData.append('title',info.title);
            formData.append('sunTitle',info.sunTitle);
            formData.append('myFile',info.myFile);
            await fetch("/api/profile/upload", {
                headers: {
                    'Authorization': currentUser
                },
                method:"POST",
                body:formData
            })
            .then((response)=>{ 
                return response.json();   
            })
            .then((dataRes)=>{
                if(dataRes.seccess){
                    setStatus('1')
                    setMessage('فایل مورد نظر ثبت شد');
                    setShowMessage(true);
                    setTriggerDeleteFile(!triggerDeleteFile);
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
            });
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
                                <Logo 
                                width="100%" height="100%"
                                 layout="responsive" src={logo}/>
                                <SettingIcon/>
                            </LogoContainer>
                        </label>
                        <input
                            style={{display:"none"}}
                            type="file"
                            id="upload"
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

// const mapStateToProps = (state, props) => {
//   return createStructuredSelector({
//       selectedCart: selectedCart(state, props.data.id), 
//   });
// };

// const mapDispatchToProps = (dispatch) => ({
//   addItemToSave : (id) => dispatch(addItem(id)),
// });

// export default connect(mapStateToProps , mapDispatchToProps)(PopUpUpload);

export default PopUpUpload;