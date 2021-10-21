import styled , {css} from "styled-components";
import Image from 'next/image';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const iconStyle = css`
    font-size:3.5rem !important;
    color:#1d1d1d;
`;

export const ProfileBox = styled.div`
    width:20%;
    display:flex;
    justify-content: center;
    // display:grid;
    // grid-template-columns:repeat(4 , minmax(0,1fr));
    // grid-gap: 5rem;
    // margin:19rem 0;
    background-color:#fff;
    box-shadow:0 1px 12px 2px rgba(0,0,0,.4);
    margin-top:-3rem;
    padding-top:3rem;
    border-radius:2rem;

    @media only screen and (max-width: 750px){
        flex-direction:column;
    }
`;

export const TabsContainer = styled.div`
    width:90%;
    background-color:#fff;
    box-shadow:0 1px 12px 2px rgba(0,0,0,.4);
    margin:-4rem auto;
    padding-top:3rem;
    border-radius:2rem;
    display:flex;
    flex-direction:column;
`;

export const Tabs = styled.div`
    display:flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    // display: grid;
    // // grid-template-columns: repeat(auto-fill,minmax(160px, 1fr));
    // grid-template-columns: repeat(auto-fill,minmax(31rem,1fr));
    // display:grid;
    // grid-template-columns:repeat(3 , minmax(0,1fr));
    // grid-gap: 5rem;
    // margin:19rem 0;
    // background-color:#fff;
    // box-shadow:0 1px 12px 2px rgba(0,0,0,.4);
    // margin:-4rem auto;
    // padding-top:3rem;
    // border-radius:2rem;
    

    // @media only screen and (max-width: 750px){
    //     grid-template-columns:repeat(2 , minmax(0,1fr));
    // }
`;

export const LocationIcon = styled(AssignmentIndIcon)`
    ${iconStyle};
`;

export const YearIcon = styled(AssignmentIndIcon)`
    ${iconStyle};
    margin-right:2rem;
`;

export const ProfileContainer = styled.div`
    position:relative;
    height:100vh;
`;

export const ProfileHeader = styled.div`
    width:100%;
    height:40rem;
    background-size:cover;
    background-repeat:no-repeat;
    // background-image: repeating-linear-gradient(red, yellow 10%, green 20%) ,url(${"/img/3.jpg"});
    background-image: radial-gradient(ellipse at top ,rgba(252,141,109,.8),rgba(191,79,123,.8),rgba(36,45,100,.8) 80%,rgba(25,30,62,.8) 100%),url(${"/img/00.jpg"});
    // background-image: url(${pic}),radial-gradient(ellipse at top ,#fc8d6d,#bf4f7b,#242d64 80%,#191e3e 100%);
`;

export const ProfileInfoContainer = styled.div`
    position:absolute;
    // top:29rem;
    top:12rem;
    left:50%;
    // transform:translate(-50%,0);
    width:50%;
    // height:30rem;
    // background-color:#fff;
    border-radius:1rem;
    display:flex;
    // flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const ProfileInfo = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:flex-end;
    padding-right:2rem;
`;

export const ProfileInfoText = styled.h1`
    // display:flex;
    // justify-content:center;
    // align-items:center;
    color:#bcb6d7;
    font-size:1.5rem;
    text-align:right;
    margin: 2rem 0 2rem 0;
    padding:0;
    line-height:3rem;
`;

export const ProfileInfoName = styled.h1`
    // display:flex;
    // justify-content:center;
    // align-items:center;
    color:#efedef;
    font-size:3rem;
    margin: 0;
    padding:0;
`;

export const ProfileInfoGroup = styled.div`
    display:flex;
    align-items:center;
    margin-right:2rem;
`;

export const ProfileImageContainer = styled.div`
    width:14rem;
    height:14rem;
    position:relative;
    border-radius:50%;
    // border:2px solid #1d1d1d;
    overflow:hidden;
    background-color:#fff;
`;

export const ProfileImage = styled(Image)`
    width:100%;
    height:100%;
`;