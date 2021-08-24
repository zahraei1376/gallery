import styled ,{css , keyframes} from "styled-components";
import { IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BookmarkIcon from '@material-ui/icons/Bookmark';

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

const fadeLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }

  100%{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const SaveContainer = styled.div`
    width:100%;
    padding:2rem;
    position:absolute;
    top:0;
    left:0;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export const SaveIcon = styled(BookmarkIcon)`
    font-size:3rem !important;
    transition:all .4s !important;
    color:${props => props.bookmark ? "red !important" : "#fff"};

`;

export const SaveButton = styled.button`
    background-color:rgba(0,0,0,.4);
    color:#fff;
    animation-name:${fadeLeft};
    // animation-direction: alternate;
    animation-iteration-count: 1;
    animation-fill-mode:both;
    animation-duration: .7s;
    padding:1rem 1.2rem;
    border-radius:50%;
    border:none;
    cursor:pointer;

    &:focus ${SaveIcon}{
        color:red ;
    }
    
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