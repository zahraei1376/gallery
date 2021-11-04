import {
    FooterContainer , 
    FooterInfo ,
    FooterImage ,
    FooterTitle ,
    FooterLinks,
    FooterItem,
    FooterLink ,
    FooterText,
    FooterUl,
    FooterUlTitle,
    SocialMediaContainer,
    SocialMediadisc,
    SocialMediaLinks,
    SocialMediaLinksIcon,
    FooterBottom,
    LogoContainer,
    Logo,
    ButtonContainer,
    ButtonIconContainer,
    Button,
    LocationIcon,
    PhoneIcon,
    MobileIcon,
    MyEmailIcon,
    ArrowButton,
    ArrowTop,
    LogoSection,
    FooterImageContainer,
} from './footer.styles';
import { useRouter } from 'next/router';
import logo from '../../assets/img/galleryLg.png';
import SendIcon from '@material-ui/icons/Send';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import Image from 'next/image';
import footerLogo from '../../assets/img/footerLog.jpg';
import footerLogo2 from '../../assets/img/footerLog2.jpg';
const Footer = () =>{
    /////////////////////////////
    const router = useRouter()
    /////////////////////////////
    const handleGo = () =>{
        // const elmnt = document.getElementById("navbar2");
        // console.log('elmntelmnt' , elmnt);
        // elmnt.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        // window.scrollTo(0, document.getElementById('navbar2'));
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    return (
        <FooterContainer>
            {/* <FooterTitle>اسب های من</FooterTitle> */}
            <ButtonIconContainer>
                <ArrowButton onClick={handleGo}>
                    <ArrowTop/>
                </ArrowButton>
            </ButtonIconContainer>
            <LogoSection>
                <LogoContainer>
                    <Logo src={logo}
                    onClick={()=> router.push('/')} 
                    />
                </LogoContainer>
                {/* <ButtonContainer>
                    <Button
                    onClick={()=> router.push('/login')} 
                    >تماس با ما</Button>
                </ButtonContainer> */}
            </LogoSection>
            <FooterInfo>
                {/* <FooterImage src={FooterImg} /> */}
                <FooterLinks>
                    <FooterUl>
                        <FooterUlTitle>ما را دنبال کنید</FooterUlTitle>
                        <FooterItem><FooterText href="#">عکس ها در شبکه های اجتماعی</FooterText></FooterItem>
                        <FooterItem><FooterText href="#">برای دریافت جدیدترین عکس های ما ثبت نام کنید</FooterText></FooterItem>
                        <FooterItem>
                            <SocialMediaContainer>
                            <SocialMediaLinks>
                                <SocialMediaLinksIcon aria-label="تلگرام" style={{color:'#fff'}}>
                                    <SendIcon style={{fontSize:'3rem'}} />
                                    </SocialMediaLinksIcon>
                                    <SocialMediaLinksIcon aria-label="اینستاگرام" style={{color:'#fff'}}>
                                        <InstagramIcon style={{fontSize:'3rem'}} />
                                    </SocialMediaLinksIcon>
                                    <SocialMediaLinksIcon aria-label="ایمیل" style={{color:'#fff'}}>
                                        <MailOutlineIcon style={{fontSize:'3rem'}} />
                                    </SocialMediaLinksIcon>
                                    <SocialMediaLinksIcon aria-label="فیس بوک" style={{color:'#fff'}}>
                                        <FacebookIcon style={{fontSize:'3rem'}} />
                                    </SocialMediaLinksIcon>
                                </SocialMediaLinks>
                            </SocialMediaContainer>
                        </FooterItem>
                        
                        
                        <div style={{display:'flex'}}>
                        <FooterImageContainer>
                            <Image src={footerLogo} layout="fill"/>
                        </FooterImageContainer>
                        <FooterImageContainer>
                            <Image src={footerLogo2} layout="fill"/>
                        </FooterImageContainer>
                        </div>
                    </FooterUl>
                    <FooterUl>
                        <FooterUlTitle>تماس با ما</FooterUlTitle>
                        <FooterItem><FooterText href="#">ایران - مازندران - بابل</FooterText><LocationIcon/></FooterItem>
                        <FooterItem><FooterText number="true" href="#">011320459</FooterText><PhoneIcon/></FooterItem>
                        <FooterItem><FooterText href="#" number="true">09357573926</FooterText><MobileIcon/></FooterItem>
                        <FooterItem><FooterText href="#">zahra0a1418@gmail.com</FooterText><MyEmailIcon/></FooterItem>
                    </FooterUl>
                    <FooterUl>
                        <FooterUlTitle>دسترسی سریع</FooterUlTitle>
                        <FooterItem><FooterLink href="/">خانه</FooterLink></FooterItem>
                        <FooterItem><FooterLink href="/login">ورود</FooterLink></FooterItem>
                        <FooterItem><FooterLink href="/register">ثبت نام</FooterLink></FooterItem>
                        <FooterItem><FooterLink href="#">نمایش همه موضوعات</FooterLink></FooterItem>
                    </FooterUl>
                </FooterLinks>
                <FooterBottom>
                    {/* <SocialMediaLinks>
                        <SocialMediaLinksIcon aria-label="تلگرام" style={{color:'#fff'}}>
                            <SendIcon />
                        </SocialMediaLinksIcon>
                        <SocialMediaLinksIcon aria-label="اینستاگرام" style={{color:'#fff'}}>
                            <InstagramIcon />
                        </SocialMediaLinksIcon>
                        <SocialMediaLinksIcon aria-label="ایمیل" style={{color:'#fff'}}>
                            <MailOutlineIcon />
                        </SocialMediaLinksIcon>
                        <SocialMediaLinksIcon aria-label="فیس بوک" style={{color:'#fff'}}>
                            <FacebookIcon />
                        </SocialMediaLinksIcon>
                    </SocialMediaLinks> */}
                    <SocialMediadisc>طراحی و تولید زهسان-ایران سال 1401-1400</SocialMediadisc>
                </FooterBottom>
            </FooterInfo>
            
        </FooterContainer>
    )
};

export default Footer;