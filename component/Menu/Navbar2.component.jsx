import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Toolbar from './Toolbar/toolbar.component';
import SearchBox from '../searchBox/searchBox.component';
import {
    NavberContainer, UserIconButton, MyUserIcon, ProfileBox,
    LoginButtonContainer, LoginButton, LogoImg, InfoContainer, SearchAndInfoContainer,
    LogoContainer, Logo, SearchBoxContaiber
} from './Navbar2.styles';
import logo from '../../assets/img/galleryLg.png';
import { useRouter } from 'next/router';
import ToolbarItems from './Toolbar/ToolbarItem.component';
import Cookies from 'universal-cookie';
import { LogoAndSearchContainer } from './Navbar.styles';

const MyNavbar = ({ currentUser, text }) => {
    /////////////////////////////
    const [clicked, setClicked] = useState(false);
    /////////////////////////////
    const router = useRouter()
    ///////////////////////////////////////////////////////////
    var cookies = new Cookies();
    ///////////////////////////////////////////////////////////
    const [scrolling, setScrolling] = useState(false);
    ///////////////////////////////////////////////////////////
    useEffect(() => {
        window.addEventListener('scroll', scrollFunction);
        return () => window.removeEventListener('scroll', scrollFunction);
    }, []);
    ////////////////////////////////////////////
    const scrollFunction = () => {
        var y = window.scrollY;
        if (y >= 170) {
            if (!scrolling) {
                setScrolling(true);
            }
        } else {
            setScrolling(false);
        }
    }
    ////////////////////////////////////////////
    return (
        <NavberContainer scroll={scrolling ? true : null} id="navbar2">
            <LogoAndSearchContainer>
                <LogoContainer>
                    <Logo src={logo}
                        onClick={() => router.push('/')}
                    />
                </LogoContainer>
                <SearchBoxContaiber>
                    <SearchBox segestion="true" clicked={clicked} text={text} scroll={scrolling ? true : null} />
                </SearchBoxContaiber>
            </LogoAndSearchContainer>
            <SearchAndInfoContainer>


                <InfoContainer>
                    {/* {currentUser ? <UserIconButton onClick={()=> router.push('/profile')} >
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
                } */}

                    {cookies.get('user') ?
                        <UserIconButton onClick={() => router.push('/profile')} >
                            <MyUserIcon />
                        </UserIconButton> : ''
                    }

                    {!cookies.get('user') ?
                        <LoginButtonContainer>
                            <LoginButton
                                onClick={() => router.push('/login')}
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
    currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, null)(MyNavbar);