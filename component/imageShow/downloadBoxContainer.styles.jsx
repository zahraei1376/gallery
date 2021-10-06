import styled from "styled-components";

export const DownloadButtonContainer = styled.div`
    width:100%;
    margin-top:1rem;
`;

export const DownloadButton = styled.button`
    width:90%;
    padding: 5px 0;
    background-color:rgba(36, 45, 100, 0.9);
    color:#fff;
    font-size:2rem;
    font-family: Abdoullah;
    margin:0 auto;
    display: block;
    border:none;
    border-radius:2px;
    transition:all 0.3s;
    // height:3rem;

    &:hover{
        background-color:rgba(36, 45, 100, 0.8);
    }
`;

export const DownloadContainer = styled.div`
    width: 20rem;
    position: absolute;
    top: 8rem;
    left: 1rem;
    background-color:#fff;
    // box-shadow:0 0 10px 2px rgba(0,0,0,0.3);
    box-shadow: 0 0 9px 0px rgba(0,0,0,0.3);
    display:flex;
    justify-content: center;
    align-items:Center;
    flex-direction:column;
    padding:1rem 0;

    @media only screen and (max-width: 960px) {
		right: 2rem;
	}

    @media only screen and (max-width: 540px) {
		left: 4rem !important;
        right: auto;
	}
`;

export const DownloadTitle = styled.h5`
    font-size:2rem;
    font-family: Abdoullah;
    padding:1rem 0;
    border-bottom:1px solid #eee;
`;

export const Group = styled.div`
    width: 100%;
    font-size:2rem;
    font-family: Abdoullah;
    background-color:${props => props.size ? '#eee' : 'transparent'};
    border-bottom:1px solid #eee;
    padding:1rem 2rem;
    cursor: pointer;
`;

export const GroupLabel = styled.label`
    font-size:1.8rem;
    font-family: Abdoullah;
`;

export const GroupInput = styled.input`
    margin-left:2rem;
    &:checked {
        ${Group}{
            background-color:#eee;
        }
    }
`;