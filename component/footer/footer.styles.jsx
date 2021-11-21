import styled , {css} from 'styled-components';
import { IconButton } from '@material-ui/core';
import Image from 'next/image';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import StayCurrentPortraitIcon from '@material-ui/icons/StayCurrentPortrait';
import EmailIcon from '@material-ui/icons/Email';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const Icons = css`
    font-size:2rem !important;
    color:#777;
    margin-left:2rem;
`;

export const LocationIcon =  styled(LocationOnIcon)`
    ${Icons};
`;

export const PhoneIcon =  styled(CallIcon)`
    ${Icons};
`;

export const MobileIcon =  styled(StayCurrentPortraitIcon)`
    ${Icons};
`;

export const MyEmailIcon =  styled(EmailIcon)`
    ${Icons};
`;

export const ArrowButton = styled(IconButton)`
    
`;

export const ArrowTop = styled(ArrowUpwardIcon)`
    font-size:3rem !important;
    color:#fff !important;
`;

export const FooterImageContainer = styled.div`
    width:8rem;
    height:8rem;
    position:relative;
    margin-left:1rem;
`;

export const FooterContainer = styled.div`
    width:100%;
    min-height:65rem;
    position: relative;
    background-color:rgb(218,160,103);
    margin:0;

    &::before{
        margin-top: 10rem;
        content: "";
        position: absolute;
        display: block;
        top: -10rem;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #1d1d1d;
        z-index: 0;
        clip-path: polygon(0 0, 100% 25%, 100% 100%, 0% 100%);

        @media only screen and (max-width: 414px) {
            clip-path: polygon(0 0, 100% 16%, 100% 100%, 0% 100%);
         }
    }
`;

export const FooterInfo = styled.div`
    width:100%;
    min-height:40rem;
    border-radius:3rem;
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const FooterLinks = styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;
    align-items:flex-start;
    padding: 2rem;
    height:80%;
    box-sizing:border-box;

    @media only screen and (max-width: 411px){
        flex-direction:column;
    }
`;

export const FooterUl = styled.ul`
    list-style:none;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    @media only screen and (max-width: 411px){
        width:100%;
        padding:0 3rem;
    }
    `;

export const FooterUlTitle = styled.h2`
    width:100%;
    font-size:1.7rem;
    font-family:ir_sans;
    color:#fff;
    text-align: right;
    margin-right: 6px;
    display: flex;
    align-items: center;
    justify-content: right;
    position: relative;
    padding: 0 3rem 1rem 0;

    &:before{
        content: "";
        width: 12px;
        height: 12px;
        border: 3px solid #fff;
        display: block;
        border-radius: 50%;
        position: absolute;
        right: 0;
    }
`;

export const FooterItem = styled.li`
    width:100%;
    border:1px solid transparent;
    position: relative;
    display: table-cell;
    font-weight: 600;
    line-height: 17px;
    padding: 5px 0;
    color: #fff;
    overflow: hidden;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    display: table-cell;
    text-align:right;
    display:flex;
    algn-items:center;
    justify-content:flex-end;
`;

export const FooterLink = styled.a`
    text-decoration:none;
    font-size:1.3rem;
    font-family:ir_sans;
    position: relative;
    display: inline;
    z-index: 1;
    color: #999;
    text-align:right;

    &:hover {
        color:#fff;
    }

    &::before{
        background: #1d1d1d;
        content: "";
        position: absolute;
        display: inline-block;
        left: -8px;
        right: -8px;
        top: 0;
        bottom: 0;
        z-index: -1;
    }
    
`;

export const FooterText = styled.p`
    font-size:1.3rem;
    font-family:${props => props.number ? 'ir_sans_num' : 'ir_sans'};
    color: #999;
    padding: 0;
    margin: 0;
    text-align:right;
`;

export const SocialMediaContainer = styled.div`
    // width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    // margin-top:3rem;
    // height:10%;
    // padding:2rem 0;
    text-align:center;
`;

export const SocialMediaLinks = styled.div`
    // width:50%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const FooterBottom = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    // margin-top:3rem;
    // height:10%;
    padding:2rem 0;
    text-align:center;
    margin-top:auto;
    border-top:1px solid #eee;
`;

export const SocialMediaLinksIcon = styled(IconButton)`
    color:#fff;
    @media only screen and (max-width: 281px) {
       padding:5px !important;
    }
`;

export const SocialMediadisc = styled.p`
    width:50%;
    font-size:1.2rem;
    font-family:ir_sans;
    color:#777;
`;

export const LogoContainer = styled.div`
  width:20rem;
  height:20rem;
  display:flex;
  justify-content:Center;
  align-items:center;
`;

export const Logo = styled(Image)`
  width:100%;
  height:100%;
  cursor:pointer;
`;

export const ButtonIconContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin: 2rem 3rem;
`;

export const LogoSection = styled.div`
    display:flex;
    justify-content: left;
    // justify-content:space-around;
    align-items:center;
    margin-left: 9rem;
`;