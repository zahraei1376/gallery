import styled ,{css , keyframes} from "styled-components";
import Image from 'next/image';

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

export const GalleryTitle = styled.h5`
    font-size:2rem;
    font-family:Bnazanin;
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
    position:relative;
    min-height:100vh;
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
    grid-gap: 1.5rem;
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

    @media only screen and (max-width: 540px){
        display:block;
        position:relative;
        background-color:transparent;
    }
`;

export const Title = styled.h1`
    font-size:1.5rem;
    font-family:Bnazanin;
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

const ImageContainer = css`
    position:relative;
    cursor: -webkit-zoom-in;
    cursor: zoom-in;
    border-radius:2rem;
    overflow:hidden;
    // grid-column: auto;
    grid-row: auto;
`;

export const ImageWrapper = styled.div`
    width: 100%;
    align-items: start;
    // position:relative;
    cursor: -webkit-zoom-in;
    cursor: zoom-in;
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
    // display:${props => props.location.x ? 'block' :'none'};
    &:focus-within{
        display:block;
    }

    @media only screen and (max-width: 540px){
        display:block;
    }
    // width:100%;
    // padding:2rem;
    // display:none;
    // position:absolute;
    // top:0;
    // left:0;
`;

export const Gallery__item = styled.div`
    position:relative;
    border-radius:2rem;
    margin-bottom:1.5rem;
    overflow:hidden;
    &:hover ${SavedBoxContainer}{
        display:block;
    }

    &:hover ${TitleContainer}{
        display:block;
    }
`;

export const Gallery__item_1 = styled.div`
    ${ImageContainer}
    // grid-row: 1 / span 2;
    grid-column: 1 / span 2;
`;

export const Gallery__item_2 = styled.div`
    ${ImageContainer}
    // grid-row: 1 / span 3;
    grid-column: 3 / span 3;
    // @media only screen and (max-width: 868px){
    //     grid-column: 3 / span 2;
    // }
`;

export const Gallery__item_3 = styled.div`
    ${ImageContainer}
    // grid-row: 1 / span 2;
    grid-column: 6 / 7;
    // @media only screen and (max-width: 868px){
    //     grid-column: 1 / span 2;
    // }
`;

export const Gallery__item_4 = styled.div`
    ${ImageContainer}
    // grid-row: 1 / span 2;
    grid-column: 7 / -1;
`;

export const Gallery__item_5 = styled.div`
    ${ImageContainer}
    // grid-row: 3 / span 3;
    grid-column: 1 / span 2;
`;

export const Gallery__item_6 = styled.div`
    ${ImageContainer}
    // // grid-row: 4 / span 2;
    grid-column: 3 / span 2;
`;

export const Gallery__item_7 = styled.div`
    ${ImageContainer}
    // // grid-row: 4 / 5;
    grid-column: 5 / 6;
`;

export const Gallery__item_8 = styled.div`
    ${ImageContainer}
    // grid-row: 3 / span 2;
    grid-column: 6 / span 2;
`;

export const Gallery__item_9 = styled.div`
    ${ImageContainer}
    // grid-row: 3 / span 3;
    grid-column: 8 / -1;
`;

export const Gallery__item_10 = styled.div`
    ${ImageContainer}
    // grid-row: 6 / span 2;
    grid-column: 1 / 2;
`;

export const Gallery__item_11 = styled.div`
    ${ImageContainer}
    // grid-row: 6 / span 2;
    grid-column: 2 / span 2;
`;

export const Gallery__item_12 = styled.div`
    ${ImageContainer}
    // grid-row: 6 / span 2;
    // grid-column: 4 / 5;
`;

export const Gallery__item_13 = styled.div`
    ${ImageContainer}
    // grid-row: 5 / span 3;
    grid-column: 5 / span 3;
`;

export const Gallery__item_14 = styled.div`
    ${ImageContainer}
    // grid-row: 6 / span 2;
    // grid-column: 8 / -1;
`;