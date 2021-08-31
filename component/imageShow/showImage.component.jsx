import { Tooltip } from '@material-ui/core';
import React from 'react';
import {DescriptionContainer , DescriptionBody ,DescriptionContent,
  DescriptionImageContainer ,DescriptionImg ,DescriptionCaption,BtnClose,
  ImageTitle,ImageSubTitle , WriterImageContainer,WriterImage,WriterName,Footer, FooterButton, FooterIcon,} from './showImage.styles';

const ShowImage =(props)=>{

  const handleSubTitleLength = (text) =>{
    var words = text.split(' ');
    words.reduce((total ,curr) =>{
      if(total + curr.length > 36){

      }else{

      }
    })
      return text;
  }
    return (
        <DescriptionContainer>
          <DescriptionBody>
            <DescriptionContent>
                <ImageTitle>حیوانات دوست داشتنی</ImageTitle>
                <ImageSubTitle>{handleSubTitleLength('خرگوش های دوست داشتنی در طبیعت')}</ImageSubTitle>
                <DescriptionCaption>
                  <WriterImageContainer>
                    <WriterImage src="/img/user.png"/>
                  </WriterImageContainer>
                  <WriterName>زهرا علیپور نوایی</WriterName>
                  {/* {props.caption} */}
                </DescriptionCaption>
                <Footer>
                  <Tooltip title="دانلود"  aria-label="دانلود">
                    <FooterButton>
                      <FooterIcon/>
                    </FooterButton>
                  </Tooltip>
                   
                </Footer>
            </DescriptionContent>
            <DescriptionImageContainer>
                <DescriptionImg
                  src = {props.imageSrc}
                  onClick = {props.close}
                />
            </DescriptionImageContainer>
            
            
          </DescriptionBody>
          <BtnClose onClick = {props.close}>بستن</BtnClose>
          {/* <DescriptionCaption>{props.caption}</DescriptionCaption> */}
        </DescriptionContainer>
      );
};

export default ShowImage;