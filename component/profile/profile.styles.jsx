import styled , {css} from "styled-components";
import Image from 'next/image';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const iconStyle = css`
    font-size:3.5rem !important;
    color:#fff;
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
    height:30rem;
    background-image: radial-gradient(ellipse at top ,#fc8d6d,#bf4f7b,#242d64 80%,#191e3e 100%);
`;

export const ProfileInfoContainer = styled.div`
    position:absolute;
    top:20rem;
    left:50%;
    transform:translate(-50%,0);
    width:50%;
    height:30rem;
    background-color:#1d1d1d;
    border-radius:1rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const ProfileInfo = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const ProfileInfoText = styled.h1`
    // display:flex;
    // justify-content:center;
    // align-items:center;
    color:#fff;
`;

export const ProfileInfoGroup = styled.div`
    display:flex;
    align-items:center;
`;

export const ProfileImageContainer = styled.div`
    width:10rem;
    height:10rem;
    position:relative;
    border-radius:50%;
    border:2px solid #fff;
    overflow:hidden;
`;

export const ProfileImage = styled(Image)`
    width:100%;
    height:100%;
`;