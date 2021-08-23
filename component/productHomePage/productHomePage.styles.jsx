import styled ,{keyframes} from 'styled-components';
import Image from 'next/image';
// import back from  '../../assets/img/dog2.jpg';

const fade = keyframes`
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }

//   50%{
//     transform: translateX(4rem);
//   }

//   80%{
//     transform: translateX(1rem);
//   }

  100%{
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeButtom = keyframes`
  0% {
    opacity: 0;
    // height:0;
    transform: translateY(10rem);
  }

  100%{
    opacity: 1;
    // height:100%;
    transform: translateY(0);
  }
`;

export const TitleImage = styled.h1`
    color:#777;
    font-family:Bnazanin;
    font-size: 2rem;
`;

export const SubTitleImage = styled.p`
    color:#999;
    font-family:Bnazanin;
    font-size: 1.5rem;
`;

export const ProductButton = styled.button`
  color:#000;
  border-radius:1rem;
  cursor:pointer;
  font-family:Bnazanin;
  border:none;
  display: inline-block;
  font-size: 2rem;
  font-weight: 300;
  padding: 2rem;
  background-image:${props => props.color ? `linear-gradient(-120deg, ${props.color} 0%, ${props.color} 50%, #fff 50%)` : "linear-gradient(-120deg, #9dc6da 0%, #9dc6da 50%, #eee 50%)"};
  background-size: 200%;
   transition: all .4s;
    // linear-gradient(to bottom ,rgb(218,160,103),#bf4f7b);

    &:hover{
        background-position: 100%;
        color: #fff;
        transform: translateX(-1rem);
    }

`;

export const ImageContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:34%;
    margin-left:3rem;
`;

export const ImageSContainer = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const ProductLinkContainer = styled.div`
    position:absolute;
    bottom: 0;
    right: 0 ;
    width:0;
    height :0;
    // display:block;
    // background-color:transparent;
    background-color:rgba(157, 198, 218, 0.8);
    color:#fff;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-end;
    transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s , background-color 0.1s;
    // opacity:.5;
`;

export const ProductLink = styled.span`
    // width:100%;
    font-size:3rem;
    text-align:center;
    font-family:Bnazanin;
    color:#fff;
    display:none;
    padding:2rem 0;
    cursor:pointer;
    animation: ${fadeButtom} 1s alternate;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    // animation-delay: 1s;
`;

export const ImageBox = styled.div`
  width:100%;
  overflow:hidden;
  border-radius:1rem;
  position:relative;
  &:hover ${ProductLinkContainer}{  
    left:0;
    width:100%;
    height : 100%;
    // background-color:rgba(157, 198, 218, 0.8);
  }

  &:hover ${ProductLink}{
    display:block;
    // transform: translateY(0);
  }
`;





// export const ImageProductSection = styled.div`
// //   width:20%;
// //   height:20rem;
// //   margin-left:3rem;
// background-color: #6DB3F2;
// background-image: url(${back});
// transition:all .3s;
//     border-radius:1rem;
//     position:relative;
//     &:hover{
//         transform:scale(1.1);
//     }
//     &:hover ${ProductLink} {
//         display:flex;
       
//     }

//     // &::before{
//     //     content: "";
//     //     position: absolute;
//     //     display: block;
//     //     right: 100%;
//     //     background: #000;
//     //     z-index: 0;
//     // }

//     &::after {
//         position: absolute;
//         content: " ";
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         // z-index: 0;
//         background-color: linear-gradient(to bottom ,rgb(218,160,103),#bf4f7b,#191e3e);
//       }
// `;

export const ImageProductSection = styled(Image)`
    width:100% !important;
    // height:100%;
    transition:all .3s;
    border-radius:1rem;
    // position:relative;
    &:hover{
        transform:scale(1.1);
    }
`;

export const ProductContainer = styled.div`
    width:100%;
    min-height:70rem;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-item:center;
    position:relative;
    margin:10rem 0 0 0;
    padding:10rem 0;
    box-sizing:border-box;
    // @media only screen and (max-width: 540px){
    //     min-height:40rem;
    // }

    &::before{
        content: "";
        position: absolute;
        padding:10rem 0;
        display: block;
        top: -10rem;
        // bottom: -206px;
        bottom: 0;
        right: 0;
        width: calc(50vw + 72px);
        // height: 100%;
        background: #eee;
        z-index: 0;
        box-sizing:border-box;
        // height:100%;
        // border-top-left-radius:1rem;
        // border-bottom-left-radius:1rem;
    }
`;

export const ProductContainerRight = styled.div`
    position:absolute;
    top:5rem;
    right:0;
    text-align:right;
    padding:3rem 3rem 3rem 0;

    @media only screen and (max-width: 768px){
        // text-align:center;
        padding:3rem 0;
        left:50%;
        transform:translate(-50%,0);
    }
`;

