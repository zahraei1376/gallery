import styled from "styled-components";
import Image from 'next/image';
import headerFood from '../../../assets/img/food.jpg';

export const HeaderContainer = styled.div`
    width:100%;
    background-color: #1d1d1d;
    height:100vh;
    // clip-path: polygon(0 0, 100% 0, 100% 87%, 0% 100%);
    @media only screen and (max-width: 1097px){
        height:93vh;
    }

    @media only screen and (max-width: 1018px){
        height:86vh;
    }

    @media only screen and (max-width: 932px){
        height:79.5vh;
    }

    @media only screen and (max-width: 854px){
        height:73vh;
    }

    @media only screen and (max-width: 774px){
        height:66vh;
    }

    @media only screen and (max-width: 696px){
        height:60vh;
    }

    @media only screen and (max-width: 596px){
        height:50vh;
    }

    @media only screen and (max-width: 411px){
        height:45vh;
    }

    @media only screen and (max-width: 320px){
        height:55vh;
    }

    // @media only screen and (max-width: 578px){
    //     height:50vh;
    // }

`;

export const HeadercontextContainer = styled.div`
    width:100%;
    position:absolute;
    // top:3rem;
    top:0;
    display:flex;
    justify-content:space-evanly;
    // @media only screen and (max-width: 967px){
    //     flex-direction:column;
    // }
`;

export const TitleHeaderContainer = styled.div`
    width:50%;
    
    padding:7rem 2rem 1rem 2rem;
    // @media only screen and (max-width: 967px){
    //     width:100%;
    // }
    // position:absolute;
    // top:3rem;
`;

export const TitleHeader = styled.h1`
    color:#fff;
    text-align:right;
    font-size:5rem;

    @media only screen and (max-width: 696px){
        font-size:3rem;
    }
`;

export const SubTitleHeader = styled.p`
    color:#fff;
    text-align:right;
    line-height:4rem;
    font-size:2rem;
    // white-space: nowrap;

    @media only screen and (max-width: 774px){
        font-size:1.8rem;
        line-height:3rem;
    }

    // @media only screen and (max-width: 657px){
    //     font-size:1.8rem;
    //     line-height:3rem;
    // }

    @media only screen and (max-width: 596px){
        font-size:2rem;
        line-height:5rem;
    }
`;

export const HeaderImageContainer = styled.div`
    width:50%;
    height:90%;
    padding:0 2rem;
    margin-top:6rem;
    // background-image:  url('${headerFood}');
	// background-size: 50%;
	// background-repeat: no-repeat;
	// background-position: 100%;
	// background: linear-gradient(to bottom ,rgb(218,160,103),#bf4f7b,#191e3e);
    // background-image: url(${headerFood});
    // background-image: url(${headerFood}), linear-gradient(to bottom ,rgb(218,160,103),#bf4f7b,#191e3e);
`;

export const HeaderImage = styled(Image)`
    width:100%;
    height: 3rem !important;
    // height:100% !important;

    // &:hover{
    //     background-image: linear-gradient(to bottom ,rgb(218,160,103),#bf4f7b,#191e3e);
    // }
`;

// export const HeaderImage = styled.img`
//     width:80%;
//     height: 33rem;
//     height:100% !important;
// `;

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
    font-size:2rem;
    width:7rem;
    height:5px;
    display: inline-block;
    margin:0 1rem;
    background-image:linear-gradient(to bottom ,rgb(218,160,103),#bf4f7b);
`;