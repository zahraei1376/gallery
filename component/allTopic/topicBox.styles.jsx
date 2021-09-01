import styled from "styled-components";
import Image from 'next/image';

export const TopicImageContainer = styled.div`
    position:relative;
    width:100%;
    height:13rem;
    filter: brightness(50%);
    transition: all .3s;
`;


export const TopicBoxContainer = styled.div`
    // border:1px solid #999;
    // border:1px solid rgba(0,0,0,.2);
    overflow:hidden;
    transition:all .3s;
    min-height:auto;
    transition: border-color,box-shadow .1s ease-in-out;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 4px 24px rgb(0 ,0 ,0 ,0.04);
    border: 1px solid #eee;

    &:hover{
        border:1px solid #999;
        // box-shadow: 0 0 3px 1px rgba(0,0,0,.4);
    }

    &:hover ${TopicImageContainer}{
        filter: brightness(100%);
    }
`;

export const TopicImage = styled(Image)`
    
`;

export const TopicPhotographerContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export const TopicPhotographerImageContainer = styled.div`
    position:relative;
    width:6rem;
    height:6rem;
    border-radius:50%;
    overflow:hidden;
    margin:1rem;
`;

export const TopicPhotographerImage = styled(Image)`
    
`;

export const TopicPhotographerName = styled.h6`
    font-size:1.5rem;
    font-family:Bnazanin;
    padding: 0 1rem ;
    margin:0;
    color:#888;
    
`;

export const TopicBoxSubTitle = styled.p`
    font-size:1.5rem;
    font-family:Bnazanin;
    text-align:right;
    line-height:4rem;
    padding:1rem;
    color:#777;
`;

export const PhotographerTitle = styled.h1`
    font-size:2.5rem;
    font-family:Bnazanin;
    padding:2rem 1rem;
    margin:0;
    // color:#888;
`;

export const PhotographerInfo = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;