import styled from 'styled-components';

export const ComentsContainer = styled.div`
    width:100%;
    height:40rem;
    display:grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 50px;
    // display:flex;
    // justify-content:center;
    // align-items:center;
    // background-color:#ccc;
    // background-color:rgba(132, 57, 16, .6);
    padding:6rem 4rem;
    box-sizing:border-box;
    // position:fixed;
`;

export const ComentsContainerDiv = styled.div`
    width:100%;
    margin-top:20rem;
    background-color: #1d1d1d;
    box-sizing:border-box;
`;

export const ComentsImageDiv = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const ComentsImage = styled.img`
    width:6rem;
    height:6rem;
`;