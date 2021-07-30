import styled ,{keyframes} from "styled-components";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { IconButton } from '@material-ui/core';

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

export const NavberContainer = styled.div`
    height: 5rem;
    width: 100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:absolute;
    z-index:2;
    transform:translate(-50%,0);
    top: 0;
    left: 50%;
    padding:0 10%;
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
  background-color:rgba(0,0,0,.3);
  transition:all .2s;
  font-size:1.5rem;
  font-size:Bnazanin;
  text-align:center;
  &:hover{
    border:1px solid rgb(218,160,103);
    color:rgb(218,160,103);
    // transform:scale(1.05);
  }
`;


export const LogoContainer = styled.div`
  height:100%;
  z-index:2;
  width:5rem;
  display:flex;
  justify-content:Center;
  align-items:center;
  // border-radius:50%;
  // border:1px solid #fff;
  // background-color:#eee;
  margin:0 2rem;
`;

export const LogoImg = styled.img`
  width:90%;
  height:80%;
  cursor:pointer;
  // border:1px solid #fff;
  // color:#fff;
  
`;