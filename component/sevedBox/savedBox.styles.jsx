import styled ,{keyframes , css} from "styled-components";
import { IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// var width = window.innerWidth;
// var height = window.innerHeight;

const fadeRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }

  100%{
    opacity: 1;
    transform: translateX(0);
  }
`;

const fade = keyframes`
  0% {
    opacity: 0;
    // transform: translateX(10rem);
  }

  100%{
    opacity: 1;
    // transform: translateX(0);
  }
`;

export const P = styled.p`
  width:100%;
  color:#999;
  font-size:2rem;
  font-family:ir_sans;
  display:flex;
  align-items:Center;
  justify-content:Center;
`;

export const SaveCloseIcon = styled(CloseIcon)`
    font-size:2rem !important;
    transition:all .3s !important;
`;

export const SaveCloseButton = styled(IconButton)`
    margin:1rem !important;
    // display:inline !important;
    background-color:rgba(0,0,0,.4) !important;
    color:#fff !important;

    &:hover ${SaveCloseIcon}{
      color:#D84315 !important;
    }
`;
export const CloseButtonContainer = styled.div`
  width:100%;
  height:20%;
`;



export const ImageSaveBoxContainer = styled.div`
    width:100%;
    height: 80%;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content: space-between;
    // overflow:auto;
`;

export const ImageSaveBox = styled.div`
  width:100%;
  height: 70%;
  display:flex;
  align-items:flex-end;
  flex-direction:column;
  overflow:auto;
`;


export const SaveBoxContainer = styled.div`
width: 100%;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    margin:1rem 0;
    padding-bottom:1rem;
    border-bottom:1px solid #999;
`;

export const SaveBoxImage = styled.img`
    width:6rem;
    height:6rem;
`;

export const TiTleSaveBox = styled.p`
  font-size:1.5rem;
  font-family:ir_sans;
  margin-right:1rem;
  text-align: right;
  direction: rtl;
`;

export const SeeAllButton = styled.button`
  width:100%;
  height:20%;
  border:1px solid transparent;
  font-size:1.7rem;
  font-family:ir_sans;
  background-color:rgba(0,0,0,.8);
  color:#fff;
  // bottom:0;
  cursor:pointer;
  // align-self:flex-end;
  transition:all .3s;

  &:hover {
    border:1px solid #000;
    background-color:#fff;
    color:#000;
  }
`;

export const SavedBoxContainer = styled.div`
    position:absolute;
    ${props => props.location && 28 * 16  + props.location.x < props.width ?
      css`left: ${props.location.x}px;
      display:flex;
      flex-direction:column;
      align-items:flex-start;
    ` : props.location && 28 * 16  + props.location.x > props.width ?
      css`left: ${props.location.x}px;
          transform: translate(-100%,0);
          display:flex;
          flex-direction:column;
          align-items:flex-start;`
          :css`display:none;`
      // :css`left:-60rem;`
    }

    ${props => props.location.y  ?
      // css`top: ${props.location.y + 15}px;`: css`display:none;`
      // css`top: ${props.location.y - 4 * 16}px;`: css`display:none;`
      css`top: ${props.location.y + 10 }px;`: css`display:none;`
      // :css`left:-60rem;`
    }
    // left:${props => props.location && props.location.x ? `${props.location.x}px` : "-60rem"};
    // top:${props => props.location && props.location.y ? `${props.location.y + 15}px` : "-10rem"};
    // display:${props => props.location.x ? "block" : "none"};
    // scroll:auto;
    // display:flex;
    // flex-direction:column;
    // align-items:flex-end;
    width:28rem;
    height:40rem;
    background-color:#eee;
    // border-radius:1rem;
    transition:all .5s;
    overflow:hidden;
    border:1px solid #777;
    padding:0 1.5rem 1.5rem 1.5rem;
`;

export const SavedBox = styled.div`
//   scroll:auto;
  display:flex;
  justify-content:flex-end;
  align-items:center;
  padding:1rem 5px;
`;

export const SavedImage = styled.img`
  width:7rem;
  height:auto;
  margin-left:3rem;
//   border-radius:50%;
`;

export const SavedTitle = styled.pre`
    font-size:2rem;
    font-family:ir_sans;
    text-align:right;
    white-space: pre-wrap;     
    white-space: -moz-pre-wrap;  
    white-space: -pre-wrap;      
    white-space: -o-pre-wrap;  
    word-wrap: break-word; 
`;

export const MyTypography = styled(Typography)`
    font-size:2rem !important;
    font-family:ir_sans !important;
    color:#999;
    text-align:right;
    padding:1rem !important;
`;

export const MySaveButton = styled(IconButton)`
    // margin-right:3rem;
    background-color:rgba(0,0,0,.4) !important;
    color:#fff !important;
    animation-name:${fadeRight};
    // animation-direction: alternate;
    animation-iteration-count: 1;
    animation-fill-mode:both;
    animation-duration: .7s;
`;

export const MySaveIcon = styled(ExpandMoreIcon)`
    font-size:3rem !important;
`;