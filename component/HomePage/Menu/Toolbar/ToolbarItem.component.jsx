import {ToolbarContainer,ToolbarInfoContainer,ToolbarInfo,DrawerContainer,ToolbarInfoBack,
    IconContainer,MyListIcon ,MyCloseIcon,ListContainer,ToolbarInfoText,List ,
    ListItem ,ListImg,ImgContainer,MyNavLink,ArrowIcon,ArrowIconButton,ListLink,
    ConnectionBox,ConnectionIcon,TitleBox,SubTitle,Title} from './toolbar.styles';

import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const ToolbarItems = ({clicked}) =>{
    return(
        <ToolbarInfoBack show = {clicked ? true : null}>
        <ToolbarInfoContainer show = {clicked ? true : null}>
          <ToolbarInfo show = {clicked ? true : null}>
            <ListContainer>
              <ListItem onClick={()=>handleUrl('/managerTextWeblog')}>
                <MyNavLink href ='/managerTextWeblog'>مدیریت منابع</MyNavLink>
                <IconContainer><MyListIcon/></IconContainer> 
              </ListItem>

              <ListItem onClick={()=>handleUrl('/managerTextWeblog')}>
                <MyNavLink href ='/managerTextWeblog'>مدیریت منابع</MyNavLink>
                <IconContainer><MyListIcon/></IconContainer> 
              </ListItem>
            </ListContainer>

            <ListContainer>
              <ListItem onClick={()=>handleUrl('/managerTextWeblog')}>
                <MyNavLink href ='/managerTextWeblog'>مدیریت منابع</MyNavLink>
                <IconContainer><MyListIcon/></IconContainer> 
              </ListItem>
              <ListItem onClick={()=>handleUrl('/managerTextWeblog')}>
              <MyNavLink href ='/managerTextWeblog'>مدیریت منابع</MyNavLink>
                <IconContainer><MyListIcon/></IconContainer> 
              </ListItem>
            </ListContainer>

            <ListContainer>
              <ListItem onClick={()=>handleUrl('/managerTextWeblog')}>
                <MyNavLink href ='/managerTextWeblog'>مدیریت منابع</MyNavLink>
                <IconContainer><MyListIcon/></IconContainer> 
              </ListItem>
              <ListItem onClick={()=>handleUrl('/managerTextWeblog')}>
                <MyNavLink href ='/managerTextWeblog'>مدیریت منابع</MyNavLink>
                <IconContainer><MyListIcon/></IconContainer> 
              </ListItem>
            </ListContainer>
          </ToolbarInfo>
          
          <ToolbarInfoText show = {clicked ? true : null}>
            <ConnectionBox>
              <InstagramIcon style={{fontSize:'2.5rem',
                color:'#fff', }}/>

              <TelegramIcon style={{fontSize:'2.5rem',
                color:'#fff',marginLeft:'1.5rem' }} />

              <FacebookIcon style={{fontSize:'2.5rem',
                color:'#fff', marginLeft:'1.5rem'}} />

              <MailOutlineIcon style={{fontSize:'2.5rem',
                color:'#fff',marginLeft:'1.5rem' }} />
              {/* <ConnectionIcon/>
              <ConnectionIcon/>
              <ConnectionIcon/> */}
            </ConnectionBox>
            <TitleBox>
                <Title>طبیعت ، دنیای ما</Title>
                <SubTitle>دنیای حیوانات</SubTitle>
            </TitleBox>
          </ToolbarInfoText>
        </ToolbarInfoContainer>
        
        </ToolbarInfoBack>
    )
}

export default ToolbarItems;