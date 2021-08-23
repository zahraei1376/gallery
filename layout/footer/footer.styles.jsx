import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

export const FooterContainer = styled.div`
    width:100%;
    min-height:60rem;
    // background-color:#CEA176;
    // background-image: linear-gradient(to bottom right, #777, #eee);
    // background-color:#777;
    // background-color:rgba(206, 161, 118, .8);
    // filter: blur(8px);
    // position: relative;
    // display: block;
    background: #1d1d1d;

    // &::before{
    //     content: "";
    //     position: absolute;
    //     display: block;
    //     top: 0;
    //     bottom: 0;
    //     right: 0;
    //     width: calc(50vw - 365px);
    //     background: #fff;
    //     z-index: 0;
    // }
`;

export const FooterTitle = styled.h1`
    color:#843910;
    font-size:3rem;
    font-family:gol;
    text-align:center;
    padding:3rem;
`;

export const FooterInfo = styled.div`
    width:70%;
    min-height:40rem;
    // background-color:#843910;
    // background-color:rgba(132, 57, 16, .6);
    // background-color:rgba(206, 161, 118, 1);
    margin:3rem auto;
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
    align-items:center;
    border-bottom:1px solid #eee;
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
`;

export const FooterUl = styled.ul`
    list-style:none;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:50%;
    // position: relative;
    // display: table;
    `;

export const FooterUlTitle = styled.h2`
    font-size:2rem;
    font-family:Abdoullah;
    text-align:center;
    padding-bottom:1rem;
    color:#fff;
    border-bottom:1px solid #fff;
    // border-bottom:1px solid rgba(0, 0, 0, 1);
    // border-bottom:1px solid rgba(132, 57, 16, 1);
`;

export const FooterItem = styled.li`
    // padding:1rem 2rem;
    // font-size:1.2rem;
    // transition:all 0.2s;
    // margin:1rem;
    // -webkit-backface-visibility: hidden;
    // backface-visibility: hidden;
    border:1px solid transparent;
    // width:100%;
    position: relative;
    display: table-cell;
    // width: 50%;
    font-weight: 600;
    line-height: 17px;
    padding: 28px 0;
    color: #fff;
    overflow: hidden;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    display: table-cell;
    // &:hover{
    //     // transform: scale(1.1) rotate(-10deg);
    //     transform: scale(1.1) rotate(-10deg);
    //     // transform:  rotate(-10deg);
    //     border:1px solid #eee;
    // }

    // &::before{
    //     content: "";
    //     position: absolute;
    //     display: inline-block;
    //     height: 2px;
    //     width: 100%;
    //     // bottom: 35px;
    //     background: #fec303;
    //     z-index: 0;
    //     -webkit-transition: all .2s ease-in-out;
    //     transition: all .2s ease-in-out;
    // }
    // &::after{
    //     content: "";
    //     position: absolute;
    //     display: inline-block;
    //     height: 2px;
    //     width: 100%;
    //     bottom: 35px;
    //     background: #fec303;
    //     z-index: 0;
    //     -webkit-transition: all .2s ease-in-out;
    //     transition: all .2s ease-in-out;
    // }


    &:hover {
        padding-left: 22px;
    color: #fec303;
    }

    // &:hover &::before{
    //     right: 0;
    //     margin-right: 0;
    //     -webkit-transition: right .2s ease-in-out,margin-right .2s ease-in-out;
    //     transition: right .2s ease-in-out,margin-right .2s ease-in-out;
    // }

    // &:hover &::after{
    //     right: 0;
    // margin-right: -100%;
    // }
`;

export const FooterLink = styled.a`
    text-decoration:none;
    font-size:1.7rem;
    font-family:Bnazanin;
    /////////////////////////
    position: relative;
    display: inline;
    z-index: 1;
    // position: relative;
    // display: table-cell;
    // width: 50%;
    // font-weight: 600;
    // line-height: 17px;
    // padding: 28px 0;
    // color: #fff;
    // overflow: hidden;
    // -webkit-transition: all .2s ease-in-out;
    // transition: all .2s ease-in-out;
    // &:hover {
    //     padding-left: 22px;
    // color: #fec303;
    // }

    // &:hover &::before{
    //     right: 0;
    //     margin-right: 0;
    //     -webkit-transition: right .2s ease-in-out,margin-right .2s ease-in-out;
    //     transition: right .2s ease-in-out,margin-right .2s ease-in-out;
    // }

    // &:hover &::after{
    //     right: 0;
    // margin-right: -100%;
    // }

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

export const SocialMediaContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:3rem;
    height:10%;
`;

export const SocialMediaLinks = styled.div`
    width:50%;
    display:flex;
    justify-content:center;
    align-items:center;
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
    font-family:Bnazanin;
    color:#fff;
`;


