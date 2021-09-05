import styled from "styled-components";
import Image from 'next/image';

export const HeaderContainer = styled.div`
    width:100%;
    height:90vh;
    position: relative;
    // clip-path: polygon(0 0, 100% 0%, 100% 90%, 0% 100%);
`;

export const MyImage = styled(Image)`

`;

export const HeaderContent = styled.div`
    width:50%;
    position:absolute;
    top:50%;
    left:50%;
    // transform: translate(-50%,-60%);
    transform: translate(-50%,-40%);
`;

export const SearchBoxContaiber = styled.div`
  flex-grow: 1;
`;

export const HeaderTitle = styled.h1`
    text-align:right;
    font-size:3.5rem;
    line-height:6rem;
    // font-weight:400;
    font-family:Bnazanin;
    color:#fff;
`;