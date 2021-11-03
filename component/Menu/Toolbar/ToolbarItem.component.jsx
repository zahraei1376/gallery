import {ToolbarContainer,ToolbarInfoContainer,ToolbarInfo,DrawerContainer,ToolbarInfoBack,
    IconContainer,MyListIcon ,MyCloseIcon,ListContainer,ToolbarInfoText,List ,
    ListItem ,ListImg,ImgContainer,MyNavLink,ArrowIcon,ArrowIconButton,ListLink,
    ConnectionBox,ConnectionIcon,TitleBox,SubTitle,Title,IconBox,
    MyInstagramIcon,MyTelegramIcon,MyFacebookIcon,MyMailOutlineIcon,
  } from './toolbar.styles';

const ToolbarItems = ({clicked , position}) =>{
  const handleUrl = () =>{

  }
    return(
        <ToolbarInfoBack show = {clicked ? "true" : null} position={position ? position : null}>
        <ToolbarInfoContainer show = {clicked ? "true" : null}>
          <ToolbarInfo show = {clicked ? "true" : null}>
            <ListContainer>
              <ListItem onClick={()=>handleUrl('/')}>
                <MyNavLink 
                // href ='/managerTextWeblog'
                >مدیریت منابع</MyNavLink>
                <IconContainer><MyListIcon/></IconContainer> 
              </ListItem>

              <ListItem onClick={()=>handleUrl('/')}>
                <MyNavLink 
                // href ='/managerTextWeblog'
                >مدیریت منابع</MyNavLink>
                <IconContainer><MyListIcon/></IconContainer> 
              </ListItem>
            </ListContainer>

            <ListContainer>
              <ListItem onClick={()=>handleUrl('/')}>
                <MyNavLink 
                // href ='/managerTextWeblog'
                >مدیریت منابع</MyNavLink>
                <IconContainer><MyListIcon/></IconContainer> 
              </ListItem>
              <ListItem onClick={()=>handleUrl('/')}>
              <MyNavLink 
              // href ='/managerTextWeblog'
              >مدیریت منابع</MyNavLink>
                <IconContainer><MyListIcon/></IconContainer> 
              </ListItem>
            </ListContainer>

            <ListContainer>
              <ListItem onClick={()=>handleUrl('/')}>
                <MyNavLink 
                // href ='/managerTextWeblog'
                >مدیریت منابع</MyNavLink>
                <IconContainer><MyListIcon/></IconContainer> 
              </ListItem>
              <ListItem onClick={()=>handleUrl('/')}>
                <MyNavLink 
                // href ='/managerTextWeblog'
                >مدیریت منابع</MyNavLink>
                <IconContainer><MyListIcon/></IconContainer> 
              </ListItem>
            </ListContainer>
          </ToolbarInfo>
          
          <ToolbarInfoText show = {clicked ? "true" : null}>
            <ConnectionBox>
              <IconBox>
                <MyInstagramIcon />
              </IconBox>

              <IconBox>
                <MyTelegramIcon />
              </IconBox>

              <IconBox>
                <MyFacebookIcon />
              </IconBox>

              <IconBox>
                <MyMailOutlineIcon />
              </IconBox>
              

              {/* <ConnectionIcon/>
              <ConnectionIcon/>
              <ConnectionIcon/> */}
            </ConnectionBox>
            <TitleBox>
                <Title>طبیعت ، دنیای ما</Title>
                <SubTitle>زیبایی های دنیا از دوربین ما</SubTitle>
            </TitleBox>
          </ToolbarInfoText>
        </ToolbarInfoContainer>
        
        </ToolbarInfoBack>
    )
}

export default ToolbarItems;