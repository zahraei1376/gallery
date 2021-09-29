import { Tooltip } from '@material-ui/core';
import { useState , useEffect } from 'react';
import { limitRecipeTitle } from '../../generalMethod/limitRecipeTitle';
import {Span,DescriptionContainer , DescriptionBody ,DescriptionContent,
  DescriptionImageContainer ,DescriptionImg ,DescriptionCaption,BtnClose,
  ImageTitle,ImageSubTitle , WriterImageContainer,WriterImage,WriterName,
  Header,TextContainer, HeaderButton,DownloadButtonsContainer,DownloadButtonIcon,DownloadButton,ArrowBottom, HeaderDownloadIcon,CloseButton ,HeaderButtons,HeaderSaveIcon, MyCloseIcon,
  ContentContainer,ContentBackContainer , ArrowButton , NextArrowIcon , PrevArrowIcon} from './showImage.styles';
import DownloadCard from './downloadBoxContainer.component';
import wait from '../../assets/img/wait.jpg';
import {addItem} from '../../redux/cart/cart.action';
import { connect } from 'react-redux';
import MySnackbar from '../messageBox/messageBox.component';
import { createStructuredSelector } from 'reselect';
import { selectedCart } from '../../redux/cart/cart.selectors';
import {downloadFile} from '../../generalMethod/limitRecipeTitle';
const ShowImage = ({addItemToSave,selectedCart,...props}) => {
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
    /////////////////////////////////////////////////////////////
     var content = document.getElementById("menu__content");
     var contentBack = document.getElementById("menu__contentBack");
    /////////////////////////////////////////////////////////////
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
    ////////////////////////////////////////////////////////////////
    return (
        <DescriptionContainer>
          <DescriptionBody>
            
            <ContentContainer id="menu__content">
              <ArrowButton onClick={() => {setState({...state,backward:false,showMore:true})}}><NextArrowIcon/></ArrowButton>
              <DescriptionImageContainer >
                  <DescriptionImg
                    src = {props.data.src}
                    onerror = {wait}
                    // onClick = {props.close}
                  />
              </DescriptionImageContainer>
              
            </ContentContainer>
            <ContentBackContainer id="menu__contentBack">
              <DescriptionContent>
                    <Header>
                      
                      <DescriptionCaption>
                        <WriterImageContainer>
                          <WriterImage src={props.data.photographerPicture}/>
                        </WriterImageContainer>
                        <WriterName>{props.data.photographer}</WriterName>
                        
                      </DescriptionCaption>

                      <HeaderButtons>
                        <Tooltip title="دانلود"  aria-label="دانلود">
                          <DownloadButtonsContainer>
                            <DownloadButtonIcon onClick={()=> setState({...state,showDownloadBox:!state.showDownloadBox})}>
                              <ArrowBottom/>
                            </DownloadButtonIcon>
                            <DownloadButton onClick={() => downloadFile(props.data.src , 0)}>
                              دانلود 
                              {/* <HeaderDownloadIcon/> */}
                            </DownloadButton>
                          </DownloadButtonsContainer>
                        </Tooltip>
                        {/* <div> */}
                        <Tooltip title="ذخیره"  aria-label="ذخیره">
                          <HeaderButton select ={selectedCart ? "true" : null} onClick={() => saveFile(props.data)}>
                            <HeaderSaveIcon select ={selectedCart ? "true" : null}/>
                          </HeaderButton>
                        </Tooltip>
                        <HeaderButton onClick={() => {setState({...state,showMore:false,backward:true})}}><PrevArrowIcon/></HeaderButton>
                        {/* </div> */}
                      </HeaderButtons>
                    </Header>
                    {state.showDownloadBox ? <DownloadCard setSize={setSize} size={size} handleDownloadFile = {handleDownloadFile} /> : ''}
                      <TextContainer>
                    <ImageTitle>{props.data.title}</ImageTitle>
                    <ImageSubTitle>{state.showAllSunTitle ? limitRecipeTitle(props.data.sunTitle , 251) :limitRecipeTitle(props.data.sunTitle , 150)}{!state.showAllSunTitle ? <Span onClick={() => setState({...state , showAllSunTitle: !state.showAllSunTitle})}>بیشتر</Span> : ''}</ImageSubTitle>
                      </TextContainer>
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
      selectedCart: selectedCart(state, props.data.id), 
  });
};

const mapDispatchToProps = (dispatch) => ({
  addItemToSave : (id) => dispatch(addItem(id)),
});

export default connect(mapStateToProps , mapDispatchToProps)(ShowImage);