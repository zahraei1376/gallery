import styled from "styled-components";
import Image from 'next/image';

export const SegeestionContainer = styled.div`
    width:100%;
    height:30rem;
    background-color:#fff;
    box-shadow:0 0 4px 1px rgba(0,0,0,.4);
    position:absolute;
    top:5rem;
    left:0;
    z-index:5;
    overflow:auto;
    display :${props => props.show ? 'block' : 'none'};
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius:1rem;
`;

export const SegestionContent = styled.ul`
    list-style:persian;
    border-bottom:${props => props.result ? '3px solid #eee' : 'none'}; 
    direction:rtl;
    padding-bottom:2rem;
    display:${props => props.result ? 'block' : 'none'} !important; 
`;

export const SegestionBox = styled.li`
    width:100%;
    padding:1.5rem 1rem;
    transition:all .3s;
    cursor:pointer;
    font-size:1.5rem;
    text-align:right;
    font-family:ir_sans;
    position:relative;
    z-index: 1;

    &:hover{
        color:#eee;
    }

    &::before{
        content: "";
        position: absolute;
        display: block;
        top: 0;
        right: 0;
        width:0;
        height: 0;
        background-color:#242d64;
        z-index: -1;
        // transition:all .3s;
        transition: transform 0.2s, width 0.4s, background-color 0.1s;
        // transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s, background-color 0.1s;
    }

    &:hover::before{
        width:100%;
        height: 100%;
    }
`;

export const NewestSection = styled.div`
    display:${props => props.segestion ? "grid" : "grid"};
    grid-template-columns:${props => props.segestion ? "auto" : "auto auto auto auto"};
    // grid-template-columns:repeat(3 , minmax(0,1fr));
    grid-gap: 2rem;
    padding:2rem 1rem;

    @media only screen and (max-width: 768px){
        grid-template-columns:${props => props.segestion ? "auto" : "auto auto auto"};
        // grid-template-columns:auto auto;
    }

    @media only screen and (max-width: 414px){
        grid-template-columns:${props => props.segestion ? "auto" : "auto auto"};
        // grid-template-columns:auto auto;
    }
`;

export const NewestBox = styled.div`
    // max-width:100%;
    padding: ${props => props.segestion ? "0" : "0 0 0 5px"};
    border-radius:${props => props.segestion ? "5px" : "5px"};
    // border-radius:5rem;
    text-align:right;
    box-shadow::${props => props.segestion ? "0" : "0 0 4px 1px rgba(0,0,0,.4)"};
    display:flex;
    justify-content:flex-end;
    align-items:center;
    cursor:pointer;
    transition:all .3s;
    overflow:hidden;
    &:hover{
        transform:scale(1.05);
        background-color:#eee;
    }
`;

export const NewestTitle = styled.h3`
    font-size:1.5rem;
    text-align:right;
    font-family:ir_sans;
    display:inline;
    word-break: break-all;
    line-height:3rem;
`;

export const NewestImageContainer = styled.div`
    position:relative;
    width:5rem;
    height:5rem;
    // border-radius:50%;
    overflow:hidden;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0 0 0 5px;
    // border-radius:5px;
    // overflow:hidden;
`;

export const NewestImage = styled(Image)`

`;