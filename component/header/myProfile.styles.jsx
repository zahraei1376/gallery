import styled from "styled-components";
import Typography from '@material-ui/core/Typography';
import Image from 'next/image';

export const MyTypography = styled(Typography)`
    font-size:2rem !important;
    font-family:ir_sans !important;
    color:#999;
    text-align:right;
    padding:1rem !important;
`;


export const FooterHeader = styled.div`
    display: flex;
    justify-content: center;
    margin-top:auto;
`;


export const FooterHeaderText = styled.p`
    text-align:center;
    padding-top: 2rem;
    color:#fff;
`;

export const FooterHeaderLink = styled.span`
    color: #f7f7f7;;
    background-color: #333;
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    transition: all .2s;
    padding:5px;
    cursor:pointer;

    &:hover{
        box-shadow: 0 1rem 2rem rgba(0,0,0, .4);
        transform: rotate(5deg) scale(1.3);
    }
`;

export const ImageContainer = styled.div`
    width:5rem;
    height:5rem;
    position:relative;
    border-radius:50%;
    overflow:hidden;
`;

export const MyImage = styled(Image)`
    
`;

export const MainContentInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items:Center;
`;