import styled , {keyframes} from "styled-components";
import Image from 'next/image';
import AttachFileIcon from '@material-ui/icons/AttachFile';


// const fade = keyframes`
//   0% {
//     // opacity: 0;
//     background: -webkit-linear-gradient(top left, #999 0% ,transparent 0);
//   }


//   20% {
//     // opacity: 0;
//     background: -webkit-linear-gradient(top left, #999 90% ,transparent 0);
//   }

//   40% {
//     // opacity: 0;
//     background: -webkit-linear-gradient(top left, #999 80% ,transparent 0);
//   }

//   60% {
//     background: -webkit-linear-gradient(top left, #999 70% ,transparent 0);
//   }

//   80% {
//     background: -webkit-linear-gradient(top left, #999 60% ,transparent 0);
//   }

//   100%{
//     opacity: 1;
//     background: -webkit-linear-gradient(top left, #999 50% ,transparent 0);
//   }
// `;


const fade = keyframes`
  0% {
    width: 0;
    height: 0;
  }

  100%{
    width: 5rem;
    height: 5rem;
  }
`;

const fadeOut = keyframes`
  0% {
    width: 5rem;
    height: 5rem;
  }

  100%{
    width: 0;
    height: 0;
  }
`;

export const AttachContainer = styled.div`
    transform: rotate(24deg);
    position: absolute;
    top: -3.5rem;
    right: -5px;
    z-index: inherit;

    @media only screen and (max-width: 600px){
        transform: rotate(3deg);
        top: -5.5rem;
        right: 1px;
    }
`;

export const AttachIcon = styled(AttachFileIcon)`
    font-size:5rem !important;

    @media only screen and (max-width: 600px){
        font-size:8rem !important;
    }
`;

export const TopicImageContainer = styled.div`
    position:relative;
    width:100%;
    height:13rem;
    filter: brightness(50%);
    transition: all .3s;
    overflow:hidden;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color:#fff;
`;


export const TopicBoxContainer = styled.div`
    // border:1px solid #999;
    // border:1px solid rgba(0,0,0,.2);
    // overflow:hidden;
    // transition:all 1s;
    min-height:auto;
    // transition: border-color,box-shadow .1s ease-in-out;
    transition: background 1s ease-in-out;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 4px 24px rgb(0 ,0 ,0 ,0.04);
    border: 1px solid #eee;
    position:relative;
    z-index:1;
    padding-bottom:3rem;
    cursor:pointer;

    &:after {
        transition: all 1s ease-in-out;
        content: "";
        position: absolute;
        width: 5rem;
        height: 5rem;
        border-radius:5px;
        background: -webkit-linear-gradient(top left, #777 50% ,transparent 0);
        bottom: 0;
        right: 0;
        border-bottom-left-radius:5px;
        animation-name:${fadeOut};
        animation-iteration-count: 1;
        animation-fill-mode:both;
        animation-duration: 1s;
        // display:none;

    }

    &:hover:after {
        animation-name:${fade};
        animation-iteration-count: 1;
        animation-fill-mode:both;
        animation-duration: 1s;
        // transition: all 1s ease-in-out;
        // display:flex;
        // background: -webkit-linear-gradient(top left, #777 50% ,transparent 0);
    }

    &:hover ${TopicImageContainer}{
        filter: brightness(100%);
    }
`;

export const TopicImage = styled(Image)`
    
`;

export const TopicPhotographerContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export const TopicPhotographerImageContainer = styled.div`
    position:relative;
    width:6rem;
    height:6rem;
    border-radius:50%;
    overflow:hidden;
    margin:1rem;
`;

export const TopicPhotographerImage = styled(Image)`
    
`;

export const TopicPhotographerName = styled.h6`
    font-size:1.5rem;
    font-family:ir_sans;
    padding: 0 1rem ;
    margin:0;
    color:#888;
    
`;

export const TopicBoxSubTitle = styled.p`
    font-size:1.5rem;
    font-family:ir_sans;
    text-align:right;
    line-height:4rem;
    padding:1rem;
    color:#777;
`;

export const PhotographerTitle = styled.h1`
    font-size:2.5rem;
    font-family:ir_sans;
    padding:2rem 1rem;
    margin:0;
    text-align: center;
    // color:#888;
`;

export const PhotographerInfo = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: end;
`;


export const TopicLayerBack = styled.div`
    width:97%;
    position: absolute;
    height: 3rem;
    display: block;
    left: 0;
    right: 0;
    background: #fff;
    // box-shadow: 0 0 25px rgb(0 , 0,0,.4);
    box-shadow: 0 0 16px 1px rgb(0  ,0 , 0 ,0.3);
    border-radius: 10px;
    // z-index: 2;
    // top: -15px ;
    // z-index: 3;
    top: -9px;
    pointer-events: none;
    content: "";
    margin: 0 auto;

    &:before{
        position: absolute;
        width:90%;
        height: 3rem;
        display: block;
        left: 0;
        right: 0;
        background: #fff;
        box-shadow: 0 0 16px 2px rgb(0  ,0 , 0 ,0.3);
        // box-shadow: 0 0 25px rgb(0 , 0,0,.2);
        border-radius: 10px;
        // z-index: 1;
        // z-index: 1;
        top: -13px;
        pointer-events: none;
        content: "";
        margin: 0 auto;
        z-index: -1;
    }

    &:after{
        position: absolute;
        width:95%;
        height: 3rem;
        display: block;
        left: 0;
        right: 0;
        background: #fff;
        box-shadow: 0 0 16px 2px rgb(0  ,0 , 0 ,0.32);
        // box-shadow: 0 0 25px rgb(0 , 0,0,.2);
        border-radius: 10px;
        // z-index: 0;
        top: -7px;
        pointer-events: none;
        content: "";
        z-index:-1;
        margin: 0 auto;
    }
`;



