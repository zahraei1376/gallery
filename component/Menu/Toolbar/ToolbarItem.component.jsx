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

const ToolbarItems = ({ clicked, position, setClicked }) => {
  const router = useRouter();

  const handleUrl = (url) => {
    router.push(url);
  }

  const handleClose = () => {
    console.log("11111111");
    if (clicked) {
      console.log("2222222");
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
            <ListItem onClick={() => handleUrl('/profile')}>
              <MyNavLink
                href='/profile'
              >پنل کاربری
              </MyNavLink>
              <IconContainer><FaceRoundedNavIcon /></IconContainer>
            </ListItem>
            <ListItem onClick={() => handleUrl('/login')}>
              <MyNavLink
                href='/login'
              >ورود</MyNavLink>
              <IconContainer><LoginNavIcon /></IconContainer>
            </ListItem>
          </ListContainer>
          <ListContainer>
            <ListItem onClick={() => handleUrl('/profile')}>
              <MyNavLink
                href='/profile'
              >تغییر اطلاعات شخصی</MyNavLink>
              <IconContainer><ManageAccountsRoundedNavIcon /></IconContainer>
            </ListItem>
            <ListItem onClick={() => handleUrl('/profile')}>
              <MyNavLink
                href='/profile'
              >بارگزاری عکس</MyNavLink>
              <IconContainer><CloudUploadRoundedNavIcon /></IconContainer>
            </ListItem>
          </ListContainer>
          <ListContainer>
            <ListItem onClick={() => handleUrl('/mySaved')}>
              <MyNavLink
                href='/mySaved'
              >عکس های ذخیره شده</MyNavLink>
              <IconContainer><CloBookmarkNavIcon /></IconContainer>
            </ListItem>
            <ListItem onClick={() => handleUrl('/showAllTopic')}>
              <MyNavLink
                href='/showAllTopic'
              >همه عنوان ها</MyNavLink>
              <IconContainer><TocRoundedNavIcon /></IconContainer>
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