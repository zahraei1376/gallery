import  React , {useState } from 'react';
import { connect } from 'react-redux';
import Toolbar from './Toolbar/toolbar.component';
import SearchBox from '../searchBox/searchBox.component';
import PopoverPopupState from './profileBox/propfileBox.component';
import {NavberContainer,UserIconButton ,MyUserIcon ,ProfileBox,
    LoginButtonContainer,LoginButton,LogoImg ,InfoContainer,
    LogoContainer,Logo , SearchBoxContaiber,Container} from './Navbar2.styles';
import logo from '../../assets/img/galleryLg.png';
import { useRouter } from 'next/router';
import ToolbarItems from './Toolbar/ToolbarItem.component';
import ShowTopicsForGallery from '../showTopicsForAnotherPage/showTopics.component';

const MyNavbar = ({currentUser , scrolling}) =>{
    /////////////////////////////
    const [clicked,setClicked] = useState(false);
    /////////////////////////////
    const router = useRouter()
    /////////////////////////////
    return (
        <Container scroll = {scrolling === true ? "true" : null}>
        <NavberContainer scroll = {scrolling === true ? "true" : null}>
            <LogoContainer>
                <Logo src={logo}
                onClick={()=> router.push('/')} 
                />
            </LogoContainer>
            <SearchBoxContaiber  scroll = {scrolling === true ? "true" : null}>
                <SearchBox/>
            </SearchBoxContaiber>
            
            <InfoContainer>
                {currentUser ? <UserIconButton>
                    <PopoverPopupState/>
                </UserIconButton> : ''
                }
                {!currentUser ? 
                    <LoginButtonContainer>
                        <LoginButton 
                        onClick={()=> router.push('/login')} 
                        >ورود</LoginButton>
                    </LoginButtonContainer> 
                    : '' 
                }
                
                <Toolbar clicked={clicked} setClicked={setClicked} />
                <ToolbarItems clicked={clicked} position = {true} />
                
                
            </InfoContainer>
            
        </NavberContainer>
        {/* <ShowTopicsForGallery/> */}
        </Container>
    )
};

const mapStateToProps = state => ({
    currentUser:state.user.currentUser,
});

export  default connect(mapStateToProps , null)(MyNavbar);