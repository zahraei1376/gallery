import React , {useState , useEffect} from 'react';
import {IconContainer,MyLockOutlinedIcon,MyPersonOutlineIcon,MyGenderIcon,MyAgeIcon,MyEmailIcon,MyFullNameIcon,SectionRegister ,RegisterBox ,TitleRegister,RegisterFormContainer,
    RegisterForm ,FormGroupContainer,FormGroup,FormGroupBtn,
    FormInput,RegisterLink,FormLabel,RegisterDescContainer ,
    RegisterDesc ,FooterRegister,FooterRegisterText ,FooterRegisterLink,
    LogoContainer,Logo  , StyledLink} from './register.styles';
import {Btn} from '../../generalCss/generalCss.styles';
import MyDropDown from '../../component/Register-Login/myDropDown.component';
import MySnackbar from '../../component/messageBox/messageBox.component';
import { useHistory } from "react-router-dom";
import MySpinner from '../../component/MySpinner/MySpinner.component';
import logo from '../../assets/img/galleryLg.png';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {fixNumbers} from '../../generalMethod/fixedNumber';
const RegisterPage = (props) =>{
    /////////////////////////////
    const router = useRouter()
    /////////////////////////////
    const [fiels,setFiels] = useState({
        username:'',
        pass:'',
        email:'',
        fullName:'',
        age:'',
        gender:'',
    });
    /////////////////////////
    const [showMessage,setShowMessage] = useState(false);
    const [message,setMessage] =useState('');
    const [status,setStatus] = useState(0);
    const [loading,setLoading] = useState(false);
    /////////////////////////
    let history = useHistory();
    /////////////////////////

    const handleSetFeild = (val , param) =>{
        setFiels({...fiels, [param] : val});
    }


    const submitRegister = async(e)=>{
        e.preventDefault();
        setLoading(true);
        if(fiels.username !=""  && fiels.pass !="" && fiels.email !=""  && fiels.fullName !=""){
            const data = {
                username: fiels.username,
                password:fiels.pass,
                email:fiels.email,
                fullName:fiels.fullName,
                age:fiels.age,
                // gender:fiels.gender,
            }
            
            await fetch("/api/register", {
                headers: {
                    'Content-Type': 'application/json'
                    },
                method:"POST",
                body: JSON.stringify(data)
            })
            .then((response)=>{ 
                return response.json();   
            })
            .then((dataRes)=>{ 
                if(dataRes.seccess){
                    setStatus('1')
                    setMessage('با موفقیت ثبت نام شدید!!!');
                    setShowMessage(true);
                    setLoading(false);
                    setTimeout(()=>{
                        router.push('/login');
                    },1000);
                }else{
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
        else{
            setStatus('0')
            setMessage('ابتدا مقادیر خواسته شده را پر کنید');
            setShowMessage(true);
            setLoading(false);
        }


    }

    const handleOnChangeSelect = (val) =>{
        setFiels({...fiels, ['gender'] : val});
    }

    return(
        <SectionRegister>
            <LogoContainer>
                <Logo src={logo}
                onClick={()=> router.push('/')} 
                />
            </LogoContainer>
            <RegisterBox>
                    <RegisterForm action="#">
                        <FormGroupContainer>
                            <FormGroup>
                                <FormInput type="password" placeholder="پسورد" id="pass" required onChange={e => handleSetFeild(e.target.value , 'pass')} />
                                <IconContainer>
                                    <MyLockOutlinedIcon/>
                                </IconContainer>
                            </FormGroup>

                            <FormGroup>
                                <FormInput type="text"  placeholder="نام کاربری" id="username" required onChange={e => handleSetFeild(e.target.value , 'username')} />
                                <IconContainer>
                                    <MyPersonOutlineIcon/>
                                </IconContainer>   
                            </FormGroup>
                        </FormGroupContainer>


                        <FormGroupContainer>
                            <FormGroup>
                                <FormInput type="email" placeholder="ایمیل" id="email" required onChange={e => handleSetFeild(e.target.value , 'email')} />
                                <IconContainer>
                                    <MyEmailIcon/>
                                </IconContainer>
                            </FormGroup>

                            <FormGroup>
                                <FormInput type="text" placeholder="نام و نام خوانوادگی" id="fullName" required onChange={e => handleSetFeild(e.target.value , 'fullName')} />
                                <IconContainer>
                                    <MyFullNameIcon/>
                                </IconContainer>
                            </FormGroup>
                        </FormGroupContainer>

                        <FormGroupContainer>
                            <FormGroup>
                                <FormInput type="number" min="0" placeholder="سن" id="age" required onChange={e => handleSetFeild(e.target.value , 'age')} />
                                <IconContainer>
                                    <MyAgeIcon/>
                                </IconContainer>
                            </FormGroup>

                            <FormGroup>
                                <MyDropDown handleOnChangeSelect={handleOnChangeSelect} />
                                <IconContainer>
                                    <MyGenderIcon/>
                                </IconContainer>
                            </FormGroup>
                        </FormGroupContainer>
                
                        <FormGroupBtn>
                            <Btn variant="contained"
                              bgcolor="rgba(0,0,0,.6)" clr="#fff"
                              onClick={e => submitRegister(e)}>
                            &rarr; ثبت نام 
                            </Btn>
                        </FormGroupBtn>
                        <Link href ='/login' ><StyledLink href ='/login'>برای ورود کلیک کنید</StyledLink></Link>
                    </RegisterForm>
               
            </RegisterBox>
            <FooterRegister>
                <FooterRegisterText>
                    Built by <FooterRegisterLink href="#">Zahra Alipour</FooterRegisterLink>.
                    Copyright &copy; by Zahra Alipour
                </FooterRegisterText>
            </FooterRegister>
            {
                showMessage ? <MySnackbar message={message} status={status} showMessage={showMessage} setShowMessage={setShowMessage} /> : ''
            }
            {
                loading ? <MySpinner/> : ''
            }
        </SectionRegister>
    )
}

export default RegisterPage;