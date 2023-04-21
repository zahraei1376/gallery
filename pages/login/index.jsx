import React, { useState } from 'react';
import { setCurrentUser } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import MySnackbar from '../../component/messageBox/messageBox.component';
import {
    IconContainer, MyLockOutlinedIcon, MyPersonOutlineIcon, SectionLogin, LoginBox, TitleLogin, LoginFormContainer,
    LoginForm, FormGroup, FormGroupBtn, FormInput,
    FooterLogin, FooterLoginText, FooterLoginLink, StyledLink, LogoContainer,
    Logo,
    LoginTitle
} from '../../pagesStyles/login.styles';
import { useRouter } from 'next/router';
import { Btn } from '../../generalCss/generalCss.styles';
import MySpinner from '../../component/MySpinner/MySpinner.component';
import Link from 'next/link';
import logo from '../../assets/img/galleryLg.png';
// import { object, string, number, date, InferType } from 'yup';
// import { yupResolver } from "@hookform/resolvers/yup";
import Cookies from 'universal-cookie';

const LoginPage = (props) => {
    const cookies = new Cookies();
    const router = useRouter()
    const [fiels, setFiels] = useState({
        username: '',
        pass: '',
    });
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleSetFeild = (val, param) => {
        setFiels({ ...fiels, [param]: val });
    }

    const submitLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (fiels.username != "" && fiels.pass) {
            const data = {
                username: fiels.username,
                password: fiels.pass,
            }

            await fetch("/api/login", {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(data)
            })
                .then((response) => {
                    return response.json();
                })
                .then((dataRes) => {
                    if (dataRes.seccess) {
                        //////////////////////////
                        // setCookie("user", dataRes.token ? dataRes.token : null, {
                        //     path: "/",
                        //     // maxAge: 3600, // Expires after 1hr
                        //     sameSite: true,
                        // });
                        // cookies.set('user', {key: dataRes.token ? dataRes.token : null}, {path: '/', expires: new Date(Date.now()+2592000)});
                        cookies.set('user', dataRes.token ? dataRes.token : null, { path: '/', expires: new Date(Date.now() + 2592000) });
                        /////////////////////////
                        setStatus('1')
                        setMessage('ورود موفقیت آمیز بود');
                        setShowMessage(true);
                        props.setCurrentUser(dataRes.token ? dataRes.token : null);
                        setLoading(false);
                        setTimeout(() => {
                            router.push('/');
                        }, 1000);
                    } else {
                        setStatus('0')
                        setMessage(dataRes.message)
                        setShowMessage(true);
                        setLoading(false);
                    }

                })
                .catch(err => {
                    setStatus('0')
                    setMessage(err.message)
                    setShowMessage(true);
                    setLoading(false);
                });

        }
        else {
            setStatus('0')
            setMessage('ابتدا مقادیر خواسته شده را پر کنید')
            setShowMessage(true);
            setLoading(false);
        }
    }

    // const validationSchema = Yup.object({
    //     userName: Yup.string().required().min(2, "حداقل 2 کارکتر میباشد")
    //     .max(50, "حداکثر 50 کارکتر میباشد"),
    //     password:Yup.string().required().min(6, "حداقل 6 کارکتر میباشد")
    //     .max(50, "حداکثر 50 کارکتر میباشد"),
    //     // email: Yup.string().email().required(),
    //   });

    //   const initialValues = {
    //     userName: "",
    //     password: "",
    //   };


    //   const onSubmit = (values) => {
    //     alert(JSON.stringify(values, null, 2));
    //   };

    return (
        <SectionLogin>
            <LogoContainer>
                <Logo src={logo}
                    onClick={() => router.push('/')}
                />
            </LogoContainer>
            <LoginBox>
                <LoginForm action="#">
                    <LoginTitle>ورود به دنیای عکس</LoginTitle>
                    <FormGroup>
                        <FormInput type="text" placeholder="نام کاربری" id="username" required onChange={e => handleSetFeild(e.target.value, 'username')} />
                        <IconContainer>
                            <MyPersonOutlineIcon />
                        </IconContainer>
                    </FormGroup>

                    <FormGroup>
                        <FormInput type="password" placeholder="پسورد" id="pass" required onChange={e => handleSetFeild(e.target.value, 'pass')} />
                        <IconContainer>
                            <MyLockOutlinedIcon />
                        </IconContainer>
                    </FormGroup>

                    <FormGroupBtn>
                        <Btn variant="contained" bgcolor="rgba(0,0,0,.6)" clr="#fff" onClick={e => submitLogin(e)} disabled={loading}>
                            &rarr; ورود
                        </Btn>
                    </FormGroupBtn>

                    <Link href='/register' ><StyledLink href='/register'> برای ثبت نام کلیک کنید</StyledLink></Link>
                </LoginForm>

            </LoginBox>
            <FooterLogin>
                <FooterLoginText>
                    Built by <FooterLoginLink href="#">Zahra Alipour</FooterLoginLink>.
                    Copyright &copy; by Zahra Alipour
                </FooterLoginText>
            </FooterLogin>
            {
                showMessage && <MySnackbar message={message} status={status} showMessage={showMessage} setShowMessage={setShowMessage} />
            }
            {
                loading && <MySpinner />
            }
        </SectionLogin>
    )
    /////////////////////////
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(LoginPage);