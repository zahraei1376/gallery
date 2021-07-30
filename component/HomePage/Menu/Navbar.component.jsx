import  React , {useState} from 'react';
import { connect } from 'react-redux';
// import { useHistory } from "react-router-dom";
import Toolbar from './Toolbar/toolbar.component';
import PopoverPopupState from './profileBox/propfileBox.component';
import {NavberContainer,UserIconButton ,MyUserIcon ,ProfileBox,
    LoginButtonContainer,LoginButton,LogoContainer,LogoImg ,InfoContainer} from './Navbar.styles';
import horseLogo from '../../../assets/img/logo.jpg';

const MyNavbar = ({currentUser}) =>{
    /////////////////////////////
    // let history = useHistory();
    /////////////////////////////
    return (
        <NavberContainer>
            <LogoContainer>
                    <LogoImg src={horseLogo} 
                    // onClick={()=> history.push('/')} 
                    />
            </LogoContainer>
            
            <InfoContainer>
                {currentUser ? <UserIconButton>
                    <PopoverPopupState/>
                </UserIconButton> : ''
                }
                {!currentUser ? 
                    <LoginButtonContainer>
                        <LoginButton 
                        // onClick={()=> history.push('/login')}
                        >ورود</LoginButton>
                    </LoginButtonContainer> 
                    : '' 
                }
                <Toolbar />
                
                
            </InfoContainer>
        </NavberContainer>
    )
};

const mapStateToProps = state => ({
    currentUser:state.user.currentUser,
});

export  default connect(mapStateToProps , null)(MyNavbar);