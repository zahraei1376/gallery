import  React , {useState } from 'react';
import { connect } from 'react-redux';
import Toolbar from './Toolbar/toolbar.component';
import SearchBox from '../searchBox/searchBox.component';
import PopoverPopupState from './profileBox/propfileBox.component';
import {NavberContainer,UserIconButton ,MyUserIcon ,ProfileBox,
    LoginButtonContainer,LoginButton,LogoImg ,InfoContainer,SearchAndInfoContainer,
    LogoContainer,Logo , SearchBoxContaiber} from './Navbar2.styles';
import logo from '../../assets/img/galleryLg.png';
import { useRouter } from 'next/router';
import ToolbarItems from './Toolbar/ToolbarItem.component';

const MyNavbar = ({currentUser , scrolling , text}) =>{
    /////////////////////////////
    const [clicked,setClicked] = useState(false);
    /////////////////////////////
    const router = useRouter()
    /////////////////////////////
    return (
        <NavberContainer scroll = {scrolling ? true : null} id="navbar2">
            <LogoContainer>
                <Logo src={logo}
                onClick={()=> router.push('/')} 
                />
            </LogoContainer>
            <SearchAndInfoContainer>
            <SearchBoxContaiber 
            // segestion = "true" scroll = {scrolling ? true : null}
            >
                <SearchBox segestion = "true" clicked={clicked} text={text} scroll = {scrolling ? true : null} />
            </SearchBoxContaiber>
            
            <InfoContainer>
                {currentUser ? <UserIconButton onClick={()=> router.push('/profile')} >
                    {/* <PopoverPopupState/> */}
                    <MyUserIcon />
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
                <ToolbarItems clicked={clicked} />
                
                
            </InfoContainer>
            </SearchAndInfoContainer>
        </NavberContainer>
    )
};

const mapStateToProps = state => ({
    currentUser:state.user.currentUser,
});

export  default connect(mapStateToProps , null)(MyNavbar);