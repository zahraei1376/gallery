// .Top{
//     width: 100%;
//     height: 60px;
//     background-color: #1b1e21;
// }
// .toolbar{
//     line-height: 0;
//     background-color: #322F32;
//     /* background-color:
//     #181818; */
//     border-width: 0 0 0.14285714285714285rem 0;
//     border-bottom: 4px solid #521751;
//     border-style: solid;
//     /*  */
//     height: 56px;
//     width: 100%;
//     top: 0;
//     left: 0;
//     box-shadow:0px 0px 15px 0px #000000;
//     /* background-color: #521751; */
//     /*display: flex;*/
//     /*justify-content: space-between;*/
//     /*align-items: center;*/
//     /*padding: 0px 20px;*/
//     /*box-sizing: border-box;*/
//     /*z-index: 100;*/
// }
// .toolbar__navigation{
//     display: flex;
//     height: 100%;
//     align-items: center;
//     padding: 0 1rem;
//     font-size: 1rem;
// }
// .toolbar__logo{
//     margin-left: 1rem;
// }
// .toolbar__logo a{
//     float: left;
//     color: white;
//     text-decoration: none;
//     font-size: 1.5rem;
// }
// .toolbar_navigation_items ul{
//     list-style: none;
//     margin: 0;
//     padding: 0;
//     display: flex;
// }
// .toolbar_navigation_items li{
//     padding: 0 1.5rem;
// }
// .toolbar_navigation_items a{
//     color: white;
//     text-decoration: none;
// }
// .spacer{
//    flex: 1;
// }
// .toolbar_navigation_items a:hover,
// .toolbar_navigation_items a:active,
// .toolbar_navigation_items a.active{
//     color: #DE94EA;
//     /* color: #fa923f; */
// }

// .sizze{
//     color: white;
//     margin-left: 10px;
// }

// @media (max-width: 768px) {
//     .toolbar_navigation_items{
//         display: none;
//     }
//     /*.toolbar__logo{*/
//     /*    margin-left:10px;*/
//     /*    margin-top: 30px;*/
//     /*}*/
    
// }
// @media (max-width: 900px) {
//     .toolbar__navigation{
//         display: flex;
//         height: 100%;
//         align-items: center;
//         padding: 0 .5rem;
//     }

// }
// @media (min-width: 768px) {
//     .toolbar__toggle-button{
//         display: none;
//     }
//     .toolbar__logo{
//         margin-left:0px;
//     }

// }



// /*.Toolbar nav{*/
// /*    height: 100%;*/
// /*}*/

////////////////////////////////
import styled ,{css} from "styled-components";
import  {NavLink} from 'react-router-dom';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { IconButton } from '@material-ui/core';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
///////////////////////////////
export const Title = styled.h1`
    color:#000;
    font-size:4rem;
    text-align:right;
`;

export const SubTitle = styled.h4`
    color:#000;
    font-size:2rem;
    text-align:right;
`;

export const ToolbarContainer = styled.div`
    // width:100%;
`;

export const ToolbarInfoBack = styled.div`
    width:100%;
    background-color: #1d1d1d;
    transition:all .3s;
    // display: none;
    height:${props => props.show ? '10rem' : '0'};
    transform: ${props => props.show ? 'scale(7)' : 'scale(0)'};
    position:fixed;
    top:0;
    z-index:1;
`;
export const ToolbarInfoContainer = styled.div`
    // width:100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    list-style: none;
    text-align: center;
    // width: 100%;
    width:${props => props.show ? '100%' : '0'};
    // transform: ${props => props.show ? 'scale(1)' : 'scale(0)'};
    // transform: ${props => props.show ? 'scale(7)' : 'scale(0)'};
    background-color: #fff;
    z-index: 1000;
    display:flex;
    justify-content:center;
    align-items:center;
    
    // background-color: #1d1d1d;
    // transition:all .3s;
    // // display: none;
    // height:${props => props.show ? '10rem' : '0'};
    // transform: ${props => props.show ? 'scale(7)' : 'scale(0)'};
    // position:absolute;
    // top:0;
    // z-index:1;
`;

