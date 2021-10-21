import styled from "styled-components";
import Image from 'next/image';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    // align-items: flex-end;
    // width:30%;
    // height:15rem;
    // margin-right:3rem;
`;

export const SaveContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:30rem;
    height:15rem;
    // margin-right:3rem;

    // @media only screen and (max-width: 750px){
    //     width:60rem;
    //     height:30rem;
    // }
`;

export const SaveBoxContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:50%;
    height:100%;
`;


export const SaveImageBoxContainer = styled.div`
    width:100%;
    height:50%;
    position:relative;
    border-top-right-radius: ${props => props.id === 1 ? "2rem" : "0"};
    border-bottom-right-radius: ${props => props.id === 2 ? "2rem" : "0"};
    // border-radius:2rem;
    border:1px solid #fff;
    overflow:hidden;
`;

export const SaveImageContainer = styled.div`
    width:100%;
    height:100%;
    position:relative;
    border-top-left-radius:2rem;
    border-bottom-left-radius:2rem;
    // border-radius:2rem;
    border:1px solid #fff;
    overflow:hidden;
`;

export const SaveImage = styled(Image)`
    width:100%;
    height:100%;
`;

// export const Title =  styled.h1`
//     // margin-top:16rem;
//     text-align:center;
//     font-family: ir_sans;
//     background-image:${props => props.showBox === 2 ? 'radial-gradient(ellipse at top ,rgba(252,141,109,.8),rgba(191,79,123,.8),rgba(36,45,100,.8) 80%,rgba(25,30,62,.8) 100%)': '#1d1d1d'};
//     -webkit-background-clip: text;
//     color: transparent;
// `;