import styled from "styled-components";
import Image from 'next/image';

export const Container = styled.div`
    width:100%;
    height:40rem;
    position:relative;
    z-index: 1;
`;
export const HeaderContainer = styled.div`
    position:relative;
    width:100%;
    height:100%;
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
    // flex-direction:column;
    justify-content:space-evenly;
    align-items:flex-end;
    // background-color:#fff;
    padding:0 1rem 2rem 0 ;
    position:relative;
    margin-bottom:10rem;
    border-radius:1rem;
    position:absolute;
    top:45%;
    left:50%;
    transform: translate(-50%,-50%);

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
    font-family: Abdoullah;
    margin:2rem 0;
    color:#fff;
    display:flex;
    z-index:1;
`;


export const AllTopicSubTitle = styled.h5`
    font-size:3rem;
    font-family: Abdoullah;
    // margin:2rem 0;
    display: inline-block;
    // background-image:radial-gradient(ellipse at top ,#fc8d6d,#bf4f7b,#242d64 80%,#191e3e 100%);
    // background-image: linear-gradient(to right ,#fc8d6d,#bf4f7b,#242d64 80%,#191e3e 100%);
    // background-image: linear-gradient(to right, $color-primary-light, $color-primary-dark);
    // -webkit-background-clip: text;
    color: #fff;
    transition:all .3s;
    text-align:center;
    // padding-right:3rem;
    z-index:1;

    &:hover {
        transform: skewY(2deg) skewX(15deg) scale(1.1);
        text-shadow: .5rem 1rem 2rem rgba(0,0,0, .2);
    }
`;


export const ButtonContainer = styled.div`
  z-index:2;
//   height:100%;
//   width:100%;
  display:flex;
//   justify-content:flex-end;
  justify-content:center;
  align-items:center;
//   margin-top:8rem;
`;

export const Button = styled.button`
    color:#fff;
    border-radius:1rem;
    cursor:pointer;
    font-family: Abdoullah;
    border:none;
    display: inline-block;
    font-size: 3rem;
    font-weight: 300;
    padding: 2rem 4rem;
    background-image:${props => props.color ? `linear-gradient(-120deg, ${props.color} 0%, ${props.color} 50%, #fff 50%)` : "linear-gradient(-120deg, #191e3e 0%,transparent 50%, #191e3e 50%)"};
    background-size: 225%;
    transition: all .4s;
    // border:1px solid transparen;
  // linear-gradient(to bottom ,rgb(218,160,103),#bf4f7b);

  &:hover{
      background-position: 100%;
      color: #1d1d1d;
      transform: translateX(-1rem);
    //   border:1px solid #191e3e;
  }
`;