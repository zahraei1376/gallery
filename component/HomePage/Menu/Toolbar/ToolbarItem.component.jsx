import {ToolbarContainer,ToolbarInfoContainer,ToolbarInfo,DrawerContainer,ToolbarInfoBack,
    IconContainer,MyListIcon ,MyCloseIcon,ListContainer,ToolbarInfoText,List ,
    ListItem ,ListImg,ImgContainer,MyNavLink,ArrowIcon,ArrowIconButton,ListLink,
    ConnectionBox,ConnectionIcon,TitleBox,SubTitle,Title} from './toolbar.styles';
const ToolbarItems = ({clicked}) =>{
    return(
        <ToolbarInfoBack show = {clicked ? true : null}>
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
        </ToolbarInfoBack>
    )
}

export default ToolbarItems;