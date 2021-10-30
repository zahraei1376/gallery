import styled,{keyframes , css} from 'styled-components';
import Image from 'next/image';
import CloseIcon from '@material-ui/icons/Close';
import SettingsIcon from '@mui/icons-material/Settings';

const Load = keyframes`
    0% {
		opacity: 0;
		visibility: hidden;
		// width: 0;
	}
	50% {
		opacity: .5;
		// visibility: hidden;
	}
	100% {
		opacity: 1;
		// visibility: hidden;
		// width: 100%;
	}

`;

const iconsStyle = css`
	font-size:3rem !important;
`;
//////////////////////////////////////////////////////
export const MyCloseIcon = styled(CloseIcon)`
    ${iconsStyle};
`;

export const SettingIcon = styled(SettingsIcon)`
	${iconsStyle};
    color:#191e3e !important;
	transition:all .3s;
    position:absolute;
    bottom:0;
    left:0;
`;

export const FileContainer = styled.div`
    // position:relative;
`;

export const PopUpContainer = styled.div`
	min-height: 100vh;
	width: 100%;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding:2rem;
	background-color: rgba(0,0,0, 0.8);
	z-index: 99999;
	transition: all 0.3s;
	animation-name: ${Load};
	animation-duration: 1s;
	direction: rtl;
	overflow-y: auto;
`;

export const PopUpBody = styled.div`
	width: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
    
	// margin-top:5rem;

    @media only screen and (max-width: 750px) {
		// left: 50%;
		width: 70%;
		// transform: translate(-50%, 0);
	}

	@media only screen and (max-width: 540px) {
		// left: 50%;
		width: 90%;
		// transform: translate(-50%, 0);
	}
`;

export const ContentContainer = styled.div`
	width: 100%;
	// background-color: #eee;
    background-color:#E0E0E0;
	box-shadow: 0 2rem 6rem 0.5rem rgba(101, 90, 86, 0.2);
	position: relative;
	z-index: 1;
	transition: all 3s;
	overflow:auto;
	display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: center;
    padding:2rem 5rem 3rem 5rem;
    border-radius:2rem;
    // border:1px solid #191e3e;
`;

export const PopUpHeader = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:Center;
    align-items:Center;
`;


export const Title = styled.h1`
    font-size:2rem;
    font-family:ir_sans;
    // border-bottom:1px solid #191e3e;
    // padding:0 2rem 2rem;
    background-image:radial-gradient(ellipse at top ,rgba(191,79,123,1),rgba(36,45,100,1) 80%,rgba(25,30,62,1) 100%);
    -webkit-background-clip: text;
    color: transparent;
`;

export const Form = styled.form`
    width:100%;
`;
export const Group = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    margin:1rem 0;
    border-bottom:1px solid #eee;
    padding-bottom:1rem;
`;

export const Lable = styled.label`
    font-size:2rem;
    font-family:ir_sans;
    width:20%;
`;

export const Input = styled.input`
    height:3.5rem;
    // width:20rem;
    width:70%;
    border-radius:5px;
    outline:none;
    border:none;
    background-color:#fff;
`;

export const Logo = styled(Image)`
  width:100%;
  height:100%;
`;

export const LogoContainer = styled.div`
  cursor:pointer;
  position:relative;
  width:11rem;
  height:11rem;
  display:flex;
  justify-content:Center;
  align-items:center;
  border-radius:50%;
  overflow:hidden;
  background-color:#fff;
  border:2px solid #191e3e;
`;

export const BtnClose = styled.button`
	width: 6rem;
	height: 6rem;
	// background-color: rgb(63, 135, 166);
	background-color:transparent;
	color: #fff;
	border-radius: 50%;
	outline: none;
	border:1px solid transparent;
	position: absolute;
	top: 1rem;
	right: 5rem;
	font-size:2rem;
	font-family:ir_sans;
	cursor:pointer;
	transition:all 0.3s;
	&:hover{
		// background-color: #fff;
		border:1px solid rgb(63, 135, 166);
		color:rgb(63, 135, 166);
	}

	@media only screen and (max-width: 768px){
        top: 0;
		right: 1rem;
    }
`;