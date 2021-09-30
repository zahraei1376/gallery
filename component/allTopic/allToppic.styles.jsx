import styled from "styled-components";

export const AllTopicContainer = styled.div`
    // width:100%;
    min-height:100vh;
    background-color:#fff;
    // margin-top:-10rem;
    margin:-10rem 5rem 2rem 5rem;
    // padding:5rem 10rem 2rem 10rem;
    padding:10rem 5rem;
    position:relative;
    z-index:1;
`;

export const TitleContainer = styled.div`
width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-end;
`;

export const AllTopicTitleContainer = styled.div`
    display:flex;
    // flex-direction:column;
    justify-content:space-evenly;
    align-items:flex-end;
    background-color:#fff;
    padding:0 1rem 2rem 0 ;
    position:relative;
    margin-bottom:10rem;
    border-radius:1rem;

    // &::before{
    //     content: "";
    //     position: absolute;
    //     display: block;
    //     top: 0;
    //     right: 0;
    //     width: 100%;
    //     height:100%;
    //     z-index: 0;
    //     clip-path: polygon(0 0, 0% 100%, 100% 100%);
    //     background-image: radial-gradient(ellipse at top ,#fc8d6d,#bf4f7b,#242d64 80%,#191e3e 100%);
    //     border-radius:1rem;
    // }
`;

export const AllTopicTitle = styled.h1`
    font-size:3.5rem;
    font-family:Bnazanin;
    margin:2rem 0;
    color:#1d1d1d;
    display:flex;
    z-index:1;
`;

export const AllTopicSubTitle = styled.h5`
    font-size:3rem;
    font-family:Bnazanin;
    // margin:2rem 0;
    display: inline-block;
    // background-image:radial-gradient(ellipse at top ,#fc8d6d,#bf4f7b,#242d64 80%,#191e3e 100%);
    // background-image: linear-gradient(to right ,#fc8d6d,#bf4f7b,#242d64 80%,#191e3e 100%);
    // background-image: linear-gradient(to right, $color-primary-light, $color-primary-dark);
    // -webkit-background-clip: text;
    // color: transparent;
    transition:all .3s;
    padding-right:3rem;
    z-index:1;

    &:hover {
        transform: skewY(2deg) skewX(15deg) scale(1.1);
        text-shadow: .5rem 1rem 2rem rgba(0,0,0, .2);
    }
`;

export const AllTopicContent = styled.div`
    display:grid;
    grid-template-columns:repeat(3 , minmax(0,1fr));
    grid-gap: 5rem;
    margin-bottom:7rem;
    // padding:10rem;

    @media only screen and (max-width: 950px){
        grid-template-columns:repeat(2 , minmax(0,1fr));
        grid-gap: 8rem;
    }

    // @media only screen and (max-width: 768px){
    //     grid-template-columns:repeat(2 , minmax(0,1fr));
    //     grid-gap: 8rem;
    // }



    @media only screen and (max-width: 411px){
        grid-template-columns:repeat(1 , minmax(0,1fr));
    }
`;