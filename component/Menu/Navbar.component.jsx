import  React , {useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Toolbar from './Toolbar/toolbar.component';
import SearchBox from '../searchBox/searchBox.component';
import {NavberContainer,UserIconButton ,MyUserIcon ,ProfileBox,
    LoginButtonContainer,LoginButton,LogoImg ,InfoContainer,
    LogoContainer,Logo , SearchBoxContaiber} from './Navbar.styles';
import logo from '../../assets/img/galleryLg.png';
import { useRouter } from 'next/router';
import ToolbarItems from './Toolbar/ToolbarItem.component';
import { Tooltip } from '@material-ui/core';
import Cookies from 'universal-cookie';

const MyNavbar = ({currentUser}) =>{
    /////////////////////////////
    const [clicked,setClicked] = useState(false);
    /////////////////////////////
    const router = useRouter()
    /////////////////////////////
    const [scrolling,setScrolling] = useState(false);
    ///////////////////////////////////////////////////////////
    var cookies = new Cookies();
    ///////////////////////////////////////////////////////////
    useEffect(()=>{
        console.log("cookies.get('user')" ,cookies.get('user'));
      window.addEventListener('scroll', scrollFunction);
      return () => window.removeEventListener('scroll', scrollFunction);
    },[]);
    ////////////////////////////////////////////
    const scrollFunction = () => {
      var y = window.scrollY;
      if ( y >= 170) {
        if(!scrolling){
            setScrolling(true);
        }
      }else{
          setScrolling(false);
      }
    } 
    //////////////////////////////////////////////
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
                {/* {currentUser ? <Tooltip  placement="bottom" title="پنل کاربری" ><UserIconButton onClick={()=> router.push('/profile')} >
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
                } */}

                {cookies.get('user') ? 
                    <Tooltip  placement="bottom" title="پنل کاربری" >
                        <UserIconButton onClick={()=> router.push('/profile')} >
                            <MyUserIcon />
                        </UserIconButton>
                    </Tooltip> : ''
                }

                {!cookies.get('user') ? 
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