import { Tooltip } from '@material-ui/core';
import { useState , useEffect } from 'react';
import { limitRecipeTitle } from '../../generalMethod/limitRecipeTitle';
import {DescriptionContainer , DescriptionBody ,DescriptionContent,
  DescriptionImageContainer ,DescriptionImg ,DescriptionCaption,BtnClose,
  ImageTitle,ImageSubTitle , WriterImageContainer,WriterImage,WriterName,
  Header, HeaderButton, HeaderDownloadIcon,CloseButton ,HeaderButtons,HeaderSaveIcon, MyCloseIcon,
  ContentContainer,ContentBackContainer , ArrowButton , NextArrowIcon , PrevArrowIcon} from './showImage.styles';

const ShowImage = (props) => {
    const [state,setState] = useState({
        showMore:false,
        backward:false,
        // showBoxShopInfo:false,
    });

     /////////////////////////////////////////////////////////////
     var content = document.getElementById("menu__content");
     var contentBack = document.getElementById("menu__contentBack");
     /////////////////////////////////////////////////////////////
 
     useEffect(()=>{
 
        //  if(state.MoreItem){
        //      content.style.transform= 'rotateY(130deg)';
        //      contentBack.style.zIndex ='2';
        //  }
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

    return (
        <DescriptionContainer>
          <DescriptionBody>
            
            <ContentContainer id="menu__content">
              <ArrowButton onClick={() => {setState({...state,backward:false,showMore:true})}}><NextArrowIcon/></ArrowButton>
              <DescriptionImageContainer >
                  <DescriptionImg
                    src = {props.data.src}
                    // onClick = {props.close}
                  />
              </DescriptionImageContainer>
              
            </ContentContainer>
            <ContentBackContainer id="menu__contentBack">
              <DescriptionContent>
                    <Header>
                      <DescriptionCaption>
                        <WriterImageContainer>
                          <WriterImage src="/img/user.png"/>
                        </WriterImageContainer>
                        <WriterName>{props.data.photographer}</WriterName>
                      </DescriptionCaption>

                      <HeaderButtons>
                        <Tooltip title="دانلود"  aria-label="دانلود">
                          <HeaderButton>
                            <HeaderDownloadIcon/>
                          </HeaderButton>
                        </Tooltip>
                        <Tooltip title="ذخیره"  aria-label="ذخیره">
                          <HeaderButton>
                            <HeaderSaveIcon/>
                          </HeaderButton>
                        </Tooltip>
                        <HeaderButton onClick={() => {setState({...state,showMore:false,backward:true})}}><PrevArrowIcon/></HeaderButton>
                      </HeaderButtons>
                    </Header>
                    <ImageTitle>{props.data.title}</ImageTitle>
                    <ImageSubTitle>{limitRecipeTitle(props.data.sunTitle)}</ImageSubTitle>
                    
                    
              </DescriptionContent>
            </ContentBackContainer>

            
            {/* <DescriptionContent>
                <Header>
                  <DescriptionCaption>
                    <WriterImageContainer>
                      <WriterImage src="/img/user.png"/>
                    </WriterImageContainer>
                    <WriterName>زهرا علیپور نوایی</WriterName>
                  </DescriptionCaption>

                  <HeaderButtons>
                    <Tooltip title="دانلود"  aria-label="دانلود">
                      <HeaderButton>
                        <HeaderDownloadIcon/>
                      </HeaderButton>
                    </Tooltip>
                    <Tooltip title="ذخیره"  aria-label="ذخیره">
                      <HeaderButton>
                        <HeaderSaveIcon/>
                      </HeaderButton>
                    </Tooltip>
                  </HeaderButtons>
                </Header>
                <ImageTitle>{props.data.title}</ImageTitle>
                <ImageSubTitle>{limitRecipeTitle(props.data.sunTitle)}</ImageSubTitle>
                
                
            </DescriptionContent>
            <DescriptionImageContainer>
                <DescriptionImg
                  src = {props.data.src}
                  onClick = {props.close}
                />
            </DescriptionImageContainer> */}
            
            
          </DescriptionBody>
          {/* <ArrowButton onClick={() => {setState({...state,showMore:true})}}><NextArrowIcon/></ArrowButton> */}
          <BtnClose onClick = {props.close}><MyCloseIcon/></BtnClose>
        </DescriptionContainer>
      );
};

export default ShowImage;