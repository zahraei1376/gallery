
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MenuIcon from '@material-ui/icons/Menu';
import TelegramIcon from '@material-ui/icons/Telegram';
import BookmarkAddedRoundedIcon from '@mui/icons-material/BookmarkAddedRounded';
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import LoginIcon from '@mui/icons-material/Login';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import TocRoundedIcon from '@mui/icons-material/TocRounded';
import styled, { css } from "styled-components";

const IconsConnectionCss = css`
    color:#fff;
    font-size:2rem !important;
    cursor:pointer;

    &:hover {
        color :rgb(218,160,103);
    }
`;

export const Title = styled.h1`
    width:100%;
    color:#fff;
    font-size:3.5rem;
    text-align:right;
    font-family:ir_sans;
`;

export const SubTitle = styled.h4`
    color:rgb(218,160,103);
    font-size:1.5rem;
    text-align:right;
    width:100%;
    margin-bottom:1.5rem;
    font-family:ir_sans;
`;

export const ToolbarInfoBack = styled.div`
    width:100%;
    background-color: #1d1d1d;
    transition:all .3s;
    height:${props => props.show ? '28rem' : '0'};
    position:${props => props.position ? 'absolute' : 'fixed'};
    top:0;
    left:0;
    z-index:1;

    @media only screen and (max-width: 37.5em){
        height:${props => props.show ? '32rem' : '0'};
    }
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
    margin-top:4rem;
    display: ${props => props.show ? 'block' : 'none'};
    opacity:${props => props.show ? '1' : '0'};
    width:${props => props.show ? '50%' : '0'};
    // height:100%;
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
    margin-top:4rem;
    flex-direction:column;
    justify-content:center;
    text-align:right;
    padding:0 4rem 0 3rem;
    // height:100%;

    @media only screen and (max-width: 540px){
        width:${props => props.show ? '80%' : '0'};
        padding:0;
    }

    @media only screen and (max-width: 37.5em){
        margin-top:1rem;
    }

    @media only screen and (max-width: 411px){
        width:${props => props.show ? '90%' : '0'};
    }
`;

export const ListContainer = styled.div`
    display:grid;
    grid-template-columns:repeat(2, 1fr);
    direction: rtl;
    grid-column-gap: 50px;
    z-index:4;
    @media only screen and (max-width: 645px){
        grid-column-gap: 14px;
        grid-row-gap: 14px;
    }
`;

const IconsCss = css`
    color:rgb(218,160,103);
`;

const navTitlesIcons = css`
    font-size:2rem !important;
    transition:all 1s;
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

export const LoginNavIcon = styled(LoginIcon)`
    ${IconsCss};
    ${navTitlesIcons};
`;
export const FaceRoundedNavIcon = styled(FaceRoundedIcon)`
    ${IconsCss};
    ${navTitlesIcons};
`;
export const ManageAccountsRoundedNavIcon = styled(ManageAccountsRoundedIcon)`
    ${IconsCss};
    ${navTitlesIcons};
`;
export const TocRoundedNavIcon = styled(TocRoundedIcon)`
    ${IconsCss};
    ${navTitlesIcons};
`;
export const CloudUploadRoundedNavIcon = styled(CloudUploadRoundedIcon)`
    ${IconsCss};
    ${navTitlesIcons};
`;
export const CloBookmarkNavIcon = styled(BookmarkAddedRoundedIcon)`
    ${IconsCss};
    ${navTitlesIcons};
`;

export const ToolbarContainer = styled.div`
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
    font-family:ir_sans;
    font-size:1.5rem;
    text-align:right;
    // display:flex;
    // justify-content:center;
    // align-items:center;

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
    justify-content:flex-start;
    transition:all .3s;
    color:#fff;
    position:relative;
    z-index: 1;
    cursor:pointer;

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
        transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s, background-color 0.1s;
    }

    &:hover::before{
        width:100%;
        height: 100%;
    }

    &:hover a{
        text-decoration:none;
        color:#fff;
    }

    &:hover ${IconContainer} > svg{
        color:#fff;
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
    border-top:1px solid rgb(218,160,103);
    padding-top:2rem;
    margin-top:auto;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    @media only screen and (max-width: 540px){
        border-bottom:1px solid rgb(218,160,103);
        border-top:none;
        text-align:center;
        justify-content:center;
        padding-bottom:2rem;
        margin-bottom:1rem;
    }
`;

export const TitleBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-top: 1rem;
    margin-bottom:2rem;

    @media only screen and (max-width: 540px){
        display:none;
    }
`;