export const ProductContainerLeft = styled.div`
    width:60%;
    position:absolute;
    top:5rem;
    display:flex;
    justify-content:center;
    align-items:center;
    @media only screen and (max-width: 768px){
        display:none;
    }
`;

export const TextContainer = styled.div`
    // width:80%;
    // float:right;
    display:flex;
    justify-content:flex-end;
    align-items:center;
`;

export const Text = styled.h5`
    color: rgb(218,160,103);
    // -webkit-background-clip: text;
    // color: transparent;
    font-size:2rem;
`;

export const TextSpan = styled.span`
    // font-size:3rem;
    width:6rem;
    height:3px;
    display: inline-block;
    margin:0 1rem;
    background-color: rgb(218,160,103);
    // background-image:linear-gradient(to bottom ,rgb(218,160,103),#bf4f7b);
`;

export const SubDescriprion = styled.p`
    color:#999;
    text-align:right;
    line-height:4rem;
    font-size:2rem;
    // white-space: nowrap;
    width:60rem;
    line-height:5rem;
    padding-right:3rem;

    @media only screen and (max-width: 1260px){
        width:50rem;
    }

    @media only screen and (max-width: 1001px){
        width:40rem;
    }

    @media only screen and (max-width: 768px){
        line-height:6rem;
        width:60rem;
    }
`;

export const ProductContainerTitle = styled.h1`
    font-size:3rem;
    font-family:Bnazanin;
    text-align:right;
    margin-bottom:3rem;
    transition:all .3s;

    &:hover{
        transform:scale(1.1);
    }
`;

export const ProductBoxes = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-item:center;
    text-align:center;
`;

export const SpanVisible = styled.span`
    transform: translateY(0);
    color:#fff;
    // font-size:2rem;
`;

export const SpanInvisible = styled.span`
    display: inline-block;
    padding: 0;
    position: absolute;
    left: .5rem;
    top: -120%;
    // top: -125%;
    transition: top .2s;
    color:#fff;
    font-size:4rem;
`;


export const Btn = styled.button`
    padding:1rem 4rem;
    font-size: 1.5rem;
    font-weight: 300;
    border: none;
    border-radius: 5px;
    // background-image: linear-gradient(to left,#843910, rgba(132, 57, 16, .7) );
    background-image: linear-gradient(to right, rgb(218,160,103),#843910 );
    color: #fff;
    position: relative;
    overflow: hidden;
    transition: all .3s;
    text-align:center;

    & > *{
        display: inline-block;
        transition: transform .2s;
        width: 100%;
        height: 100%;
    }


    &:hover ${SpanVisible}{
        // transform: translateY(100%);
        transform: translateY(125%);
    }

    &:hover ${SpanInvisible}{
        // top: 0;
        top: -1rem;
        // top: -.5rem;
    }

    &:active,
    &:focus{
        outline:none;
    }
    `;

export const ProductBox = styled.div`
    width:30%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-item:center;
    text-align:center;
    position:relative;
    border:1px solid #e2cdb2;
    padding:2rem;
    box-sizing:border-box;
`;



export const ProductImageTextContainer = styled.div`
    transition: all .2s;
    opacity: 0;
    position: absolute;
    top: 8%;
    right: 0;
    transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    text-align: center;
`;

export const ProductImage = styled.img`
    width:100%;
    transition: all .2s;
    border-radius:5px;
    backface-visibility: hidden;

    &:hover{
        filter:blur(6px);
    }

    &:hover + ${ProductImageTextContainer}{
        animation: ${fade} 1s alternate;
        animation-iteration-count: 1;
        animation-fill-mode:forwards;
    }
`;

// export const ProductImageTextContainer = styled.div`
//     transition: .5s ease;
//     opacity: 0;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     -ms-transform: translate(-50%, -50%);
//     text-align: center;
// `;

export const ProductImageText = styled.pre`
    width:100%;
    color:#000;
    font-size:2rem;
    white-space: pre;
    font-family:Bnazanin;
    font-weight:bold;
    background-color:#fff;
    padding:1rem;
`;

export const ProductTitle = styled.h1`
    font-size:2rem;
    font-family:Bnazanin;
    margin:3rem 0;
    padding-bottom:2rem;
    border-bottom:1px solid #e2cdb2;
`;

export const ProductBtnContainer = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-item:center;
`;

export const ProductBtn = styled.button`
    width:13rem;
    height:4rem;
    font-size:2rem;
    font-family:Nastaliq;
    background-color:#843910;
    color:#fff;
    border:none;
    border-radius:1rem;
    margin:2rem auto;
    cursor:pointer;
`;
