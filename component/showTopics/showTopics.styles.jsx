import styled from "styled-components";

export const Container = styled.div`
    max-width: 70%;
    margin-left: 11rem;
`;

export const ShowAllContainer = styled.div`
    width:10%;
    cursor:pointer;
    transition:all .3s;
    padding:1rem 0;
    border-bottom:1px solid transparent;

    &:hover{
        border-bottom:1px solid #191e3e;
    }
`
export const Title = styled.h3`
    color: #888;
    font-size:1.8rem;
    font-weight:800;
    font-family:Bnazanin;
    display: block;
    overflow: hidden;
    line-height: 2rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    transition:all .3s;
`;

export const Card = styled.div`
    margin:0  0 0 2rem;
    padding:1rem 0;
    box-sizing:border-box;
    cursor:pointer;
    border-bottom:1px solid transparent;
    transition:all .3s;
    // border-radius:2rem;
    text-align: center;
    width: 200px;

    &:hover{
        border-bottom:1px solid #191e3e;
    }

    &:hover ${Title}{
        color: #191e3e;
    }
`;

