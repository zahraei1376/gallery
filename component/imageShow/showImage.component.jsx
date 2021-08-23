import React from 'react';
import {ShowImageContainer ,ShowImageContent,ShowImageImgText ,ShowImageImgQuestion,ShowImageCaption,BtnClose} from './showImage.styles';

const ShowImage =(props)=>{
    return (
        <ShowImageContainer>
          <ShowImageContent>
              <ShowImageImgText
                src = {props.imageSrc}
                onClick = {props.close}
              />
          </ShowImageContent>
          <BtnClose onClick = {props.close}>بستن</BtnClose>
          <ShowImageCaption>{props.caption}</ShowImageCaption>
        </ShowImageContainer>
      );
};

export default ShowImage;