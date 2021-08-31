import styled,{keyframes} from 'styled-components';
import { IconButton } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

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

export const FooterButton = styled(IconButton)`
`;

export const FooterIcon = styled(GetAppIcon)`
	font-size:3rem !important;
`;

export const Footer = styled.div`
	width:100%;
	display: flex;
	justify-content:flex-end;
	align-items: center;
	margin-top:3rem;
`;

export const ImageTitle = styled.h1`
	font-size:3rem;
	font-family:Bnazanin;
`;

export const ImageSubTitle = styled.h5`
	font-size:2rem;
	font-family:Bnazanin;
	color:#999;
`;


export const DescriptionContainer = styled.div`
	min-height: 100vh;
	width: 100%;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding:2rem;
	background-color: rgba(0,0,0, 0.5);
	z-index: 99999;
	transition: all 0.3s;
	animation-name: ${Load};
	animation-duration: 1s;
	direction: rtl;
	overflow-y: auto;

	@supports (-webkit-backdrop-filter: blur(2rem)) or (backdrop-filter: blur(2rem)) {
		-webkit-backdrop-filter: blur(2rem);
		backdrop-filter: blur(2rem);
	}
`;

export const DescriptionBody = styled.div`
	width: 80%;
	// height: 95%;
	z-index: 45789;
	display: flex;
	justify-content:Center;
	align-items: center;
	position: absolute;
	top: 0;
	left: 50%;
	transform: translate(-50%, 0);
	background-color:#fff;
	// box-shadow: 0 2rem 4rem rgba(0,0,0, 0.2);
	transition: all 0.5s 0.2s;
	margin: 6rem 0;
	border-top-left-radius:1rem;
	border-bottom-left-radius:1rem;
	overflow: hidden;
`;

export const DescriptionContent = styled.div`
	width:50%;
	// height:100%;
	background-color:#fff;
	border-top-right-radius:1rem;
	border-bottom-right-radius:1rem;
	align-self: flex-start;
	padding:3rem;
`;

export const DescriptionImageContainer = styled.div`
	align-self: flex-start;
	width:50%;
`;

export const DescriptionImg = styled.img`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: auto;
	cursor: zoom-out;
	@media only screen and (max-width: 769px) {
		width: 100%;
	}
`;


export const DescriptionCaption = styled.div`
	// font-size: 18px;
	// color: white;
	// margin-top: 1rem;
	// margin-bottom:3rem;
	// padding:0 6rem;
	display:flex;
	align-items:center;
	// justify-content:space-between;
`;

export const WriterImageContainer = styled.div`
	width:7rem;
	height:7rem;
	border-radius:50%;
	overflow:hidden;
	border:1px solid #1d1d1d;
	padding:1rem;
`;

export const WriterImage = styled.img`
	width:100%;
	height:100%;
`;

export const WriterName = styled.span`
	font-size:2rem;
	font-family:Bnazanin;
	margin-right:2rem;
`;

export const BtnClose = styled.button`
	width: 6rem;
	height: 6rem;
	background-color: rgb(63, 135, 166);
	color: #fff;
	border-radius: 50%;
	outline: none;
	border:1px solid transparent;
	position: absolute;
	top: 1rem;
	right: 5rem;
	font-size:2rem;
	font-family:Bnazanin;
	cursor:pointer;
	transition:all 0.3s;
	&:hover{
		background-color: #fff;
		border:1px solid rgb(63, 135, 166);
		color:rgb(63, 135, 166);
	}

	@media only screen and (max-width: 768px){
        top: 0;
		right: 1rem;
    }
`;