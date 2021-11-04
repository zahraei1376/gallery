import { useRouter } from 'next/router';
import {ToolbarContainer,ToolbarInfoContainer,ToolbarInfo,DrawerContainer,ToolbarInfoBack,
    IconContainer,MyListIcon ,MyCloseIcon,ListContainer,ToolbarInfoText,List ,
    ListItem ,ListImg,ImgContainer,MyNavLink,ArrowIcon,ArrowIconButton,ListLink,
    ConnectionBox,ConnectionIcon,TitleBox,SubTitle,Title,IconBox,
    MyInstagramIcon,MyTelegramIcon,MyFacebookIcon,MyMailOutlineIcon,
  } from './toolbar.styles';

const ToolbarItems = ({clicked , position}) =>{
  /////////////////////////////////////////////////////////////
  const router = useRouter();
  ////////////////////////////////////////////////////////////
  const handleUrl = (url) =>{
    router.push(url);
  }
    return(
        <ToolbarInfoBack show = {clicked ? "true" : null} position={position ? position : null}>
        <ToolbarInfoContainer show = {clicked ? "true" : null}>
          <ToolbarInfo show = {clicked ? "true" : null}>
            <ListContainer>
              <ListItem onClick={()=>handleUrl('/register')}>
                <MyNavLink 
                href ='/register'
                >ثبت نام</MyNavLink>
                <IconContainer><MyListIcon/></IconContainer> 
              </ListItem>

              <ListItem onClick={()=>handleUrl('/login')}>
                <MyNavLink 
                href ='/login'
                >ورود</MyNavLink>
                <IconContainer><MyListIcon/></IconContainer> 
              </ListItem>
            </ListContainer>

            <ListContainer>
              
              <ListItem onClick={()=>handleUrl('/profile')}>
              <MyNavLink 
              href ='/profile'
              >تغییر اطلاعات شخصی</MyNavLink>
                <IconContainer><MyListIcon/></IconContainer> 
              </ListItem>
              <ListItem onClick={()=>handleUrl('/profile')}>
                <MyNavLink 
                href ='/profile'
                >عکس های ذخیره شده</MyNavLink>
                <IconContainer><MyListIcon/></IconContainer> 
              </ListItem>
            </ListContainer>

            <ListContainer>
              <ListItem onClick={()=>handleUrl('/profile')}>
                <MyNavLink 
                href ='/profile'
                >بارگزاری عکس</MyNavLink>
                <IconContainer><MyListIcon/></IconContainer> 
              </ListItem>
              <ListItem onClick={()=>handleUrl('/profile')}>
                <MyNavLink 
                href ='/profile'
                >پنل کاربری</MyNavLink>
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