
import styled from "styled-components";

export const LeftTitle = styled.div`
    z-index:0;
    width: 6rem;
    height: 7rem;
    position:absolute;
    // // top:12rem;
    // left:2rem;
    top:1rem;
    left:-4rem;
    clip-path: polygon(100% 0%, 100% 51%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
    background-image: linear-gradient(to right ,#fc8d6d,#bf4f7b,#242d64 80%,#191e3e 100%);
    box-shadow: 0 11px 13px -12px rgba(0,0,0,1);
`;

export const RightTitle = styled.div`
    z-index:0;
    width: 6rem;
    height: 7rem;
    position:absolute;
    // top:12rem;
    // right:2rem;
    top:1rem;
    right:-4rem;
    clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
    background-image: linear-gradient(to left ,#fc8d6d,#bf4f7b,#242d64 80%,#191e3e 100%);
    box-shadow: 0 11px 13px -12px rgba(0,0,0,1);
`;
export const TitleWrapper = styled.div`
    min-width:43rem;
    position:relative;
    margin-top:9rem;
    text-align:center;
`;

export const Title = styled.h1`
    // margin-bottom: 3rem;
    position: relative;
    z-index:1;
    font-size:3.5rem;
    font-family:ir_sans;
    padding:1rem 3rem;
    box-shadow: 0 11px 13px -12px rgba(0,0,0,1);
    border-style: outset;
    color:#fff;
    background-image: radial-gradient(ellipse at top ,#fc8d6d,#bf4f7b,#242d64 80%,#191e3e 100%);
`;