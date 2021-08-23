import styled from 'styled-components';
import { Paper, Button } from '@material-ui/core';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';

export const ButtonStyleContainer = styled.div`
    text-align:center;
    background-color:rgb(218,160,103);
    padding:2rem 0;
`;

export const ButtonStyle = styled(Button)`
    width:10rem;
    height:3rem;
    border-radius:5rem;
    background-color:#eee !important;
    // margin:0 auto;
    margin-top:1rem !important;
    font-size:1.5rem !important;
   font-family:Bnazanin !important;
   cursor:pointer !important;
   z-index:1000 !important;
`;

export const PaperStyle = styled(Paper)`
    width:100%;
    height:85vh;
    object-fit:cover;
    mix-blend-mode: multiply;
`;

export const CarouselContainer = styled(Carousel)`
    z-index:-1000;
`;

export const ImageCarousel =styled(Image)`
    width:100%;
    height:85vh;
    // object-fit:cover;
    // position:relative;
`;

export const TitleConatiner = styled.div`
    width:50%;
    position:absolute;
    top:40%;
    right:0;
    // left:50%;
    transform:translate(0,-50%);
    // transform:translate(-50%,-50%);
`;

export const TitleCarousel =styled.h1`
   text-align:center;
   font-size:2.5rem;
   font-family:Bnazanin;
   margin-top:2rem;
   background-color:rgb(218,160,103);
   color:#CCCCFF;
   padding:1rem 2rem;
   display:inline;
`;

export const DiscCarousel =styled.p`
   text-align:center;
   font-size:1.5rem;
   font-family:Bnazanin;
//    margin-top:3rem;
   padding:1rem 2rem;
   line-height:3rem;
//    display:inline;
   text-align:right;
   background-color:rgb(218,160,103);
   color:#CCCCFF;
`;