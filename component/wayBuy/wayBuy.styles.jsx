import styled from 'styled-components';
import back from '../../asset/img/back1.jpg';

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
    height:95vh;
    clip-path: polygon(0 0, 100% 0%, 100% 80%, 0% 100%);
    // background-image:url(${back});
    // background-size: cover;
    // filter:blur(5px);
    background-color:rgba(0,0,0,.5);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const ImgContainer = styled.div`
    width:40%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
        width:90%;
`;

export const ParagContainer = styled.div`
    width:40%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Parags = styled.p`
        font-size:2rem;
        font-family:Bnazanin;
        color:#fff;
        text-align:right;
        line-height:3.8rem;
`;