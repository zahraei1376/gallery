import { useState , useEffect , useRef } from 'react';
import {PopUpContainer , PopUpBody ,Form, MyCloseIcon,Group,Lable,Input,SettingIcon,
  ContentContainer,BtnClose,LogoContainer,Logo,Title, PopUpHeader,FileContainer, ContentFile, ImageWrapper, MyImage,} from './popupChangeProfile.styles';
import {addItem} from '../../redux/cart/cart.action';
import { connect } from 'react-redux';
import MySnackbar from '../messageBox/messageBox.component';
import { createStructuredSelector } from 'reselect';
import { selectedCart } from '../../redux/cart/cart.selectors';
import MyButton from '../ButtonComponent/Button.component';
import logo from '../../assets/img/user.png';
import { useRouter } from 'next/router';
import ImageCropper from './cropImage';
import { v4 as uuidv4 } from 'uuid';
/////////////////////////////////////////
const PopUpProfile = ({currentUser , close , setTriggerDeleteFile ,triggerDeleteFile  }) => {
    const [showMessage,setShowMessage] = useState(false);
    const [message,setMessage] =useState('');
    const [status,setStatus] = useState('0');
    const [srcImage , setSrcImage] = useState('');
    const [imageToCrop, setImageToCrop] = useState(undefined);
    const [croppedImage, setCroppedImage] = useState(undefined);
    const previewCanvasRef = useRef(null);

    const [state, setState] = useState({
        photographer : '',
        photographerPicture:'',
        email:'',
        username:'',
        password: '',
        location:'',
    })
    /////////////////////////////////////////////////////////////
    const router = useRouter();
    /////////////////////////////////////////////////////////////
    useEffect(() =>{
        fetch("/api/profile", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': currentUser
            },
            method:"GET",
        })
        .then((response)=>{ 
            return response.json();   
        })
        .then((dataRes)=>{ 
            if(dataRes.seccess){
                setState(dataRes.data);
                setSrcImage(dataRes.data.photographerPicture);
                // setSrcImage(dataRes.data.photographerPicture ? dataRes.data.photographerPicture : logo);
            }else{
                if(dataRes.reload){
                    setStatus('0')
                    setMessage(dataRes.message)
                    setShowMessage(true);
                    setTimeout(() => {
                        router.push('/login')
                    }, 3000);
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
    },[]);
    /////////////////////////////////////////////////////////////
    function generateDownload() {
        var fileIdL = state.photographerPicture.name.split('.');
        const format = fileIdL[fileIdL.length - 1].toLowerCase();
        ///////////////
        var mimetype = '';
        ///////////////////////////////
        switch (format) {
          case 'jpeg':
            // JPEG Image
            mimetype = 'image/jpeg';
            break;
          case 'jpg':
            // JPEG Image
            mimetype = 'image/jpg';
            break;
          case 'png':
            // Portable Network Graphics (PNG)
            mimetype = 'image/png';
            break;
          default:
            break;
        }
        //////////////////////
        var file;
        return new Promise((resolve, reject) => {
            previewCanvasRef.current.toBlob(
                (blob) => {
                    if (!blob) {
                        reject(new Error('Canvas is empty'));
                        return;
                    }

                    blob.name = "cropped_image";
                    file = new File([blob], uuidv4() + `.${format}`, {
                        type: mimetype,
                    });

                    resolve(file);
                }, 'image/jpeg'
            );
        });
    }
    /////////////////////////////////////////////////////////////
    const handleOnClick = async(e) =>{
       e.preventDefault();
       ///////////////////////////////
       const formData = new FormData();
       formData.append('photographer', state.photographer);
        formData.append('email',state.email);
        formData.append('location',state.location);
       if(imageToCrop){
           var file = await generateDownload();
            formData.append('myFile',file);
       }else{
            formData.append('myFile',state.photographerPicture);
       }

      ///////////////////////////////
        await fetch("/api/profile/edit", {
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
                setMessage('اطلاعات شما با موفقیت ثبت شد');
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
    }
    /////////////////////////////////////////////////////////////
    const handlefile = (event) => {
        // var oFReader = new FileReader();
        // oFReader.readAsDataURL(event.target.files[0]);

        // oFReader.onload = function (oFREvent) {
        //     setSrcImage(oFREvent.target.result);
        // };

        if (event.target.files && event.target.files.length > 0) {
            const reader = new FileReader();

            reader.addEventListener('load', () =>
                setImageToCrop(reader.result)
            );

            reader.readAsDataURL(event.target.files[0]);
        }

        // setImageToCrop(event.target.files[0]);
        setState({...state , photographerPicture:event.target.files[0]});
        // setState({...state , photographerPicture:e.target.result});
        //////////////////////////////////
    };
    /////////////////////////////////////////////////////////////
    return (
        <PopUpContainer>
          <PopUpBody>
            
            <ContentContainer>
                <PopUpHeader>
                    <FileContainer>
                        <label htmlFor="upload" id="lable" style={{position:"relative" ,width:"16rem"}}>
                            <LogoContainer>
                                {croppedImage || srcImage ? <Logo id="uploadImage" 
                                layout="fill" 
                                // src={srcImage}
                                src={croppedImage ? croppedImage : srcImage}
                                // src={state.photographerPicture ? state.photographerPicture: logo}
                                /> :''}
                                <SettingIcon/>
                            </LogoContainer>
                            
                        </label>
                        <input
                            style={{display:"none"}}
                            type="file"
                            id="upload"
                            // name="file"
                            accept="image/*"
                            // accept="image/png,image/jpeg"
                            onChange={e => handlefile(e)}
                            // onClick={checkSendfile}
                        />
                    </FileContainer>
                        
                    <Title>نمایش اطلاعات شما</Title>
                </PopUpHeader>
                <Form>
                    
                    <Group>
                        <Lable shirink={state.photographer ? "true" : null} htmlFor="name" >نام</Lable>
                        <Input placeholder=" " id="name" type="text" value={state.photographer} onChange = {e => setState({...state , photographer:e.target.value })} />
                    </Group>
                    {/* <Group>
                        <Lable htmlFor="pass" >پسورد</Lable>
                        <Input id="pass" type="password" value={state.password} onChange = {e => setState({...state , password:e.target.value })}/>
                    </Group> */}
                    <Group>
                        <Lable shirink={state.email ? "true" : null} htmlFor="email" >ایمیل</Lable>
                        <Input placeholder=" " id="email" type="text" value={state.email} onChange = {e => setState({...state , email:e.target.value })}/>
                    </Group>
                    {/* <Group>
                        <Lable htmlFor="phone" >تماس</Lable>
                        <Input id="phone" type="text" />
                    </Group> */}
                    <Group>
                        <Lable shirink={state.location ? "true" : null} htmlFor="location" >موقعیت مکانی</Lable>
                        <Input placeholder=" " id="location" type="text" value={state.location} onChange = {e => setState({...state , location:e.target.value })} />
                    </Group>
                    <div>
                        <MyButton mg="3" text="ارسال" onClick = {e => handleOnClick(e)} />
                    </div>
                </Form>
            </ContentContainer>
            <ContentFile>
                {/* {srcImage && <ImageWrapper>
                    <MyImage layout="fill" src = {srcImage} />
                </ImageWrapper>} */}
                <div>
                    {/* <ImageCropper
                        setCropImage ={setCropImage}
                        src={srcImage}
                    /> */}
                    <ImageCropper
                        previewCanvasRef={previewCanvasRef}
                        imageToCrop={imageToCrop ? imageToCrop : srcImage}
                        onImageCropped={(croppedImage) => setCroppedImage(croppedImage)}
                    />
                </div>
            </ContentFile>          
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

// export default connect(mapStateToProps , mapDispatchToProps)(PopUpProfile);

export default PopUpProfile;