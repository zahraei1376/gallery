import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';

export const SearchButton = styled(IconButton)`
    margin-right:-4rem !important;
    position:absolute !important;
    top:-1px;
    left:-5px;
`;

export const ClearIcon = styled(CloseIcon)`
  font-size:2.5rem !important;
//   margin-right:-4rem ;
  z-index:3 !important;
`;

export const MySearchIcon = styled(SearchIcon)`
  font-size:3rem !important;
//   margin-right:-4rem ;
  z-index:3 !important;
`;

export const SearchBoxContainer = styled.div`
    position:relative;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -moz-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    z-index:5;
    height:100%;
`;

export const SearchBoxInput = styled.input`
    width:100%;
    height:5rem;
    border-radius:1rem;
    border:2px solid #777;
    z-index:2;
    padding:0 2rem;
    text-align:right;
    // #fc8d6d,#bf4f7b,#242d64 80%,#191e3e

    &:focus{
        border:3px solid #242d64;
        outline:none;
    }
`;

export const BackDrop = styled.div`
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    // width:100%;
    // height:100%;
    width:100vw;
    height:100vh;
    background-color:rgba(0,0,0,.8);
    display:${props => props.show ? 'block' : 'none'};
    z-index:4;
    cursor:zoom-out;
`;