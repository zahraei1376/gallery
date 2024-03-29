import styled, { css } from "styled-components";
// import back from '../../../asset/img/back4.jpg';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Image from 'next/image';

const IconsCss = css`
    font-size:2rem !important;
    color:#fff;
`;

export const IconContainer = styled.div`
    width:10%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const MyPersonOutlineIcon = styled(PersonOutlineIcon)`
   ${IconsCss}
`;

export const MyLockOutlinedIcon = styled(LockOutlinedIcon)`
    ${IconsCss}
`;

export const LogoContainer = styled.div`
  z-index:2;
  width:12rem;
  height:7rem;
  display:flex;
  justify-content:Center;
  align-items:center;
  position:absolute;
  top:3rem;
  left:3rem;
`;

export const Logo = styled(Image)`
  width:100%;
  height:auto;
//   height:100%;
  cursor:pointer;
`;
// $color-primary: #55c57a;
// $color-primary-light: #7ed56f;
// $color-primary-dark: #28b485;
// $color-primary: #55c57a;
// $color-primary-light: #7ed56f;
// $color-primary-dark: #28b485;

// $color-secondary-light: #ffb900;
// $color-secondary-dark: #ff7730;

// $color-tertiary-light: #2998ff;
// $color-tertiary-dark: #5643fa;

// $color-grey-light-1: #f7f7f7;
// $color-grey-light-2: #eee;

// $color-grey-dark: #777;
// $color-grey-dark-2: #999;
// $color-grey-dark-3: #333;

// $color-white: #fff;
// $color-black: #000;
export const TitleLogin = styled.h1`
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    // background-image: linear-gradient(to right, $color-primary-light, $color-primary-dark);
    -webkit-background-clip: text;
    color: transparent;
    letter-spacing: .2rem;
    transition: all .2s;

    @media only screen and (max-width: 75em) {
        font-size: 3rem;
    }; 
    
    
    @media only screen and (max-width: 56.25em) {
        font-size: 2.5rem;
    };

    &:hover {
        transform: skewY(2deg) skewX(15deg) scale(1.1);
        text-shadow: .5rem 1rem 2rem rgba(#000, .2);
    }
`;

export const SectionLogin = styled.div`

    // background: rgb(218,161,103);
    // background: radial-gradient(circle, rgba(218,161,103,1) 20%,rgba(102,187,106 , 0.5) 60%, rgba(148,187,233,1) 100%);
    // background-image: linear-gradient(to bottom ,rgb(218,160,103),#bf4f7b,#191e3e);
    // background: radial-gradient(circle, rgba(218,161,103,1) 10%,rgba(102,187,106 , 0.5) 50%, rgba(148,187,233,1) 100%);
    padding: 15rem 0;
    width:100%;
    height:100vh;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    // background-image: linear-gradient(to right ,#191e3e,#242d64,#bf4f7b,#fc8d6d);
    // background-image: linear-gradient(to bottom ,#fc8d6d,#bf4f7b,#242d64,#191e3e);
    background-image: radial-gradient(ellipse at top ,#fc8d6d,#bf4f7b,#242d64 80%,#191e3e 100%);
    background-size: 100%;
    background-position:center;

    @media only screen and (max-width: 56.25em) {
        padding: 10rem 0;
    }; 
`;

export const LoginBox = styled.div`
    width:35%;
    padding: 2rem 6rem 1rem 6rem;
    display: flex;
    border-radius:1rem;
    background-color:rgba(256,256,256,0.5);
    flex-direction:column;
    justify-content: center;
    align-items:center;
    @media only screen and (max-width: 75em) {
        width: 45%;
    }; 

    @media only screen and (max-width: 56.25em) {
        width: 60%;
    };
`;

export const LoginTitle = styled.h1`
    padding: 1rem 0 2rem 0;
`;

export const LoginFormContainer = styled.div`
    @media only screen and (max-width: 75em) {
        width: 65%;
    }; 
    
    @media only screen and (max-width: 56.25em) {
        width: 100%;
    };
    
`;

export const LoginForm = styled.form`
    width: 100%;
    margin-bottom:3rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    // border-bottom: 1px solid #fff;
`;

export const FormGroup = styled.div`
    width:100%;
    margin-bottom: 2rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-radius:5px;
    border:1px solid #fff;
`;

export const FormGroupBtn = styled.div`
    width:100%;
    margin:1rem 0;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export const FormInput = styled.input`
    font-size: 1.5rem;
    font-family:ir_sans;
    color: inherit;
    padding: 1rem 2rem;
    border-radius: 2px;
    background-color: rgba(256,256,256, .9);
    border: none;
    border-bottom: 3px solid transparent;
    width: 90%;
    display: block;
    transition: all .3s;
    text-align:right;

    @media only screen and (max-width: 56.25em) {
        width: 100%;
    };

    &:focus {
        outline: none;
        box-shadow: 0 1rem 2rem rgba(#000, .1);
        border-bottom: 3px solid #55c57a;
    }

    &:focus:invalid {
        border-bottom: 3px solid #ff7730;
    }

    &::-webkit-input-placeholder {
        color: #999;
    }
`;

export const StyledLink = styled.a`
    color:#fff;
    font-size:1.4rem;
    margin:2rem 0 1rem 0;
    transition:all .3s;
    font-family:ir_sans;

    &:hover{
        color:#000;
    }
`;

export const FooterLogin = styled.div`
    width:55%;
    bottom:0;
    display: flex;
    justify-content: center;
    margin-top:auto;
    @media only screen and (max-width: 75em) {
        width: 75%;
    }; 

    @media only screen and (max-width: 56.25em) {
        width: 85%;
    };
`;


export const FooterLoginText = styled.p`
    width:70%;
    text-align:center;
    padding-top: 2rem;
    width: 80%;
    color:#fff;
`;


export const FooterLoginLink = styled.a`
    &:link,
    &:visited {
        color: #f7f7f7;;
        background-color: #333;
        text-decoration: none;
        text-transform: uppercase;
        display: inline-block;
        transition: all .2s;
        padding:5px;
    }

    &:hover,
    &:active {
        box-shadow: 0 1rem 2rem rgba(0,0,0, .4);
        transform: rotate(5deg) scale(1.3);
    }
`;

