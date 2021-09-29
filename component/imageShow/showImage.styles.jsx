import styled,{keyframes , css} from 'styled-components';
import { IconButton } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

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
	color:#777 !important;
	transition:all .3s;
`;

const ButtonDownloadStyle = css`
	border:none;
	background-color:rgba(36, 45, 100, 1);
	transition:all .3s;
	font-size:2rem;
	font-family:Bnazanin;
	color:#fff;
	height:100%;

	&:hover {
		background-color:rgba(36, 45, 100, 0.88);
	}
`;

export const ArrowButton = styled(IconButton)`
	// position: absolute !important;
	// top: 1rem !important;
	// right: 5rem !important;
	// z-index:10 !important;
	// transition:all 0.3s;
	background-color: rgba(256,256,256,.7) !important;
	// &:hover{
	// 	background-color: #fff;
	// 	border:1px solid rgb(63, 135, 166);
	// 	color:rgb(63, 135, 166);
	// }

	// @media only screen and (max-width: 768px){
	// 	top: 0 !important;
	// 	right: 1rem !important;
	// }

	// @media only screen and (max-width: 769px) {
	// 	padding:8px !important;
	// }

	// @media only screen and (max-width: 411px) {
	// 	padding:5px !important;
	// }

	@media only screen and (max-width: 540px) {
		display:none !important;
	}
`;

export const NextArrowIcon = styled(NavigateNextIcon)`
	// ${iconsStyle}
	font-size:5rem !important;
	color:#777 !important;
	transition:all .3s;
`;

export const ArrowBottom = styled(ArrowDropDownIcon)`
	${iconsStyle};
	color:#fff !important;
`;

export const PrevArrowIcon = styled(NavigateBeforeIcon)`
	${iconsStyle}
	// font-size:5rem !important;
	// color:#fff !important;
	// transition:all .3s;
`;

export const HeaderButtons = styled.div`
	display:flex;
	// @media only screen and (max-width: 769px) {
	// 	flex-direction: column-reverse;
	// 	align-items: flex-start;
	// }
`;

export const MyCloseIcon = styled(CloseIcon)`
	font-size:3rem !important;
`;

export const HeaderDownloadIcon = styled(GetAppIcon)`
	${iconsStyle}
`;

export const HeaderSaveIcon = styled(AddIcon)`
	${iconsStyle};
	color:${props => props.select ? '#fff': '#777' }!important;
`;

export const DownloadButtonsContainer = styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	height:5rem;
	margin-left:1rem;
	@media only screen and (max-width: 540px) {
		height:6rem;
	}
`;

export const DownloadButtonIcon = styled.button`
	${ButtonDownloadStyle};
	padding:5px;
	border-top-right-radius:5px;
	border-bottom-right-radius:5px;

	// &:hover ${ArrowBottom}{
	// 	color:#000 !important;
	// }
`;
// #fc8d6d,#bf4f7b,#242d64 80%,#191e3e
export const DownloadButton = styled.button`
	padding:5px 1rem;
	${ButtonDownloadStyle};
	border-top-left-radius:5px;
	border-bottom-left-radius:5px;
	// border:none;
	// background-color:#242d64;
	// padding:5px;
	// // border-radius:5px;
	// transition:all .3s;
	// font-size:2rem;
	// font-family:Bnazanin;
	// color:#fff;

	// &:hover ${HeaderDownloadIcon}{
	// 	color:#000 !important;
	// }
`;

export const HeaderButton = styled.button`
	background-color:${props => props.select ? 'rgba(36, 45, 100, 0.8)': 'transparent' };
	
	padding:5px;
	border-radius:5px;
	margin-left:1rem;
	border:1px solid #eee;
	transition:all .3s;

	&:hover{
		border:1px solid #000;
	}

	&:hover ${HeaderSaveIcon}{
		color:#000 !important;
	}

	&:hover ${HeaderDownloadIcon}{
		color:#000 !important;
	}
`;


export const Header = styled.div`
	width:100%;
	display: flex;
	justify-content:space-between;
	align-items: center;
	margin-bottom:4rem;
	// background-color:#1d1d1d;
	padding:2rem 1rem;

	@media only screen and (max-width: 960px) {
		flex-direction: column-reverse;
		align-items: flex-start;
		margin-bottom:2rem;
	}

	@media only screen and (max-width: 540px) {
		flex-direction: row;
	}
`;

