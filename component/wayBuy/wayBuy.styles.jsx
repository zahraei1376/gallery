import styled from 'styled-components';
import Image from 'next/image';


export const TitleContainer = styled.div`
    // margin:0 0 10rem 0;
    margin:10rem 0;
`;

export const Title = styled.h1`
    text-align:center;
    font-family:Bnazanin;
    font-size:4rem;
    margin-bottom:4rem;
    transition:all .3s;
    // font-size: 72px;
    background: -webkit-linear-gradient(#eee, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    &:hover{
        transform:scale(1.1) skewY(5deg);
    }
`;


export const Container = styled.div`
    width:80%;
    padding:3rem 7rem;
    // height:95vh;
    // clip-path: polygon(0 0, 100% 0%, 100% 80%, 0% 100%);
    // background-color:rgba(0,0,0,.5);
    // display: flex;
    // justify-content: space-evenly;
    // align-items: center;
    margin-bottom:5rem;
    position:relative;
    margin:10rem auto;
`;

export const ImgContainer = styled.div`
    width:70%;
    height:70%;
    display: flex;
    justify-content: center;
    align-items: center;
    position:absolute;
    top:30rem;
    right:0;
    z-index:-1;
    margin-right:6rem;
    overflow:hidden;
    @media only screen and (max-width: 540px){
        width:70%;
        top:42rem;
        right:10rem;
    }
`;

export const MyImage = styled(Image)`

`;

// export const Image = styled.img`
//         width:90%;
// `;

export const ParagContainer = styled.div`
    width:60%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    // padding:10rem;
    outline: 1.5rem solid #9dc6da;
    outline-offset: 3rem;
    z-index:3;

    @media only screen and (max-width: 540px){
        width:90%;
    }
`;

export const Parags = styled.p`
        font-size:2rem;
        font-family:Bnazanin;
        color:#000;
        text-align:right;
        line-height:3.8rem;
`;