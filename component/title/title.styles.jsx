
import styled from "styled-components";

export const LeftTitle = styled.div`
    z-index:0;
    width: 6rem;
    height: 7rem;
    position:absolute;
    // // top:12rem;
    // left:2rem;
    top:1.5rem;
    left:-4rem;
    clip-path: polygon(100% 0%, 100% 51%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
    // background-image: linear-gradient(to right ,rgba(218,160,103 ,0.7) 10%,#bf4f7b 50%,#191e3e 50%);
    // background-image: linear-gradient(to right ,rgba(252, 141, 109, 0.7),rgba(191, 79, 123, 0.7),rgba(36, 45, 100, 0.7) 80%,rgba(25, 30, 62, 0.7) 100%);
    box-shadow: 0 11px 13px -12px rgba(0,0,0,1);
    background-color:rgba(22,40,88 ,1);
`;

export const RightTitle = styled.div`
    z-index:0;
    width: 6rem;
    height: 7rem;
    position:absolute;
    // top:12rem;
    // right:2rem;
    top:1.5rem;
    right:-4rem;
    clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
    background-color:rgba(22,40,88 ,1);
    // background-image: linear-gradient(to left ,rgba(218,160,103 ,0.7) 10%,#bf4f7b 50%,#191e3e 50%);
    // background-image: linear-gradient(to left ,rgba(252, 141, 109, 0.7),rgba(191, 79, 123, 0.7),rgba(36, 45, 100, 0.7) 80%,rgba(25, 30, 62, 0.7) 100%);
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
    font-size:3rem;
    font-family:ir_sans_bold;
    padding:1rem 3rem;
    box-shadow: 0 11px 13px -12px rgba(0,0,0,1);
    border-style: outset;
    color:#fff;
    background-color:rgba(22,40,88 ,1);
    // background-image: radial-gradient(ellipse at top ,rgba(218,160,103 ,0.7) 10%,#bf4f7b 50%,#191e3e 50%);
    // background-image: radial-gradient(ellipse at top ,rgba(252, 141, 109, 0.7),rgba(191, 79, 123, 0.7),rgba(36, 45, 100, 0.7) 80%,rgba(25, 30, 62, 0.7) 100%);
`;