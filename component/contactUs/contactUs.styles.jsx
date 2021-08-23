import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    padding:0 0 10rem;

`;

export const ButtonContainer = styled.div`
  z-index:2;
  height:100%;
  width:100%;
  display:flex;
//   justify-content:flex-end;
  justify-content:center;
  align-items:center;
  margin-top:8rem;
`;

export const Button = styled.button`
  // width:6rem;
  // height:4rem;
  padding: 1.5rem 3rem;
  border-radius:5px;
  border:1px solid #fff;
  color:#fff;
  // background-color:rgb(218,160,103);
  background-image: linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgb(218,160,103) 50%);
  background-size: 200%;
  transition:all .2s;
  font-size:2.3rem;
  font-size:Bnazanin;
  text-align:center;
  &:hover{
    background-position: 100%;
    // border:1px solid rgb(218,160,103);
    // color:#fff;
    // transform:scale(1.05);
  }
`;

export const ContactContainer = styled.div`
    width:90%;
    height:60rem;
    margin: 0 auto;
    position:relative;

    &::before{
        content: "";
        position: absolute;
        display: block;
        top: -30px;
        left: 7px;
        // width: 70rem;
        width: 50%;
        bottom: -79px;
        // background-color: #fec303;
        // background-color: #bf4f7b;
        background-color:#9dc6da;
        z-index: -1;

        @media only screen and (max-width: 1200px){
            // left: auto;
            width: 50%;
            // width: 43%;
            height: 580px;
            // right: 372px;
        }

        @media only screen and (max-width: 1125px){
            height: 680px;
        }
    
        @media only screen and (max-width: 950px){
            height: 700px;
            top: 0;
        }

        @media only screen and (max-width: 920px){
            width: 50%;
        }
    }

   
`;

export const Title = styled.h4`
    font-size:5rem;
    padding:2rem 0 3rem 2rem;
    font-family:Bnazanin;
    z-index:1;
    border-bottom:1px solid #fff;
    // float:right;
`;

export const Content = styled.div`
    // position:absolute;
    // top:50%;
    // left:50%;
    // transform:translate(-50%,-50%);
    // text-align:center;
    // padding: 28px 0 0 278px;
    text-align:right;
    // width:30%;
    width: 50%;
    margin:0 auto;
    // @media only screen and (max-width: 1203px){
    //     width:40%;
    // }
`;

export const ContentTitle = styled.h1`
    font-size:6rem;
    // padding:2rem 0 3rem 2rem;
    font-family:Bnazanin;
    z-index:1;
    border-bottom:1px solid #fff;
`;

export const ContenDescription = styled.p`
    font-size:2rem;
    // padding:2rem 0 3rem 2rem;
    font-family:Bnazanin;
    z-index:1;
    text-align:right;
    line-height:4rem;
`;