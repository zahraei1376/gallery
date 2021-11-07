import { Tooltip } from '@material-ui/core';
import { useState , useEffect } from 'react';
import { limitRecipeTitle } from '../../generalMethod/limitRecipeTitle';
import {Span,DescriptionContainer , DescriptionBody ,DescriptionContent,Group,
  DescriptionImageContainer ,DescriptionImg ,DescriptionCaption,BtnClose,
  ImageTitle,ImageSubTitle , WriterImageContainer,WriterImage,WriterName,
  Header,TextContainer, HeaderButton,DownloadButtonsContainer,DownloadButtonIcon,ButtonsContainer,DownloadButton,ArrowBottom, HeaderDownloadIcon,CloseButton ,HeaderButtons,HeaderSaveIcon,HeaderEditIcon, MyCloseIcon,
  ContentContainer,ContentBackContainer , ArrowButton , NextArrowIcon , PrevArrowIcon, TitleInput, DescriptionInput, Label, ImageType} from './showImage.styles';
import DownloadCard from './downloadBoxContainer.component';
import wait from '../../public/img/wait.jpg';
import user from '../../public/img/user.png';
import {addItem} from '../../redux/cart/cart.action';
import { connect } from 'react-redux';
import MySnackbar from '../messageBox/messageBox.component';
import { createStructuredSelector } from 'reselect';
import { selectedCart } from '../../redux/cart/cart.selectors';
import { currentUser } from '../../redux/user/user.selector';
import {downloadFile} from '../../generalMethod/limitRecipeTitle';
import Link from "next/link";
import MyButton from '../ButtonComponent/Button.component';
import { useRouter } from 'next/router';
import MyDropDown from '../dropDown/dropDown.component';
const ShowImage = ({addItemToSave,selectedCart,currentUser,uploadedImage,...props}) => {
    /////////////////////////////////////////////////////
    const [state,setState] = useState({
        showMore:false,
        backward:false,
        showDownloadBox:false,
        showAllSunTitle:false,
        // showBoxShopInfo:false,
    });
    const [size , setSize] = useState(0);
    const [showMessage,setShowMessage] = useState(false);
    const [message,setMessage] =useState('');
    const [status,setStatus] = useState('0');
    const [load , setLoad] = useState(false);
    const [own, setOwn] = useState(false);
    const [editMode , setEditMode] = useState(false);
    const [info , setInfo] = useState({
      properties:props.data.properties,
      title:props.data.title,
      sunTitle:props.data.sunTitle,
      src:props.data.src,
    })
    /////////////////////////////////////////////////////////////
     var content = document.getElementById("menu__content");
     var contentBack = document.getElementById("menu__contentBack");
    /////////////////////////////////////////////////////////////
    const router = useRouter();
    ////////////////////////////////////////////////////////////
    useEffect(()=>{
        if(content && contentBack){
          content.style.transform= 'rotateY(130deg)';
          contentBack.style.zIndex ='2';
        }
    },[state.showMore]);
 
    useEffect(()=>{
      if(state.backward){
          content.style.transformOrigin= 'left';
          content.style.transform= 'rotateY(-0deg)';
          content.style.zIndex ='2';
          contentBack.style.zIndex ='-1';
      }
    },[state.backward]);
    ////////////////////////////////////////////////////////////////
    useEffect(() =>{
      if(uploadedImage){
        const data = {
          uploadId:props.data._id,
        }
  
        fetch("/api/profile/canEditUploadImage", {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': currentUser,
              },
          method:"POST",
          body: JSON.stringify(data)
        })
        .then((response)=>{ 
            return response.json();   
        })
        .then((dataRes)=>{ 
            if(dataRes.seccess){
                setInfo(dataRes.data)
                if(dataRes.can){
                  setOwn(true);
                }else{
                  setOwn(false);
                }
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
      }
    }, []);
    ////////////////////////////////////////////////////////////////
    const handleValue = (val) =>{
      setInfo({...info , properties: val});
    }
    ////////////////////////////////////////////////////////////////
    const EditInfo = () => {
      const data = {
        uploadId:props.data._id,
        properties: info.properties,
        sunTitle:info.sunTitle,
        title:info.title,
      }

      fetch("/api/profile/editUploadImageInfo", {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': currentUser,
            },
        method:"POST",
        body: JSON.stringify(data)
      })
      .then((response)=>{ 
          return response.json();   
      })
      .then((dataRes)=>{ 
          if(dataRes.seccess){
              // console.log('dataRes.data',dataRes.data);
              
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
    }
    ////////////////////////////////////////////////////////////////
  //  const downloadFile = (src , size) =>{
  //   var arraySrc = src.split('/');
  //   var a = document.createElement('a');
  //   // a.style = 'display:none';
  //   var fileName = arraySrc[arraySrc.length - 1] ? arraySrc[arraySrc.length - 1] : src;
  //   a.href = src;
  //   a.download = src;
  //   // a.download = fileName;
  //   a.target = "_blank"
  //   document.body.appendChild(a);
  //   a.click();
    
  //  }

    const saveFile = (info) => {
        addItemToSave(info);
        if(!selectedCart){
            setMessage('عکس مورد نظر ذخیره شد');
            setStatus('1');
        }else{
            setMessage('عکس از حالت ذخیره خارج شد');
            setStatus('0');
        }
        setShowMessage(true);
    }

   const handleDownloadFile = (size) =>{
      downloadFile(props.data.src , size)
   }

   const onLoad = () =>{
    setLoad(true);
}
    ////////////////////////////////////////////////////////////////
    return (
        <DescriptionContainer>
          <DescriptionBody>
            
            <ContentContainer id="menu__content">
              <ArrowButton onClick={() => {setState({...state,backward:false,showMore:true})}}><NextArrowIcon/></ArrowButton>
              <DescriptionImageContainer >
                  <DescriptionImg
                    src = {props.data.src}
                    onLoad={onLoad} 
                    onerror = {wait}
                    // onClick = {props.close}
                  />
              </DescriptionImageContainer>
              
            </ContentContainer>
            <ContentBackContainer id="menu__contentBack" load={load ? "true" : null}>
              <DescriptionContent>
                    <Header>
                      
                      <DescriptionCaption>
                        <WriterImageContainer>
                          <WriterImage 
                           src={props.data.photographerPicture ? props.data.photographerPicture : user}
                           layout="fill"
                           />
                        </WriterImageContainer>
                        <Link href = "/"><WriterName>{props.data.photographer}</WriterName></Link>
                        
                      </DescriptionCaption>

                      <HeaderButtons>
                        <Tooltip title="دانلود"  aria-label="دانلود">
                          <DownloadButtonsContainer>
                            <DownloadButtonIcon onClick={()=> setState({...state,showDownloadBox:!state.showDownloadBox})}>
                              <ArrowBottom/>
                            </DownloadButtonIcon>
                            <DownloadButton onClick={() => downloadFile(props.data.src , 0)}>
                              دانلود 
                            </DownloadButton>
                          </DownloadButtonsContainer>
                        </Tooltip>
                        {own ? <Tooltip title="ویرایش"  aria-label="ویرایش">
                          <HeaderButton onClick={() =>{setEditMode(!editMode)}}>
                            <HeaderEditIcon/>
                          </HeaderButton>
                        </Tooltip> : ''}
                        <Tooltip title="ذخیره"  aria-label="ذخیره">
                          <HeaderButton select ={selectedCart ? "true" : null} onClick={() => saveFile(props.data)}>
                            <HeaderSaveIcon select ={selectedCart ? "true" : null}/>
                          </HeaderButton>
                        </Tooltip>
                        <HeaderButton onClick={() => {setState({...state,showMore:false,backward:true})}}><PrevArrowIcon/></HeaderButton>
                      </HeaderButtons>
                    </Header>
                    {state.showDownloadBox ? <DownloadCard setSize={setSize} size={size} handleDownloadFile = {handleDownloadFile} /> : ''}
                    {!own || !editMode ? <TextContainer>
                      <ImageTitle>{info.title}</ImageTitle>
                      <ImageType>نوع : {info.properties ? info.properties : '-'}</ImageType>
                      <ImageSubTitle>{state.showAllSunTitle ? limitRecipeTitle(info.sunTitle , 251) :limitRecipeTitle(info.sunTitle , 150)}{!state.showAllSunTitle ? <Span onClick={() => setState({...state , showAllSunTitle: !state.showAllSunTitle})}>بیشتر</Span> : ''}</ImageSubTitle>
                    </TextContainer> : editMode ? <TextContainer>
                      <Group><Label htmlFor="title">عنوان</Label><TitleInput id="title" type = "text" defaultValue ={info.title} onChange={e => setInfo({...info , title: e.target.value})} /></Group>
                      <Group>
                        <Label>انتخاب نوع</Label>
                        <MyDropDown border="true" handleValue= {handleValue} val = {info.properties}/>
                      </Group>
                      <Group><Label htmlFor="description">توضیحات</Label><DescriptionInput id="description" rows="5" defaultValue ={info.sunTitle} onChange={e => setInfo({...info , description: e.target.value})}/></Group>
                      <ButtonsContainer>
                        <MyButton mg="3" text="ارسال" onClick = {EditInfo} />
                        <MyButton mg="3" text="کنسل" onClick = {() =>{setEditMode(!editMode)}} />
                      </ButtonsContainer>
                    </TextContainer> : ''}
              </DescriptionContent>
            </ContentBackContainer>            
          </DescriptionBody>
          <BtnClose onClick = {props.close}><MyCloseIcon/></BtnClose>
          {
                showMessage ? <MySnackbar message={message} status={status} showMessage={showMessage} setShowMessage={setShowMessage} /> : ''
            }
        </DescriptionContainer>
      );
};

const mapStateToProps = (state, props) => {
  return createStructuredSelector({
      selectedCart: selectedCart(state, props.data._id), 
      currentUser:currentUser,
  });
};

const mapDispatchToProps = (dispatch) => ({
  addItemToSave : (id) => dispatch(addItem(id)),
});

export default connect(mapStateToProps , mapDispatchToProps)(ShowImage);