import styled ,{keyframes} from "styled-components";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

export const SavedBoxContainer = styled.div`
    position:absolute;
    left:${props => props.location && props.location.x ? `${props.location.x}px` : "-60rem"};
    top:${props => props.location && props.location.y ? `${props.location.y}px` : "-10rem"};
    scroll:auto;
    display:flex;
    flex-direction:column;
    width:25rem;
    height:40rem;
    background-color:#fff;
    border-radius:1rem;
    // display:${props => props.fixed ? 'block' : 'none'};
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
    font-family:Bnazanin;
    text-align:right;
    white-space: pre-wrap;     
    white-space: -moz-pre-wrap;  
    white-space: -pre-wrap;      
    white-space: -o-pre-wrap;  
    word-wrap: break-word; 
`;

export const MyTypography = styled(Typography)`
    font-size:2rem !important;
    font-family:Bnazanin !important;
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