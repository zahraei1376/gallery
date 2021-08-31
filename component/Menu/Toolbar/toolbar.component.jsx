import React ,{useState} from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
// import ListImag from '../../../asset/img/start2.png'; 
// import ListImag from '../../../asset/img/horseLogo.png'; 
import { useHistory } from "react-router-dom";
import {ToolbarContainer,ToolbarInfoContainer,ToolbarInfo,DrawerContainer,ToolbarInfoBack,
  IconContainer,MyListIcon ,MyCloseIcon,ListContainer,ToolbarInfoText,List ,
  ListItem ,ListImg,ImgContainer,MyNavLink,ArrowIcon,ArrowIconButton,ListLink,
  ConnectionBox,ConnectionIcon,TitleBox,SubTitle,Title} from './toolbar.styles';
/////////////////////////////
const ITEMS = [
  // {rol:'admin', text:'ورود' , url:'/',icon:<MyListIcon/>},
  {rol:'admin', text:'مدیریت دسته بندی' , url:'/managerCateroryWeblog',icon:<MyListIcon/>},
  {rol:'admin', text:'مدیریت مطالب' , url:'/managerTextWeblog',icon:<MyListIcon/>},
  {rol:'admin', text:'مدیریت دسته بندی' , url:'/managerCateroryWeblog',icon:<MyListIcon/>},
  {rol:'admin', text:'مدیریت مطالب' , url:'/managerTextWeblog',icon:<MyListIcon/>},
  {rol:'admin', text:'مدیریت دسته بندی' , url:'/managerCateroryWeblog',icon:<MyListIcon/>},
  {rol:'admin', text:'مدیریت مطالب' , url:'/managerTextWeblog',icon:<MyListIcon/>},
]
//////////////////////////////////////////////////////////////
const Toolbar = (props) =>{
  // const [clicked,setClicked] = useState(false);
  return(
    <ToolbarContainer>
        <ArrowIconButton 
        onClick={() =>props.setClicked(!props.clicked)}
        >{props.clicked ? <MyCloseIcon/> : <ArrowIcon/>}</ArrowIconButton>
        {/* <ToolbarInfoBack show = {clicked ? true : null}>
        <ToolbarInfoContainer show = {clicked ? true : null}>
          <ToolbarInfoText show = {clicked ? true : null}>
            <ConnectionBox>
              <ConnectionIcon/>
              <ConnectionIcon/>
              <ConnectionIcon/>
              <ConnectionIcon/>
            </ConnectionBox>
            <TitleBox>
                <Title>سفارش غذای آنلاین</Title>
                <SubTitle>آسان،راحت ، بدون زحمت</SubTitle>
            </TitleBox>
          </ToolbarInfoText>

          <ToolbarInfo show = {clicked ? true : null}>
            <ListContainer>
              <ListItem onClick={()=>handleUrl('/managerTextWeblog')}>
                <IconContainer><MyListIcon/></IconContainer> 
                <MyNavLink href ='/managerTextWeblog'>مدیریت منابع</MyNavLink>
              </ListItem>
              <ListItem onClick={()=>handleUrl('/managerTextWeblog')}>
                <IconContainer><MyListIcon/></IconContainer> 
                <MyNavLink href ='/managerTextWeblog'>مدیریت منابع</MyNavLink>
              </ListItem>
            </ListContainer>
            <ListContainer>
              <ListItem onClick={()=>handleUrl('/managerTextWeblog')}>
                <IconContainer><MyListIcon/></IconContainer> 
                <MyNavLink href ='/managerTextWeblog'>مدیریت منابع</MyNavLink>
              </ListItem>
              <ListItem onClick={()=>handleUrl('/managerTextWeblog')}>
                <IconContainer><MyListIcon/></IconContainer> 
                <MyNavLink href ='/managerTextWeblog'>مدیریت منابع</MyNavLink>
              </ListItem>
            </ListContainer>
            <ListContainer>
              <ListItem onClick={()=>handleUrl('/managerTextWeblog')}>
                <IconContainer><MyListIcon/></IconContainer> 
                <MyNavLink href ='/managerTextWeblog'>مدیریت منابع</MyNavLink>
              </ListItem>
              <ListItem onClick={()=>handleUrl('/managerTextWeblog')}>
                <IconContainer><MyListIcon/></IconContainer> 
                <MyNavLink href ='/managerTextWeblog'>مدیریت منابع</MyNavLink>
              </ListItem>
            </ListContainer>
          </ToolbarInfo>
          
        </ToolbarInfoContainer>
        </ToolbarInfoBack> */}

        {/* /////////////////////////
         */}

        
       
    </ToolbarContainer>
  )
}

const mapStateToProps = state => ({
  currentUser:state.user.currentUser,
});

export  default connect(mapStateToProps , null)(Toolbar);
