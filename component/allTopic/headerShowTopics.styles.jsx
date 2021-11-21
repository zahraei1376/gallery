import styled from "styled-components";
import Image from 'next/image';

export const Container = styled.div`
    width:100%;
    height:50rem;
    position:relative;
    z-index: 1;
`;
export const HeaderContainer = styled.div`
    position:relative;
    width:100%;
    height:100%;
    background: linear-gradient(rgba(0,0,0,.4), #fff 20%);
`;


export const HeaderImage = styled(Image)`
    width:100%;
    height:100%;
`;

export const TitleContainer = styled.div`
width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const AllTopicTitleContainer = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:flex-end;
    padding:0 1rem 2rem 0 ;
    position:relative;
    margin-bottom:10rem;
    border-radius:1rem;
    position:absolute;
    top:45%;
    left:50%;
    transform: translate(-50%,-50%);
`;

export const AllTopicTitle = styled.h1`
    font-size:4rem;
    font-family:classic;
    margin:2rem 0;
    display:flex;
    z-index:1;
`;


export const AllTopicSubTitle = styled.h5`
    font-size:3.5rem;
    font-family:classic;
    display: inline-block;
    color: #777;
    transition:all .3s;
    text-align:center;
    z-index:1;
    margin:0;

    &:hover {
        transform: skewY(2deg) skewX(15deg) scale(1.1);
        text-shadow: .5rem 1rem 2rem rgba(0,0,0, .2);
    }
`;