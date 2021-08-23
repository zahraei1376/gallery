import styled , {keyframes ,css} from 'styled-components';
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Image from 'next/image';
////////////////////////////////////////
const fade = keyframes`
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }

//   50%{
//     transform: translateX(5rem);
//   }

  100%{
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeOut = keyframes`
    0% {
        opacity: 1;
        transform: translateX(0);
    }

  100%{
    opacity: 0;
    transform: translateX(100%);
  }
`;

const fadeLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }

//   50%{
//     transform: translateX(5rem);
//   }

  100%{
    opacity: 1;
    transform: translateX(0);
  }
`;
////////////////////////////////////////
export const ServiceImageMobile = styled.div`
    width:100%;
    height:50%;
    // padding:2rem 3rem;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;

    // &::before{
    //     content: "";
    //     position: absolute;
    //     display: block;
    //     top: -30px;
    //     left: 0;
    //     width: 30rem;
    //     height:100%;
    //     bottom: 0;
    //     background-color:${props => props.show ? "rgba(218,160,103 ,1)": "#9dc6da"} ;
    //     @media only screen and (max-width: 540px){
    //         display:none;
    //     }
    // }
    @media only screen and (min-width: 540px){
        display:none;
    }

`;
export const ImgContainerMobile = styled.div`
    width:40rem;
    height:40rem;
    display:flex;
    justify-content:center;
    align-items:center;
`;
export const MyImageWrapperMobile = styled.div`
    width:50%;
    height:100%;
    position:relative;
`;
export const MyImageMobile = styled(Image)`

`;

export const ItemMobile = styled.a`
    position:absolute;
    top:0;
    left:0;
    font-size:3.5rem;
    font-weight:200;
    font-family:Nastaliq;
    display:flex;
    align-items:center;
    color:#fff;
    padding-left:2rem;
`;


export const MyImageWrapperHideMobile = styled.div``;
export const MyImageHideMobile = styled(Image)``;
/////////////////////////////////////////
export const ListContainer = styled.div`
    display:flex;
    flex-direction:column;
    @media only screen and (max-width: 540px){
        display:none;
    }

`;
/////////////////////////////////////////
export const MyImageWrapper = styled.div`
    transition:all .4s;
    animation-name:${fadeLeft};
    animation-iteration-count: 1;
    // animation-fill-mode:forwards;
    animation-fill-mode:both;
    animation-duration: 1s;
    display: ${props => props.show ? "none" : "block"};
    transition: opacity 3s ease-in-out;
    // transform: translateX(-10rem);
    opacity: 0;
    transform: translateX(-10rem);
`;

export const MyImageWrapperHide = styled.div`
    transition:all .4s;
    animation-name:${fadeLeft};
    animation-iteration-count: 1;
    // animation-fill-mode:forwards;
    animation-fill-mode:both;
    animation-duration: 1s;
    display: ${props => props.show ? "block" : "none"};
    transition: opacity 3s ease-in-out;
    // transform: translateX(-10rem);
    opacity: 0;
    transform: translateX(-10rem);
`;


export const MyImage = styled(Image)`
  border-radius:1rem !important;
//   box-shadow:0 0 9px 3px rgba(0,0,0,.5) !important;
`;

export const MyImageHide = styled(Image)`
  border-radius:1rem !important;
//   box-shadow:0 0 9px 3px rgba(0,0,0,.5) !important;
`;

export const ArrowIcon = styled(ArrowBackIosIcon)`
    font-size:4rem !important;
    color:rgb(218,160,103) !important;
    margin-left:1rem;
`;

export const ImgContainer = styled.div`
  width:40rem;
  height:40rem;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-left:3rem;

  @media only screen and (max-width: 540px){
    // width:100%;
    flex-direction:column;
  }

`;

export const ArrowIconList = styled(ArrowBackIosIcon)`
    font-size:2rem !important;
    color:rgb(218,160,103) !important;
    margin-right:1rem !important;
    display:none !important;
    transition:all .4s;
    animation-name:${fade};
    animation-iteration-count: 1;
    animation-fill-mode:backwards;
    animation-duration: 0.5s;
`;

export const ServiceConatiner = styled.div`
    width:100%;
    // display:flex;
    // align-items:center;
    position: relative;
    // padding: 80px 0 83px;
    background: #f5f5f5;
    height: 70rem;
    margin:10rem 0;
    
    @media only screen and (max-width: 794px){
        height: 75rem;
    }
`;

export const MainContainer = styled.div`
    // max-width: 1210px;
    // padding: 0 2rem;
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    // background-color:#000;
    @media only screen and (max-width: 540px){
        flex-direction:column;
    }
`;

export const ServiceBg = styled.div`
    position: absolute;
    left: 0;
    top: -68px;
    width: 30vw;
    min-height: 75rem;
    max-height: 80rem;
    overflow: hidden;
    background-color:#9dc6da;
    z-index:-1;
`;

export const ServiceContent = styled.div`
    // margin-left:auto;
    width:60%;
    height:100%;
    padding:2rem 3rem;
    display:flex;
    flex-direction:column;
    // justify-content:flex-end;

    @media only screen and (max-width: 540px){
        width:100%;
    }
`;


