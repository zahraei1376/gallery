
import styled ,{css} from "styled-components";
import  {NavLink} from 'react-router-dom';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { IconButton } from '@material-ui/core';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const IconsConnectionCss = css`
    color:#fff;
    font-size:2.5rem !important;
    cursor:pointer;

    &:hover {
        color :rgba(157, 198, 218, 1);
    }
`;

export const Title = styled.h1`
    width:100%;
    color:#fff;
    font-size:4rem;
    text-align:right;
`;

export const SubTitle = styled.h4`
    color:#fff;
    font-size:2rem;
    text-align:right;
    width:100%;
    margin-top:3rem;
`;

export const ToolbarContainer = styled.div`
`;

export const ToolbarInfoBack = styled.div`
    width:100%;
    background-color: #1d1d1d;
    transition:all .3s;
    height:${props => props.show ? '40rem' : '0'};
    position:${props => props.position ? 'absolute' : 'fixed'};
    // position:fixed;
    top:0;
    left:0;
    z-index:1;
`;
export const ToolbarInfoContainer = styled.div`
    width:100%;
    height:100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    list-style: none;
    text-align: center;
    width:${props => props.show ? '100%' : '0'};
    z-index: 1000;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#fff;

    @media only screen and (max-width: 540px){
        flex-direction:column;
        padding-top:3rem;
    }
`;

export const ToolbarInfo = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
    opacity:${props => props.show ? '1' : '0'};
    width:${props => props.show ? '50%' : '0'};

    @media only screen and (max-width: 540px){
        width:${props => props.show ? '80%' : '0'};
    }

    @media only screen and (max-width: 411px){
        width:${props => props.show ? '90%' : '0'};
    }
`;

export const ToolbarInfoText = styled.div`
    width:${props => props.show ? '50%' : '0'};
    display:${props => props.show ? 'flex' : 'none'};
    margin-top:3rem;
    flex-direction:column;
    justify-content:center;
    text-align:right;
    padding:0 10rem 0 3rem;
    
    @media only screen and (max-width: 540px){
        width:${props => props.show ? '80%' : '0'};
    }

    @media only screen and (max-width: 411px){
        width:${props => props.show ? '90%' : '0'};
    }
`;

export const ListContainer = styled.div`
    display:grid;
    grid-template-columns: auto auto;
    grid-column-gap: 50px;
    
    z-index:4;
    @media only screen and (max-width: 645px){
        grid-column-gap: 14px;
        grid-row-gap: 14px;
    }
`;

export const ImgContainer = styled.div`
    width:100%;
    margin:1rem 0;
    display:flex;
    justify-content:center;
`;

export const ListImg = styled.img`
    width:17rem;
    height:17rem;
`;


export const DrawerContainer = styled.div`
    padding:2rem;
    display: flex;
    flex-direction:column;
    align-tems:center;
`;

const IconsCss = css`
    color:rgb(218,160,103);
`;

export const MyListIcon = styled(ListAltIcon)`
    ${IconsCss};
    font-size:2rem !important;
`;

export const ArrowIcon = styled(MenuIcon)`
    ${IconsCss};
    color:rgb(218,160,103);
    font-size:2.5rem !important;
`;

export const MyCloseIcon = styled(CloseIcon)`
    ${IconsCss};
    color:rgb(218,160,103);
    font-size:2.5rem !important;
`;



export const ArrowIconButton = styled(IconButton)`
    color:rgb(218,160,103);
    border-radius:5px !important;
    margin:1rem 2rem !important;
    border:1px solid rgb(218,160,103) !important;
    padding:5px 1rem !important;
    position:relative;
    z-index:3;
    transition:all .3s;

    &:active,
    &:focus{
        outline:none;
    }

    &:hover{
        border:1px solid rgb(218,160,103) !important;
        background-color:rgb(218,160,103) !important;
    }

    &:hover ${ArrowIcon}{
        color:#fff !important;
    }

    &:hover ${MyCloseIcon} {
        color:#fff !important;
    }
`;

export const MyNavLink = styled.a`
    text-decoration: none;
    color:#fff;
    font-family: Abdoullah;
    font-size:2rem;

    &:hover{
        text-decoration: none;
    }
`;

export const IconContainer = styled.div`
    margin-left:2rem;
`;

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction:column;
`;

export const ListItem = styled.div`
    width:100%;
    padding: 1.5rem 2rem;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:all .3s;
    color:#fff;
    position:relative;
    z-index: 1;

    &::before{
        content: "";
        position: absolute;
        display: block;
        top: 0;
        right: 0;
        width:0;
        height: 0;
        background-color:#242d64;
        z-index: -1;
        // transition:all .3s;
        transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s, background-color 0.1s;
    }

    &:hover::before{
        width:100%;
        height: 100%;
        // background-color:rgb(218,160,103);
        // color:#fff;
    }

    &:hover a{
        text-decoration:none;
        color:#fff;
    }

    &:hover ${MyListIcon}{
        color:#fff;
    }

    &:hover ${ArrowIcon}{
        color:#fff;
    }

`;

export const ListLink = styled.a`
    color: white;
    text-decoration: none;
`;

export const ConnectionIcon = styled(AssignmentIndIcon) `
    font-size:2.5rem !important;
    color:#fff;

    &:hover{
        color:#bf4f7b;
    }
`;

export const IconBox = styled.div`
    margin-left:1.5rem;
    &:hover {
        color : #bf4f7b;
    }
`;


export const MyInstagramIcon = styled(InstagramIcon)`
    ${IconsConnectionCss}
`;

export const MyTelegramIcon = styled(TelegramIcon)`
    ${IconsConnectionCss}
`;

export const MyFacebookIcon = styled(FacebookIcon)`
    ${IconsConnectionCss}
`;

export const MyMailOutlineIcon = styled(MailOutlineIcon)`
    ${IconsConnectionCss}
`;

export const ConnectionBox = styled.div`
    border-bottom:1px solid rgb(218,160,103);
    padding-bottom:2rem;
    margin-bottom:1rem;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    @media only screen and (max-width: 540px){
        border-top:1px solid rgb(218,160,103);
        border-bottom:none;
        text-align:center;
        justify-content:center;
        padding-top:2rem;
        margin-top:1rem;
    }
`;

export const TitleBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    @media only screen and (max-width: 540px){
        display:none;
    }
`;

