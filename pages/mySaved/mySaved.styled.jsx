import styled from "styled-components";
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
export const SelectAllContainer = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content: center;
`;

export const SelectAll = styled.button`
    padding:1rem 2rem;
    font-size:1.5rem;
    font-family:Bnazanin;
    border:1px solid #fff;
    background-color:#eee;
    border-radius:2rem;

    &:hover{
        border:1px solid #eee;
        background-color:#d0d0d0;
    }
`;
export const InfoContainer = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content: space-evenly;
    // border-bottom: 1px solid #999;
    margin: 0 2rem;
    position:${props => props.fixed ? 'fixed' : 'relative'};
    background-color:${props => props.fixed ? '#fff' : 'transparent'};
    top:${props => props.fixed ? '6rem' : '0'};
`;

export const InfoSelectContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content: flex-end;
`;

export const DeleteContainer = styled.div`
    margin-left:2rem;
    // position:fixed;
    // bottom:0;
    // left:50%;
    // z-index:100;
`;

export const DeleteButton = styled(IconButton)`
    background-color:#fff !important;
    box-shadow:0 0 8px 0 rgba(0,0,0,.4) !important;
`;


export const MyDeleteIcon = styled(DeleteIcon)`
    font-size:3rem !important;
    // color:#000 !important;
    color: ${props => props.disable ? '#999' : '#000'}!important;
`;

export const GalleryPageSecion = styled.div`
    width:100%;
    position:relative;
`;

export const TitleContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const Title = styled.h1`
    // width:100%;
    // display:flex;
    // justify-content:center;
    font-size:3.5rem;
    font-family:Bnazanin;
    margin-top:15rem;
`;

export const SunTitle = styled.h5`
    width:50%;
    color:#888;
    font-size:2rem;
    font-family:Bnazanin;
    margin-top:3rem;
    text-align:center;
    line-height:4rem;
`;

export const SunTitleSelect = styled.h5`
    // width:50%;
    color:#888;
    font-size:2rem;
    font-family:Bnazanin;
    margin:3rem 4rem 0 0;
    text-align:center;
    line-height:4rem;
    border-bottom: 1px solid #999;
`;