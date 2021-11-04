import  React , {useState } from 'react';
import { connect } from 'react-redux';
import Toolbar from './Toolbar/toolbar.component';
import SearchBox from '../searchBox/searchBox.component';
import PopoverPopupState from './profileBox/propfileBox.component';
import {NavberContainer,UserIconButton ,MyUserIcon ,ProfileBox,
    LoginButtonContainer,LoginButton,LogoImg ,InfoContainer,
    LogoContainer,Logo , SearchBoxContaiber} from './Navbar.styles';
import logo from '../../assets/img/galleryLg.png';
import { useRouter } from 'next/router';
import ToolbarItems from './Toolbar/ToolbarItem.component';
import { Tooltip } from '@material-ui/core';

const MyNavbar = ({currentUser , scrolling}) =>{
    /////////////////////////////
    const [clicked,setClicked] = useState(false);
    /////////////////////////////
    const router = useRouter()
    /////////////////////////////
    return (
        <NavberContainer scroll = {scrolling ? "true" : null}>
            <LogoContainer>
                <Logo src={logo}
                onClick={()=> router.push('/')} 
                />
            </LogoContainer>
            <SearchBoxContaiber  scroll = {scrolling ? "true" : null}>
                <SearchBox/>
            </SearchBoxContaiber>
            
            <InfoContainer>
                {currentUser ? <Tooltip  placement="bottom" title="پنل کاربری" ><UserIconButton onClick={()=> router.push('/profile')} >
                    {/* <PopoverPopupState/> */}
                    <MyUserIcon />
                </UserIconButton></Tooltip> : ''
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
        </NavberContainer>
    )
};

const mapStateToProps = state => ({
    currentUser:state.user.currentUser,
});

export  default connect(mapStateToProps , null)(MyNavbar);