export const ServiceImage = styled.div`
    width:40%;
    height:100%;
    // padding:2rem 3rem;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    @media only screen and (max-width: 540px){
       display:none;
    }

    &::before{
        content: "";
        position: absolute;
        display: block;
        top: -30px;
        left: 0;
        width: 30rem;
        height:100%;
        bottom: 0;
        background-color:${props => props.show ? "rgba(218,160,103 ,1)": "#9dc6da"} ;
        @media only screen and (max-width: 540px){
            display:none;
        }
    }
`;

export const ServiceTitle = styled.h1`
    font-size:2rem;
    font-weight:300;
    font-family:Nastaliq;
    text-align:right;
    padding:3rem 0;
    color:rgb(218,160,103);
    display:inline-block;
`;

export const ServiceSubTitle = styled.h5`
    font-size:1.5rem;
    font-weight:200;
    font-family:Nastaliq;
    text-align:right;
    // padding:3rem 0;
    color:#1d1d1d;
    line-height:3rem;
    width: 80%;
    margin-left: auto;
`;

export const ArrowButton = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:4rem;
    border-radius:50%;
    width:7rem;
    height:7rem;
    border:none;
    background-color:rgba(218,160,103 , .1);
    cursor:pointer;
    display:none;
    transition:all 1s;
    display : ${props => props.show ? 'inline-block'  :'none'}
`;

export const ArrowButtonMobile = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left:4rem;
    border-radius:50%;
    width:7rem;
    height:7rem;
    border:none;
    background-color:rgba(218,160,103 , .5);
    cursor:pointer;
    transition:all 1s;
`;


export const MainTitle = styled.div`
    display:flex;
    justify-content: flex-end;
    align-items:center;
    // display:inline-block;
    font-size:3.5rem;
    font-weight:200;
    font-family:Nastaliq;
    text-align:right;
    color:${props => props.show ? 'rgb(218,160,103)' : '#1d1d1d' };
    transition:all .5s;
    min-height:10rem;
    cursor:pointer;
    // border-bottom:1px solid rgb(218,160,103);
    // padding:2rem;
    // line-height: normal;
    
    &:hover,
    &:active{
        color:rgb(218,160,103);
    }

    &:hover ${ArrowButton}{
        display:inline-block;
    }
    
`;

export const List = styled.ul`
    list-style:none;
    // display:flex;
    flex-direction:column;
    align-item:end;
    align-items : flex-end;
    // opacity:${props => props.show ? '1' : "0"};
    display:${props => props.show ? 'flex' : "none"};
    // nimation-name: ${props => props.show ? css `
    // ${fade} 0.7s` : css `${fadeOut} 0.7s`};
    // animation-iteration-count: 1;
    // animation-fill-mode:both;
    // animation-duration: 1.5s;
`;

export const ListItems = styled.li`
    padding:1rem 3rem 1rem 0;
    transition:all .3s;
    // animation: ${fade} 1s alternate;
    animation-name:${fade};
    // animation-direction: alternate;
    animation-iteration-count: 1;
    animation-fill-mode:both;
    animation-duration: 1.5s;
    animation-delay: ${props => props.delay ? props.delay : '0'}s;
    // opacity: 0;
    // transform: translateX(10rem);
    &:hover{
        padding:1rem 4rem 1rem 0;
    }

    &:hover ${ArrowIconList}{
        display:inline-block !important;
    }
`;

export const ListLink = styled.a`
    font-weight: 400;
    line-height: 4rem;
    font-size: 2rem;
    font-family:Nastaliq;
    color: #6e6559;
    -webkit-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
    display: flex;
    justify-content:center;
    align-items:center;
`;


export const ServiceBox = styled.div`
    display:flex;
    margin:2rem auto;
    align-items:center;
    border: 1px solid rgba(0, 0, 0, 0.12);
    width:90%;
    min-height:20rem;
`;

export const ServiceImageContainer = styled.div`
    width:20rem;
    height:100%;
`;

// export const ServiceImage = styled.img`
//     width:100%;
//     height:100%;
// `;

export const ServiceName = styled.p`
    font-size:2rem;
    font-weight:300;
    font-family:Bnazanin;
    margin:3rem 0;
`;

export const ServiceTextContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const ServiceTextBotton = styled.button`
    color: #843910;
    font-size: 1.2rem;
    border: none;
    border-bottom: 1px solid currentColor;
    padding-bottom: 2px;
    display: inline-block;
    background-color: transparent;
    cursor: pointer;
    transition: all .2s;
    margin-bottom:2rem;
    font-family:Nastaliq;

    &:hover{
        color:#333;
    }
`;

export const ServiceTextSpan = styled.span`
    font-size:2.5rem;
    font-weight:400;
    font-family:Bnazanin;
`;

export const ServiceTextQuestion = styled.pre`
    font-size:1.5rem;
    font-weight:300;
    font-family:Bnazanin;
    white-space: break-spaces;
    word-break: break-word;
    line-height:3rem;
    display:inline-block;
    padding:0 3rem 2rem 3rem;
    border-bottom:1px solid #eee;
    text-align:center;
`;

export const ServiceTextService = styled.pre`
    font-size:1.6rem;
    font-weight:400;
    font-family:Bnazanin;
    white-space: break-spaces;
    word-break: break-word;
    line-height:3rem;
    display:inline-block;
    padding: 3rem 2rem;
    text-align:center;
`;

export const ServiceTextServiceSpan = styled.span`
    font-size:1.7rem;
    font-weight:bold;
    font-family:Bnazanin;
`;


