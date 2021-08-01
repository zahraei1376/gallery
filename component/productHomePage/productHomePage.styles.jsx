import styled ,{keyframes} from 'styled-components';
import Image from 'next/image';

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

export const ImageSContainer = styled.div`
width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const ImageBox = styled.div`
  width:34%;
  height:20rem;
  margin-left:3rem;
`;

export const ImageProductSection = styled(Image)`
//   width:20%;
//   height:20rem;
//   margin-left:3rem;
`;

export const ProductContainer = styled.div`
    width:100%;
    min-height:120rem;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-item:center;
    position:relative;
    // margin:15rem 0;

    &::before{
        content: "";
        position: absolute;
        display: block;
        top: -44px;
        bottom: -206px;
        left: 0;
        width: calc(50vw + 72px);
        background: #eee;
        z-index: 0;
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
    background-image: linear-gradient(to bottom ,rgb(218,160,103),#bf4f7b);
    -webkit-background-clip: text;
    color: transparent;
    font-size:2rem;
`;

export const TextSpan = styled.span`
    // font-size:3rem;
    width:6rem;
    height:3px;
    display: inline-block;
    margin:0 1rem;
    background-image:linear-gradient(to bottom ,rgb(218,160,103),#bf4f7b);
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
