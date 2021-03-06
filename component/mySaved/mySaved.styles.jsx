import styled from "styled-components";
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
export const SelectAllContainer = styled.div`
    // width:50%;
    display:flex;
    align-items:center;
    justify-content: center;
    // border-style: outset;
`;

export const LeftTitle = styled.div`
    z-index:0;
    width: 6rem;
    height: 7rem;
    position:absolute;
    // // top:12rem;
    // left:2rem;
    top:1rem;
    left:-4rem;
    clip-path: polygon(100% 0%, 100% 51%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
    background-image: linear-gradient(to right ,#fc8d6d,#bf4f7b,#242d64 80%,#191e3e 100%);
    box-shadow: 0 11px 13px -12px rgba(0,0,0,1);
`;

export const RightTitle = styled.div`
    z-index:0;
    width: 6rem;
    height: 7rem;
    position:absolute;
    // top:12rem;
    // right:2rem;
    top:1rem;
    right:-4rem;
    clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
    background-image: linear-gradient(to left ,#fc8d6d,#bf4f7b,#242d64 80%,#191e3e 100%);
    box-shadow: 0 11px 13px -12px rgba(0,0,0,1);
`;

export const SelectAll = styled.button`
    padding:1rem 2rem;
    font-size:1.5rem;
    font-family:ir_sans;
    border:1px solid #fff;
    background-color:#eee;
    border-radius:2rem;
    cursor: ${props => props.dsl ? "not-allowed" : "pointer" };
    // outline: ${props => props.select ? "2px solid #999" : "2px solid #eee"};
    outline:2px solid #eee;
    outline-offset: 5px;
    color:#777;

    // &:hover{
    //     // border:1px solid #eee;
    //     background-color:#d0d0d0;
    // }
`;
export const InfoWrapper = styled.div`
    width:100%;
    display:flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content: space-evenly;
    // border-bottom: 3px double #999;
    // border-bottom:${props => props.fixed ? 'none' : '3px double #000'};
    padding:2rem 0;
    margin-bottom: 2rem;
`;

export const InfoSavedWrapper = styled.div`
    width:80%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    // border-bottom: 3px double #999;
    // border-bottom:${props => props.fixed ? 'none' : '3px double #999'};
    padding:2rem 0;
`;
export const InfoContainer = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content: space-evenly;
    // border-bottom: 1px solid #999;
    // margin: 0;
    // display:${props => props.fixed ? 'flex' : 'inline-block'};
    // position:${props => props.fixed ? 'fixed' : 'relative'};
    // background-color:${props => props.fixed ? '#fff' : 'transparent'};
    // top:${props => props.fixed ? '7rem' : '0'};
    // left:${props => props.fixed ? '0' : '0'};
    // z-index:1;
    box-shadow:${props => props.fixed ? '0 11px 13px -12px rgba(0,0,0,.4)' : '0'};
    // border-top: 3px double #eee;
    // border-bottom: 3px double #eee;
`;

export const InfoSelectContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    // justify-content: flex-end;
`;

export const InfoSavedSelectContainer = styled.div`
    display:flex;
    align-items:center;
    // justify-content: center;
    justify-content: center;
    background-color:#f5f5f5;
    // background-color:#2f2f2f;
    margin:-5rem auto 0 auto;
    width:80%;
    padding:3rem 0;
    // box-shadow:0 11px 13px -12px rgb(218,160,103);
    box-shadow:0 11px 13px -12px rgba(0,0,0,.4);
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
    width:90%;
    position:relative;
    margin:0 auto;
    // background-image:linear-gradient(to bottom right , #1E88E5 60%,#bf4f7b 60%);
    // margin: 6rem 2rem 2rem 2rem;
`;


export const GallerySavedPageSecion = styled.div`
    // width:100%;
    // position:relative;
    background-color:#d7d7d7;
    // background-color:#3a3b36;
    // background-image:linear-gradient(to bottom right ,#83AD98 60%,#83AD98 60%);
    // margin: 2rem 2rem 2rem 2rem;
`;

export const TitleContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    position:relative;
    // margin-top:6rem;
`;

export const TitleSavedContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    // position:relative;
    padding-top:9rem;
    // margin:3rem 0;
`;

export const TitleSaved = styled.h1`
    font-size:5.5rem;
    font-family:classic;
    margin: 3rem 0 0 0;
`;

export const SubTitleSaved = styled.h2`
    font-size:2.5rem;
    font-family:classic;
    margin:1rem 0 7rem 0;
`;



export const TitleWrapper = styled.div`
    position:relative;
    margin-top:9rem;
`;

export const Title = styled.h1`
    // margin-bottom: 3rem;
    position: relative;
    z-index:1;
    font-size:3.5rem;
    font-family:ir_sans;
    padding:1rem 3rem;
    box-shadow: 0 11px 13px -12px rgba(0,0,0,1);
    border-style: outset;
    color:#fff;
    background-image: radial-gradient(ellipse at top ,#fc8d6d,#bf4f7b,#242d64 80%,#191e3e 100%);
`;

export const InfoSavedContainer = styled.div`
    width:100%;
    height: 20rem;
    display:flex;
    align-items: flex-start;
    // align-items:center;
    justify-content: space-evenly;
    background-color:#2f2f2f;
    // border-bottom: 1px solid #999;
    // margin: 0;
    // display:${props => props.fixed ? 'flex' : 'inline-block'};
    // position:${props => props.fixed ? 'fixed' : 'relative'};
    // background-color:${props => props.fixed ? '#fff' : 'transparent'};
    // top:${props => props.fixed ? '7rem' : '0'};
    // left:${props => props.fixed ? '0' : '0'};
    // z-index:1;
    box-shadow:0 11px 13px -12px rgba(0,0,0,.4);
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    // box-shadow:${props => props.fixed ? '0 11px 13px -12px rgba(0,0,0,.4)' : '0'};
    // border-top: 3px double #eee;
    // border-bottom: 3px double #eee;
`;

export const SunTitle = styled.h5`
    // width:50%;
    color:#777;
    font-size:1.5rem;
    font-family:ir_sans;
    // margin-top:3rem;
    text-align:center;
    // line-height:4rem;
    // border-style: outset;
`;

export const SunTitleSaved = styled.h5`
    color:#eee;
    font-size:1.5rem;
    font-family:ir_sans;
    // margin-top:3rem;
    text-align:center;
`;

export const SunTitleSelect = styled.h5`
    // width:50%;
    color:#999;
    font-size:1.5rem;
    font-family:ir_sans;
    // margin:4rem 5rem 0 0;
    // text-align:center;
    line-height:3rem;
    // border-bottom: 1px solid #999;
`;

export const SunTitleSavedSelect = styled.h5`
    // width:50%;
    color:#999;
    // color:rgb(218,160,103);
    font-size:1.5rem;
    font-family:ir_sans;
    // margin:-4rem 5rem 0 0;
    // text-align:center;
    line-height:3rem;
    // border-bottom: 1px solid #999;
`;