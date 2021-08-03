import  React , {useState} from 'react';
import { connect } from 'react-redux';
// import { useHistory } from "react-router-dom";
import Toolbar from './Toolbar/toolbar.component';
import PopoverPopupState from './profileBox/propfileBox.component';
import {NavberContainer,UserIconButton ,MyUserIcon ,ProfileBox,
    LoginButtonContainer,LoginButton,LogoImg ,InfoContainer,
    LogoContainer,Logo} from './Navbar.styles';
import logo from '../../../assets/img/logo1.png';
import { useRouter } from 'next/router';
import ToolbarItems from './Toolbar/ToolbarItem.component';

const MyNavbar = ({currentUser}) =>{
    const [clicked,setClicked] = useState(false);
    /////////////////////////////
    // let history = useHistory();
    const router = useRouter()
    /////////////////////////////
    return (
        <NavberContainer>
            <LogoContainer>
                    <Logo src={logo} 
                    // onClick={() => router.push('/', undefined, { shallow: true })}
                    // onClick={()=> history.push('/')} 
                    onClick={()=> router.push('/')} 
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
                        // onClick={() => router.push('/login', undefined, { shallow: true })}
                        // onClick={()=> history.push('/login')}
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