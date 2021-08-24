import styled ,{css} from "styled-components";
import Image from 'next/image';

const SIZE = 3;
const rowGutter = '30px';

// export const CartDropDown = styled.div`
//     width:100%
// `;

export const GallerySecion = styled.div`
    width:100%;
    position:relative;
    min-height:100vh;
    background-color: #f9f7f6;
    // background-color: #1d1d1d;
    // grid-column: 1 / 7;
    display: grid;
    grid-template-columns: repeat(${SIZE},minmax(0,1fr));
    // grid-auto-rows: 1fr;
    // grid-template-columns: repeat(9, 1fr);
    // grid-auto-columns: 10rem;
    // grid-auto-rows: 100px;
    // align-items: start;
    // grid-template-columns: repeat(auto-fill, 100px);
    // grid-template-rows: repeat(5, 1fr);
    // grid-template-rows: repeat(7, 5vw);
    grid-gap: 1.5rem;
    padding: 2rem 4rem;

    // @media only screen and (max-width: 868px){
    //     grid-template-columns: repeat(5, 1fr);
    // }
`;

export const MyImage = styled(Image)`
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
`;

export const TitleContainer = styled.div`
    // height:20%;
    text-align:right;
    padding:1rem 5px;
`;

export const Title = styled.h1`
    font-size:1.5rem;
    font-family:Bnazanin;
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
    // width:100%;
    // padding:2rem;
    // display:none;
    // position:absolute;
    // top:0;
    // left:0;
`;

export const Gallery__item = styled.div`
    // position:relative;
    // cursor: -webkit-zoom-in;
    // cursor: zoom-in;
    position:relative;
    border-radius:2rem;
    margin-bottom:1.5rem;
    // align-items: start;
    // overflow:hidden;
    // grid-row-end: ${props => props.row ? `span ${props.row}` : "span 3"};
    // grid-column-end: ${props => props.column ? `span ${props.column}` : "span 1"};

    // grid-row-end: ${props => props.row ? `span ${props.row}` : "span 3"};
    // grid-column-end: ${props => props.column ? `span ${props.column}` : "span 3"};


    // grid-column:${props => props.index ? `${((props.index % SIZE) * SIZE) + 1} / span ${SIZE}` : "1 / 2"};
    // grid-column:${props => props.column ? `${((props.index % SIZE) * SIZE) + 1} / span ${props.column}` : "1 / 2"};
    // grid-row:${props => props.row ? `1 / span ${props.row}` : "1 / 2"};
    // grid-column:${props => props.type === "HorizontalRectangle" ? `1 / span ${column}` : props.type === "VerticalRectangle" ? " 1 / span 2" :"1 / 2"};
    // grid-row:${props => props.type === "HorizontalRectangle" ? " 1 / 3" : props.type === "VerticalRectangle" ? "1 / span 3" :"1 / 2"}; 

    &:hover ${SavedBoxContainer}{
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