import React from 'react';
import {ComentsContainer ,ComentsContainerDiv ,ComentsImageDiv ,ComentsImage} from './CustomersComments.styles';
import CustomersCommentsBox from './cutomersComponetBox.component';
// import Comment from '../../assets/img/comment.svg';
import Comment from '../../asset/img/comment.svg';
const CustomersComments = () =>{
    return(
        <ComentsContainerDiv>
            <ComentsImageDiv>
                <ComentsImage src ={Comment} />
            </ComentsImageDiv>
        
            <ComentsContainer>
                <CustomersCommentsBox/>
                <CustomersCommentsBox/>
                <CustomersCommentsBox/>
            </ComentsContainer>
        </ComentsContainerDiv>
    )
};

export default CustomersComments;