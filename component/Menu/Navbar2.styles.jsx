import styled ,{keyframes} from "styled-components";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { IconButton } from '@material-ui/core';
import Image from 'next/image';

const fade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10rem);
  }

  80%{
    transform: translateY(1rem);
  }

  100%{
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SearchBoxContaiber = styled.div`
  flex-grow: 1;
  display:${props => props.scroll ? 'block' : 'none'};
`;

export const Logo = styled(Image)`
  width:100%;
  height:100%;
  cursor:pointer;
`;

export const Container = styled.div`
    width:100%;
    // position:fixed;
    // top: 0;
    z-index:2;
    // box-shadow: ${props => props.scroll ? '0 0 13px 1px rgba(0,0,0,.5)' : '0'};
    background-color:#fff;
    box-shadow: 0 4px 12px rgb(0 ,0 , 0 ,0.08), 0 0 1px rgba(1, 0, 0 ,0.1);
`;

export const NavberContainer = styled.div`
    width: 100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:7rem;
    // position:fixed;
    // background-color:${props => props.scroll ? '#fff' : 'transparent'};
    // top: 0;
    // z-index:2;
    // left: ${props => props.scroll ? '0' : '50%'};
    // transform: ${props => props.scroll ? 'translate(0,0)' : 'translate(-50%,0)'};
    padding:0 5%;
    // box-shadow: ${props => props.scroll ? '0 0 13px 1px rgba(0,0,0,.5)' : '0'};
    transition : height .3s , background-color .6s;
`;

export const UserIconButton = styled(IconButton)`
    margin-left:1rem !important;
    z-index:2;
    // position:relative;

    // div:first-of-type {
    //   display:none;
    // }
    
    // &:active > div:first-of-type {
    //   display: grid;
    //   animation: ${fade} 1.1s linear;
    //   animation-iteration-count: 1;
    // }
`;

export const MyUserIcon = styled(AssignmentIndIcon)`
    font-size:2.5rem !important;
    color:#fff;
`;

export const InfoContainer = styled.div`
  display:flex;
  justify-content:Center;
  align-items:center;
`;

export const ProfileBox = styled.div`
    width:30rem;
    height:40rem;
    position:absolute;
    top:4rem;
    left:4rem;
    background-color:#fff;
`;

export const LoginButtonContainer = styled.div`
  z-index:2;
  height:100%;
  width:10rem;
  display:flex;
  justify-content:Center;
  align-items:center;
`;

export const LoginButton = styled.button`
  // width:6rem;
  // height:4rem;
  padding: 5px 3rem 1rem 3rem;
  border-radius:5px;
  border:1px solid #fff;
  color:#fff;
  // background-color:rgb(218,160,103);
  background-image: linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgb(218,160,103) 50%);
  background-size: 200%;
  transition:all .2s;
  font-size:1.5rem;
  font-size:Bnazanin;
  text-align:center;
  &:hover{
    background-position: 100%;
    // border:1px solid rgb(218,160,103);
    // color:#fff;
    // transform:scale(1.05);
  }
`;


export const LogoContainer = styled.div`
  height:100%;
  z-index:2;
  width:10rem;
  display:flex;
  justify-content:Center;
  align-items:center;
  // border-radius:50%;
  // border:1px solid #fff;
  // background-color:#eee;
  // margin:0 2rem;
`;

export const LogoImg = styled.img`
  width:90%;
  height:auto;
  // height:80%;
  cursor:pointer;
  // border:1px solid #fff;
  // color:#fff;
  
`;