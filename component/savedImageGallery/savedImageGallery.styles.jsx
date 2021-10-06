import styled ,{css , keyframes} from "styled-components";
import Image from 'next/image';
import { IconButton } from '@material-ui/core';
import DownloadIcon from '@mui/icons-material/Download';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
const rowGutter = '30px';

const fade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10rem);
  }

  100%{
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeRight = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10rem);
  }

  100%{
    opacity: 1;
    transform: translateY(0);
  }
`;

const IconStyle = css`
    font-size:2.5rem !important;
    color:#fff !important;

    @media only screen and (max-width: 540px){
        color:#000 !important;
    }
`;

export const CheckIcon = styled(BeenhereIcon)`
    transition:all .2s;
    font-size:3rem !important;
    display: ${props => props.selected ? 'block' : 'none'} !important;
    position:absolute;
    top:5px;
    right:1rem;
`;

export const DownloadContainer = styled(IconButton)`
//   width:20%;
`;

export const Download = styled(DownloadIcon)`
  ${IconStyle};
`;

export const InfoIcon = styled(PermIdentityIcon)`
    ${IconStyle};
`;

export const GalleryTitle = styled.h5`
    font-size:2rem;
    font-family: Abdoullah;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    margin:4rem 4rem 0 0;
    padding:0;
`;

export const SpinnerContainer = styled.div`
    width:100%;
    height:80vh;
`;

export const GallerySecion = styled.div`
    width:100%;
    // position:relative;
    // min-height:100vh;
    // background-color: #f9f7f6;
    // background-color: #1d1d1d;
    // grid-column: 1 / 7;
    display: grid;
    grid-template-columns: ${props => props.size ? `repeat(${props.size},minmax(0,1fr))` : `repeat(4,minmax(0,1fr))`};
    // grid-template-columns: repeat(${SIZE},minmax(0,1fr));
    // grid-auto-rows: 1fr;
    // grid-template-columns: repeat(9, 1fr);
    // grid-auto-columns: 10rem;
    // grid-auto-rows: 100px;
    // align-items: start;
    // grid-template-columns: repeat(auto-fill, 100px);
    // grid-template-rows: repeat(5, 1fr);
    // grid-template-rows: repeat(7, 5vw);
    grid-gap: 3rem;
    padding: 1rem 4rem 2rem 4rem;
    // margin: 0 4rem;
    box-sizing:border-box;
    z-index:1;
`;

export const MyImage = styled(Image)`
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
`;

export const TitleContainer = styled.div`
    // height:20%;
    width:100%;
    text-align:right;
    padding:1rem 5px;
    display:none;
    position:absolute;
    bottom:0;
    background-color:rgba(0,0,0,.8);
    transition:all .3s;
    animation-name:${fade};
    animation-iteration-count: 1;
    animation-fill-mode:both;
    animation-duration: 1s;
    // display:flex;
    // justify-content:space-evenly;
    // align-items:center;

    @media only screen and (max-width: 540px){
        // display:block;
        position:relative;
        background-color:transparent;
        display:flex;
        justify-content:space-evenly;
        align-items:center;
    }
`;

export const Title = styled.h1`
    width:80%;
    font-size:1.5rem;
    font-family: Abdoullah;
    text-align:right;
    color:#fff;
    animation-name:${fadeRight};
    animation-iteration-count: 1;
    animation-fill-mode:both;
    animation-duration: 1.5s;
    @media only screen and (max-width: 540px){
        color:#999;
        font-size:2rem;
    }
`;



export const ImageWrapper = styled.div`
    width: 100%;
    align-items: start;
    // position:relative;
    // cursor: -webkit-zoom-in;
    // cursor: zoom-in;
    cursor: pointer;
    border-radius:2rem;
    overflow:hidden;
    // width:100%;
    // Height:70%;
    background-color:#000;
    transition:all .3s;

    & > div {
        position: unset !important;
    }

    &:hover {
        filter: grayscale(70%);
    }
`;

export const GalleryColumn = styled.div`
    // display: grid;
    // row-gap: ${rowGutter};
    // grid-template-columns: minmax(0,1fr);
`;

export const SavedBoxContainer = styled.div`
    display:none;
    &:focus-within{
        display:block;
    }

    @media only screen and (max-width: 540px){
        display:block;
    }
`;

export const Gallery__item = styled.div`
    position:relative;
    border-radius:2rem;
    margin-bottom: 3.5rem;
    overflow:hidden;
    // border : ${props => props.selected ? '2px solid #000': 'none'};
    outline : ${props => props.selected ? '3px solid #000': 'none'};
    outline-offset : ${props => props.selected ? '5px': '0'};
    transition:all .2s;
    &:hover ${SavedBoxContainer}{
        display:block;
    }

    &:hover ${TitleContainer}{
        // display:block;
        display:flex;
        justify-content:space-evenly;
        align-items:center;
    }
`;

