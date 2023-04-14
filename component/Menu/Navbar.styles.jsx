import { IconButton } from '@material-ui/core';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Image from 'next/image';
import styled from "styled-components";

export const SearchBoxContaiber = styled.div`
  // flex-grow: 1;
  display:${props => props.scroll ? 'block' : 'none'};
`;

export const Logo = styled(Image)`
  width:100%;
  height:100%;
  cursor:pointer;
`;

export const NavberContainer = styled.div`
    width: 100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:7rem;
    position:fixed;
    background-color:${props => props.scroll ? '#191e3e' : 'transparent'};
    top: 0;
    z-index:2;
    left: ${props => props?.scroll ? '0' : '50%'};
    transform: ${props => props?.scroll ? 'translate(0,0)' : 'translate(-50%,0)'};
    // padding:0 10%;
    box-shadow: ${props => props?.scroll ? '0 0 13px 1px rgba(0,0,0,.5)' : '0'};
    transition : height .3s , background-color .6s;
`;

export const MyUserIcon = styled(AssignmentIndIcon)`
    font-size:2.5rem !important;
    color:#fff;
`;

export const UserIconButton = styled(IconButton)`
    margin-left:1rem !important;
    z-index:2;
`;

export const InfoContainer = styled.div`
  display:flex;
  justify-content:Center;
  align-items:center;
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
  padding: 5px 2rem 5px 2rem;
  border-radius:5px;
  border:1px solid #fff;
  color:#fff;
  background-image: linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgb(218,160,103) 50%);
  background-size: 200%;
  transition:all .2s;
  font-size:1.5rem;
  font-family:ir_sans;
  text-align:center;
  &:hover{
    background-position: 100%;
  }
`;

export const LogoContainer = styled.div`
  height:100%;
  z-index:2;
  width:10rem;
  display:flex;
  justify-content:Center;
  align-items:center;
`;