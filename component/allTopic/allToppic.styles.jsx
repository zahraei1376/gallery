import styled from "styled-components";

export const AllTopicContainer = styled.div`
    width:100%;
    min-height:100vh;
    background-color:#eee;
    padding:10rem;
`;

export const AllTopicTitleContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const AllTopicTitle = styled.h1`
    font-size:3.5rem;
    font-family:Bnazanin;
    margin:2rem 0;
    color:#1d1d1d;
`;

export const AllTopicSubTitle = styled.h5`
    font-size:3rem;
    font-family:Bnazanin;
    margin:2rem 0;
    display: inline-block;
    background-image:radial-gradient(ellipse at top ,#fc8d6d,#bf4f7b,#242d64 80%,#191e3e 100%);
    // background-image: linear-gradient(to right ,#fc8d6d,#bf4f7b,#242d64 80%,#191e3e 100%);
    // background-image: linear-gradient(to right, $color-primary-light, $color-primary-dark);
    -webkit-background-clip: text;
    color: transparent;
    transition:all .3s;

    &:hover {
        transform: skewY(2deg) skewX(15deg) scale(1.1);
        text-shadow: .5rem 1rem 2rem rgba(0,0,0, .2);
    }
`;

export const AllTopicContent = styled.div`
    display:grid;
    grid-template-columns:repeat(3 , minmax(0,1fr));
    grid-gap: 5rem;
    margin-top:7rem;

    @media only screen and (max-width: 768px){
        grid-template-columns:repeat(2 , minmax(0,1fr));
    }

    @media only screen and (max-width: 411px){
        grid-template-columns:repeat(1 , minmax(0,1fr));
    }
`;