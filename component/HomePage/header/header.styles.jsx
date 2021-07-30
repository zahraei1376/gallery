import styled from "styled-components";
import Image from 'next/image';
import headerFood from '../../../assets/img/food.jpg';

export const HeaderContainer = styled.div`
    width:100%;
    background-color: #1d1d1d;
    height:90vh;
`;

export const HeadercontextContainer = styled.div`
    width:100%;
    position:absolute;
    // top:3rem;
    top:0;
    display:flex;
    justify-content:space-evanly;
`;

export const TitleHeaderContainer = styled.div`
    width:50%;
    padding:7rem 2rem 1rem 2rem;
`;

export const TitleHeader = styled.h1`
    color:#fff;
    text-align:right;
    font-size:5rem;
`;

export const SubTitleHeader = styled.p`
    color:#fff;
    text-align:right;
    line-height:4rem;
    font-size:2rem;
`;

export const HeaderImageContainer = styled.div`
    width:50%;
    height: 33rem;
    padding:0 2rem;
    // background-image:  url('${headerFood}');
	// background-size: 50%;
	// background-repeat: no-repeat;
	// background-position: 100%;
	// background: linear-gradient(to bottom ,rgb(218,160,103),#bf4f7b,#191e3e);
    // background-image: url(${headerFood});
    // background-image: url(${headerFood}), linear-gradient(to bottom ,rgb(218,160,103),#bf4f7b,#191e3e);
`;

export const HeaderImage = styled(Image)`
    width:80%;
    height: 33rem;
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