export const Span = styled.span`
	cursor:pointer;
	color:#000;
`;

export const ImageTitle = styled.h1`
	font-size:3rem;
	font-family:Bnazanin;
	margin-bottom: 3rem;
`;

export const ImageSubTitle = styled.h5`
	font-size:2rem;
	font-family:Bnazanin;
	color:#999;
	margin-top:2rem;
	line-height: 4rem;
`;


export const DescriptionContainer = styled.div`
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
	// padding-top:5rem;

	// @supports (-webkit-backdrop-filter: blur(2rem)) or (backdrop-filter: blur(2rem)) {
	// 	-webkit-backdrop-filter: blur(2rem);
	// 	backdrop-filter: blur(2rem);
	// }
`;

export const DescriptionBody = styled.div`
	// width: 80%;
	// // height: 95%;
	// z-index: 45789;
	// display: flex;
	// justify-content:Center;
	// align-items: center;
	// position: absolute;
	// top: 0;
	// left: 50%;
	// transform: translate(-50%, 0);
	// background-color:#fff;
	// // box-shadow: 0 2rem 4rem rgba(0,0,0, 0.2);
	// transition: all 0.5s 0.2s;
	// margin: 6rem 0;
	// border-top-left-radius:1rem;
	// border-bottom-left-radius:1rem;
	// overflow: hidden;
	// ///////////
	width: 50%;
	// display: flex;
    // justify-content: center;
    // align-items: center;
	position: absolute;
	top: 0;
	left: 50%;
	transform: translate(-28%, 0);
	margin-top:5rem;
	// @media only screen and (max-width: 769px) {
	// 	width: 60%;
	// 	transform: translate(-19%, 0);
	// }

	@media only screen and (max-width: 540px) {
		left: 50%;
		width: 100%;
		transform: translate(-50%, 0);
	}
`;

export const ContentContainer = styled.div`
	// padding: 0 3rem;
	width: 100%;
	// height: 90%;
	// background-color: #000;
	// box-shadow: 0 2rem 6rem 0.5rem rgba(101, 90, 86, 0.2);
	position: relative;
	z-index: 1;
	transition: all 3s;
	// backface-visibility: hidden;
	transform-origin: left center;
	transform-style: preserve-3D;
	overflow:auto;
	display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ContentBackContainer = styled.div`
	width: 80%;
	height: 100%;
	transform-origin: left center;
	transform-style: preserve-3D;
	overflow-y: auto;
	background-color: #fff;
	position: absolute;
	top:0;
	left:0;
	z-index: -1;
	box-shadow: 0 2rem 6rem 0.5rem rgba(101, 90, 86, 0.2);
	transition: all 5s;

	@media only screen and (max-width: 540px) {
		width:90%;
		position: relative;
		margin:0 auto;
		padding-bottom: 8rem;
		margin-bottom:5rem;
	}
`;

export const DescriptionContent = styled.div`
	width:100%;
	// height:100%;
	background-color:#fff;
	border-top-right-radius:1rem;
	border-bottom-right-radius:1rem;
	align-self: flex-start;
	// padding:3rem;
	overflow:auto;
`;

export const TextContainer = styled.div`
	padding: 0 3rem;
`;

export const DescriptionImageContainer = styled.div`
	align-self: flex-start;
	width:80%;
	// @media only screen and (max-width: 769px) {
	// 	width:83%;
	// }

	@media only screen and (max-width: 540px) {
		width:90%;
		margin:0 auto;
	}
`;

export const DescriptionImg = styled.img`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: auto;
	// cursor: zoom-out;
	@media only screen and (max-width: 540px) {
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
	justify-content: flex-end;
	// justify-content:space-between;

	@media only screen and (max-width: 960px) {
		margin-top:3rem;
	}

	// @media only screen and (max-width: 769px) {
	// 	margin-top:3rem;
	// }
`;

export const WriterImageContainer = styled.div`
	width:5rem;
	height:5rem;
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
	font-family:Bnazanin;
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