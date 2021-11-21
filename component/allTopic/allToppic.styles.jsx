import styled from "styled-components";

export const AllTopicContainer = styled.div`
    min-height:100vh;
    background-color:#fff;
    margin:-17rem 5rem 2rem 5rem;
    padding:10rem 5rem;
    position:relative;
    z-index:1;
    border-radius:2rem;
`;

export const AllTopicContent = styled.div`
    display:grid;
    grid-template-columns:repeat(3 , minmax(0,1fr));
    grid-gap: 5rem;
    margin-bottom:7rem;

    @media only screen and (max-width: 950px){
        grid-template-columns:repeat(2 , minmax(0,1fr));
        grid-gap: 8rem;
    }

    @media only screen and (max-width: 411px){
        grid-template-columns:repeat(1 , minmax(0,1fr));
    }
`;