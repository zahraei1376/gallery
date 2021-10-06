import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    // margin-left: 1rem;
`;

export const TitleShowAll = styled.h3`
    // color: #191e3e;
    color: #fff;
    font-size:1.8rem;
    font-weight:800;
    font-family: Abdoullah;
    display: block;
    overflow: hidden;
    line-height: 2rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    transition:all .3s;

    &:hover{
        font-size:2rem;
        color: #fff;
        // border-bottom:1px solid #191e3e;
    }
`;

export const ShowAllContainer = styled.div`
    cursor:pointer;
    transition:all .3s;
    padding:1rem 0;
    // border-bottom:1px solid #fff;
    display:flex;
    justify-content:flex-end;

   
`



export const Title = styled.h3`
    color: #191e3e;
    font-size:1.8rem;
    font-weight:800;
    font-family: Abdoullah;
    display: block;
    overflow: hidden;
    line-height: 2rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    position: absolute;
    bottom:1rem;
    left:2rem;
    display:none;
    transition:all .3s;


    @media only screen and (max-width: 768px){
        display:block;
        position: relative;
        margin-top:2rem;
    }
`;

export const ImageContainer = styled.div`
    width:90%;
    height:80%;
    overflow:hidden;
    display:flex;
    justify-content: center;
    align-items:center;
    @media only screen and (max-width: 768px){
        height:50%;
    }
`;

export const Image = styled.img`
    width:90%;
    height:auto;
    transition:all .3s;
`;

export const Card = styled.div`
    // margin:0  0 0 2rem;
    // padding:1rem 0;
    box-sizing:border-box;
    cursor:pointer;
    // border-bottom:1px solid transparent;
    transition:all .3s;
    // border-radius:2rem;
    text-align: center;
    width: 20rem;
    height:8rem;
    background-color:#fff;
    // margin:0 2rem;
    overflow:hidden;
    display:flex !important;
    flex-direction:column;
    justify-content: space-evenly;
    align-items:center;
    position:relative;

    @media only screen and (max-width: 768px){
        height:10rem;
    }


    // &:hover{
    //     border-bottom:1px solid #191e3e;
    // }

    &:hover ${Title}{
        display:block
    }

    &:hover ${Image} {
        opacity: 0.3;
    }
`;



