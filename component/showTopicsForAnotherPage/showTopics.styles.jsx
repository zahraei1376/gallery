import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding:0 3rem;

    // @media only screen and (max-width: 414px) {
    //     padding:0 6rem;
    //     margin:0 2rem;
    // }
    // margin-left: 1rem;
`;

export const TitleShowAll = styled.h3`
    // color: #191e3e;
    color: #888;
    font-size:1.8rem;
    font-weight:800;
    font-family:ir_sans;
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
    // color: #000;
    font-size:1.6rem;
    font-weight:800;
    font-family:ir_sans;
    display: block;
    overflow: hidden;
    line-height: 2rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    transition:all .3s;
    color:#000;
    // color:${props => props.color ? props.color : '#000'};
`;

export const Card = styled.div`
    box-sizing:border-box;
    cursor:pointer;
    transition:all .3s;
    border-radius:1rem;
    // border-radius:10rem;
    text-align: center;
    background-color: #fff;
    border: 1px solid #d1d1d1;
    // background-color:${props => props.bg ? props.bg : '#fff'};
    display:flex !important;
    justify-content: flex-end;
    align-items:center;
    padding:5px;
    // border: 1px solid #000;
    // margin:0 1rem;
    transition:all .3s;

    &:hover{
        background-color:#eee;
    }
`;

export const ImageContainer = styled.div`
    width:4rem;
    height:4rem;
    overflow:hidden;
    display:flex;
    justify-content: center;
    align-items:center;
    border-radius:50%;
    // @media only screen and (max-width: 768px){
    //     height:50%;
    // }
    margin-left:1rem;
`;

export const Image = styled.img`
    width:100%;
    height:100%;
    transition:all .3s;
`;



