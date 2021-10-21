import styled from "styled-components";
import Image from 'next/image';

export const Container = styled.div`
    position:relative;
    width:31rem;
    // width:100%;
    // margin-right:3rem;
    display:flex;
    // flex-direction:column;
    justify-content:center;
    align-items:center;
    cursor:pointer;
`;

export const UploadBoxContainer = styled.div`
    position:absolute;
    top:0;
    // top:2rem;
    left:${props => props.id ? `${(props.id) * 4}rem` : '0'};
    transition:all 0.4s cubic-bezier(1, 0, 0, 1) 0.2s;

    &:hover:not(:last-of-type) {
        top:-1rem;
        left:${props => props.id  ? `${(props.id - 2)}rem` : '-4rem'};
        // z-index:1;
    }
`;

export const UploadImageContainer = styled.div`
    width:15rem;
    height:15rem;
    position:relative;
    border-radius:2rem;
    border:1px solid #fff;
    overflow:hidden;
    // @media only screen and (max-width: 750px){
    //     width:30rem;
    //     height:30rem;
    // }
`;

export const UploadImage = styled(Image)`
    width:100%;
    height:100%;
`;

// export const Title =  styled.h1`
//     margin-top:16rem;
//     text-align:center;
//     font-family: ir_sans;
//     background-image:${props => props.showBox === 1 ? 'radial-gradient(ellipse at top ,rgba(252,141,109,.8),rgba(191,79,123,.8),rgba(36,45,100,.8) 80%,rgba(25,30,62,.8) 100%)': '#1d1d1d'};
//     -webkit-background-clip: text;
//     color: transparent;
// `;