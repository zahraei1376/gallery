import styled , {css} from 'styled-components';
import { IconButton } from '@material-ui/core';
import Image from 'next/image';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import StayCurrentPortraitIcon from '@material-ui/icons/StayCurrentPortrait';
import EmailIcon from '@material-ui/icons/Email';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const Icons = css`
    font-size:2.5rem !important;
    color:#fff;
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
    font-size:5rem !important;
    color:#fff !important;
`;

export const FooterContainer = styled.div`
    width:100%;
    min-height:65rem;
    position: relative;
    // background:#bf4f7b;
    background-image: radial-gradient(ellipse at top ,#bf4f7b,#242d64 80%,#191e3e 100%);
    margin:0;
    // clip-path: polygon(0 11%, 100% 0, 100% 100%, 0% 100%);

    &::before{
        margin-top: 10rem;
        content: "";
        position: absolute;
        display: block;
        top: -10rem;
        bottom: 0;
        left: 0;
        width: 100%;
        // height:100%;
        background: #1d1d1d;
        z-index: 0;
        clip-path: polygon(0 0, 100% 25%, 100% 100%, 0% 100%);

        @media only screen and (max-width: 414px) {
            clip-path: polygon(0 0, 100% 16%, 100% 100%, 0% 100%);
         }
    }
`;

export const FooterTitle = styled.h1`
    color:#843910;
    font-size:3rem;
    font-family:ir_sans;
    text-align:center;
    padding:3rem;
    margin:0;
`;

export const FooterInfo = styled.div`
    width:100%;
    min-height:40rem;
    // background-color:#843910;
    // background-color:rgba(132, 57, 16, .6);
    // background-color:rgba(206, 161, 118, 1);
    // margin:3rem auto;
    border-radius:3rem;
    position:relative;
    // box-shadow: 0 5px 7px 0 rgba(0, 0, 0, .2);
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
    // border-bottom:1px solid #eee;
    // padding:2rem 0 3rem 0;
    padding: 2rem;
    height:80%;
    box-sizing:border-box;
    // position: relative;
    // // display: block;
    // // background: #1d1d1d;

    // &::before{
    //     content: "";
    //     position: absolute;
    //     display: block;
    //     top: 0;
    //     bottom: 0;
    //     right: 0;
    //     width: calc(30vw - 365px);
    //     background: #fff;
    //     z-index: 0;
    // }

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
    // width:50%;
    // position: relative;
    // display: table;
    @media only screen and (max-width: 411px){
        width:100%;
        padding:0 3rem;
    }
    `;

export const FooterUlTitle = styled.h2`
    width:100%;
    font-size:2.5rem;
    font-family:ir_sans;
    color:#fff;
    // border-bottom:1px solid #fff;
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
        // top: 50%;
        // margin-left: 6px;
    }
`;

export const FooterItem = styled.li`
    width:100%;
    border:1px solid transparent;
    position: relative;
    display: table-cell;
    font-weight: 600;
    line-height: 17px;
    padding: 1rem 0;
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
    font-size:1.7rem;
    font-family:ir_sans;
    /////////////////////////
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

export const FooterImage = styled.img`
    width:30%;
    height:auto;
    position:absolute;
    top:25%;
    // left:10%;
    left:3%;
    transform:translate(-50%,-50%);
    border-radius:3rem;
    box-shadow: 5px 9px 17px 0 #000;
    @media only screen and (max-width: 768px) {
        top:15%;
        left:3%;
        // left:10%;
    }
`;

export const FooterText = styled.p`
    font-size:1.7rem;
    font-family:ir_sans;
    color: #999;
    padding: 0;
    margin: 0;
    text-align:right;

    // &:hover {
    //     color:#fff;
    // }
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
    font-size:1rem;
    font-family:ir_sans;
    color:#fff;
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

export const ButtonContainer = styled.div`
  z-index:2;
//   height:100%;
//   width:100%;
  display:flex;
//   justify-content:flex-end;
  justify-content:center;
  align-items:center;
//   margin-top:8rem;
`;

export const Button = styled.button`
    color:#fff;
    border-radius:1rem;
    cursor:pointer;
    font-family:ir_sans;
    border:none;
    display: inline-block;
    font-size: 3rem;
    font-weight: 300;
    padding: 2rem 4rem;
    background-image:${props => props.color ? `linear-gradient(-120deg, ${props.color} 0%, ${props.color} 50%, #fff 50%)` : "linear-gradient(-120deg, #191e3e 0%,transparent 50%, #191e3e 50%)"};
    background-size: 225%;
    transition: all .4s;
    // border:1px solid transparen;
  // linear-gradient(to bottom ,rgb(218,160,103),#bf4f7b);

  &:hover{
      background-position: 100%;
      color: #1d1d1d;
      transform: translateX(-1rem);
    //   border:1px solid #191e3e;
  }
`;