export const ToolbarInfo = styled.div`
    // list-style:none;
    // width:0;
    display: ${props => props.show ? 'block' : 'none'};
    opacity:${props => props.show ? '1' : '0'};
    width:${props => props.show ? '50%' : '0'};
    // display:flex;
    // justify-content:center;
    // align-items:center;
`;

export const ToolbarInfoText = styled.div`
    width:${props => props.show ? '50%' : '0'};
    display:${props => props.show ? 'flex' : 'none'};
    // width:50%;
    // display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const ListContainer = styled.div`
    // list-style:none;
    display:grid;
    grid-template-columns: auto auto;
    grid-column-gap: 50px;
    z-index:4;
`;

export const ImgContainer = styled.div`
    width:100%;
    // height:10rem;
    margin:1rem 0;
    display:flex;
    justify-content:center;
`;

export const ListImg = styled.img`
    width:17rem;
    height:17rem;
`;


export const DrawerContainer = styled.div`
    padding:2rem;
    display: flex;
    flex-direction:column;
    align-tems:center;
`;

const IconsCss = css`
    // font-size:2rem;
    // color:#bf4f7b;
    color:rgb(218,160,103);
`;

export const MyListIcon = styled(ListAltIcon)`
    ${IconsCss};
    font-size:2rem !important;
`;

export const ArrowIcon = styled(MenuIcon)`
    ${IconsCss};
    color:#fff;
    font-size:2.5rem !important;

`;

export const MyCloseIcon = styled(CloseIcon)`
    ${IconsCss};
    color:#fff;
    font-size:2.5rem !important;

`;



export const ArrowIconButton = styled(IconButton)`
    color:#fff;
    // font-size:2.5rem;
    width:3rem !important;
    height:3rem !important;
    border-radius:5px !important;
    margin:1rem 0 ;
    border:1px solid #fff !important;
    // position:relative;
    z-index:3;

    &:active,
    &:focus{
        outline:none;
    }

    &:hover{
        border:1px solid rgb(218,160,103) !important;
        color:rgb(218,160,103) !important;
        // transform:scale(1.05);
    }

    &:hover ${ArrowIcon}{
        color:rgb(218,160,103) !important;
    }

    &:hover ${MyCloseIcon} {
        color:rgb(218,160,103) !important;
    }
`;



// export const MyNavLink = styled(NavLink)`
//     text-decoration: none;
//     color:#000;
//     font-family:Bnazanin;
//     font-size:2rem;

//     &:hover{
//         text-decoration: none;
//     }
// `;

export const MyNavLink = styled.a`
    text-decoration: none;
    color:#000;
    font-family:Bnazanin;
    font-size:2rem;

    &:hover{
        text-decoration: none;
    }
`;

export const IconContainer = styled.div`
    margin-left:2rem;
`;

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction:column;
`;

export const ListItem = styled.div`
    padding: 0 1.5rem;
    display:flex;
    align-items:center;
    // padding:1rem;
    transition:all .3s;
    color:#fff;
    &:hover{
        // background-color:#bf4f7b;
        background-color:rgb(218,160,103);
        color:#fff;
    }

    &:hover a{
        text-decoration:none;
        color:#fff;
    }

    &:hover ${MyListIcon}{
        color:#fff;
    }

    &:hover ${ArrowIcon}{
        color:#fff;
    }
`;

export const ListLink = styled.a`
    color: white;
    text-decoration: none;
`;

export const ConnectionIcon = styled(AssignmentIndIcon)`
    font-size:2.5rem !important;
    color:#000;

    &:hover{
        color:#bf4f7b;
    }
`;

export const ConnectionBox = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const TitleBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

