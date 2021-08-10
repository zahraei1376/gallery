import styled , {keyframes} from 'styled-components';
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
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
/////////////////////////////////////////

export const ArrowIcon = styled(ArrowBackIosIcon)`
    font-size:4rem !important;
    color:rgb(218,160,103) !important;
    margin-left:1rem;
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
    position: relative;
    // padding: 80px 0 83px;
    background: #f5f5f5;
    height: 70rem;
    margin-bottom:10rem;
`;

export const MainContainer = styled.div`
    // max-width: 1210px;
    // padding: 0 2rem;
    width:100%;
    height:100%;
    // background-color:#000;
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
`;

export const ServiceContent = styled.div`
    margin-left:auto;
    width:60%;
    padding:2rem 3rem;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
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
    transition:all .3s;
    min-height:10rem;
    cursor:pointer;
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
    display:${props => props.show ? 'flex' : "none"}
`;

export const ListItems = styled.li`
    padding:1rem 3rem 1rem 0;
    transition:all .3s;
    // animation: ${fade} 1s alternate;
    animation-name:${fade};
    // animation-direction: alternate;
    animation-iteration-count: 1;
    animation-fill-mode:backwards;
    animation-duration: 1s;
    animation-delay: ${props => props.delay ? props.delay : '0'}s;
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

export const ServiceImage = styled.img`
    width:100%;
    height:100%;
`;

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


