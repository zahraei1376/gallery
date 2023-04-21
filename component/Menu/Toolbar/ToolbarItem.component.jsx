import { useRouter } from 'next/router';
import {
  CloBookmarkNavIcon,
  CloudUploadRoundedNavIcon,
  ConnectionBox,
  FaceRoundedNavIcon,
  IconBox,
  IconContainer,
  ListContainer,
  ListItem,
  LoginNavIcon,
  ManageAccountsRoundedNavIcon,
  MyFacebookIcon,
  MyInstagramIcon,
  MyMailOutlineIcon,
  MyNavLink,
  MyTelegramIcon,
  SubTitle, Title,
  TitleBox,
  TocRoundedNavIcon,
  ToolbarInfo,
  ToolbarInfoBack,
  ToolbarInfoContainer,
  ToolbarInfoText
} from './toolbar.styles';
import Cookies from 'universal-cookie';

const ToolbarItems = ({ clicked, position, setClicked }) => {
  const router = useRouter();
  const cookies = new Cookies();

  const handleUrl = (url) => {
    router.push(url);
  }

  const handleClose = () => {
    if (clicked) {
      setTimeout(() => {
        setClicked(false);
      }, 100);
    }
  }

  return (
    <ToolbarInfoBack show={clicked ? "true" : null} position={position ? position : null} onBlur={handleClose}>
      <ToolbarInfoContainer show={clicked ? "true" : null}>
        <ToolbarInfo show={clicked ? "true" : null}>
          <ListContainer>

            {!cookies.get('user') ?
              <ListItem onClick={() => handleUrl('/login')}>
                <IconContainer><LoginNavIcon /></IconContainer>
                <MyNavLink
                  href='/login'
                >ورود</MyNavLink>
              </ListItem> : ''
            }
            <ListItem onClick={() => handleUrl('/profile')}>
              <IconContainer><FaceRoundedNavIcon /></IconContainer>
              <MyNavLink
                href='/profile'
              >پنل کاربری
              </MyNavLink>
            </ListItem>
            <ListItem onClick={() => handleUrl('/profile')}>
              <IconContainer><ManageAccountsRoundedNavIcon /></IconContainer>
              <MyNavLink
                href='/profile'
              >تغییر اطلاعات شخصی</MyNavLink>
            </ListItem>

            <ListItem onClick={() => handleUrl('/profile')}>
              <IconContainer><CloudUploadRoundedNavIcon /></IconContainer>
              <MyNavLink
                href='/profile'
              >بارگزاری عکس</MyNavLink>
            </ListItem>
            <ListItem onClick={() => handleUrl('/mySaved')}>
              <IconContainer><CloBookmarkNavIcon /></IconContainer>
              <MyNavLink
                href='/mySaved'
              >عکس های ذخیره شده</MyNavLink>
            </ListItem>
            <ListItem onClick={() => handleUrl('/showAllTopic')}>
              <IconContainer><TocRoundedNavIcon /></IconContainer>
              <MyNavLink
                href='/showAllTopic'
              >همه عنوان ها</MyNavLink>
            </ListItem>
          </ListContainer>
        </ToolbarInfo>
        <ToolbarInfoText show={clicked ? "true" : null}>
          <TitleBox>
            <SubTitle>زیبایی های دنیا از دوربین ما</SubTitle>
            <Title>طبیعت ، دنیای ما</Title>
          </TitleBox>
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
          </ConnectionBox>
        </ToolbarInfoText>
      </ToolbarInfoContainer>
    </ToolbarInfoBack>
  )
}

export default ToolbarItems;