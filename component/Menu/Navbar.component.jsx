import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Toolbar from './Toolbar/toolbar.component';
// import SearchBox from '../searchBox/searchBox.component';
import {
    NavberContainer, UserIconButton, MyUserIcon,
    LoginButtonContainer, LoginButton, InfoContainer,
    LogoContainer, Logo, SearchBoxContaiber, LogoAndSearchContainer
} from './Navbar.styles';
import logo from '../../assets/img/galleryLg.png';
import { useRouter } from 'next/router';
import ToolbarItems from './Toolbar/ToolbarItem.component';
import { Tooltip } from '@material-ui/core';
import Cookies from 'universal-cookie';
import SearchBox from '../searchBox/searchBox.component';

const MyNavbar = ({ currentUser }) => {
    const [clicked, setClicked] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const router = useRouter();
    var cookies = new Cookies();

    useEffect(() => {
        window.addEventListener('scroll', scrollFunction);
        return () => window.removeEventListener('scroll', scrollFunction);
    }, []);

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

    return (
        <NavberContainer scroll={scrolling ? "true" : null}>
            <LogoAndSearchContainer>
                <LogoContainer>
                    <Logo src={logo}
                        onClick={() => router.push('/')}
                    />
                </LogoContainer>
                <SearchBoxContaiber scroll={scrolling ? "true" : null}>
                    {/* <SearchBox /> */}
                    <SearchBox segestion="true" scroll={scrolling ? "true" : null} />
                </SearchBoxContaiber>
            </LogoAndSearchContainer>

            <InfoContainer>
                {cookies.get('user') ?
                    <Tooltip placement="bottom" title={<h1 style={{ fontSize: "1.5rem" }}>پنل کاربری</h1>}>
                        <UserIconButton onClick={() => router.push('/profile')} >
                            <MyUserIcon />
                        </UserIconButton>
                    </Tooltip> : ''
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
                <ToolbarItems clicked={clicked} setClicked={setClicked} />
            </InfoContainer>
        </NavberContainer>
    )
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, null)(MyNavbar);