import {
    FooterContainer , 
    FooterInfo ,
    FooterImage ,
    FooterTitle ,
    FooterLinks,
    FooterItem,
    FooterLink ,
    FooterUl,
    FooterUlTitle,
    SocialMediaContainer,
    SocialMediadisc,
    SocialMediaLinks,
    SocialMediaLinksIcon,
    LogoContainer,
    Logo,
    ButtonContainer,
    Button,
} from './footer.styles';
import { useRouter } from 'next/router';
import logo from '../../assets/img/galleryLg.png';
import SendIcon from '@material-ui/icons/Send';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () =>{
    /////////////////////////////
    const router = useRouter()
    /////////////////////////////
    return (
        <FooterContainer>
            {/* <FooterTitle>اسب های من</FooterTitle> */}
            <LogoContainer>
                <Logo src={logo}
                onClick={()=> router.push('/')} 
                />
            </LogoContainer>
            <FooterInfo>
                {/* <FooterImage src={FooterImg} /> */}
                <FooterLinks>
                    <FooterUl>
                        <FooterUlTitle>نمونه گزارش ها</FooterUlTitle>
                        <FooterItem><FooterLink href="#">صفحه تماس با ما</FooterLink></FooterItem>
                        <FooterItem><FooterLink href="#">صفحه تماس با ما</FooterLink></FooterItem>
                        {/* <FooterItem><FooterLink href="#">صفحه تماس با ما</FooterLink></FooterItem>
                        <FooterItem><FooterLink href="#">صفحه تماس با ما</FooterLink></FooterItem> */}
                    </FooterUl>
                    <FooterUl>
                        <FooterUlTitle>قوانین و مقررات</FooterUlTitle>
                        <FooterItem><FooterLink href="#">صفحه تماس با ما</FooterLink></FooterItem>
                        <FooterItem><FooterLink href="#">صفحه تماس با ما</FooterLink></FooterItem>
                        {/* <FooterItem><FooterLink href="#">صفحه تماس با ما</FooterLink></FooterItem>
                        <FooterItem><FooterLink href="#">صفحه تماس با ما</FooterLink></FooterItem> */}
                    </FooterUl>
                    <ButtonContainer>
                        <Button
                        // onClick={() => router.push('/login', undefined, { shallow: true })}
                        // onClick={()=> history.push('/login')}
                        onClick={()=> router.push('/login')} 
                        >تماس با ما</Button>
                    </ButtonContainer>
                </FooterLinks>
                <SocialMediaContainer>
                    <SocialMediaLinks>
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
                    </SocialMediaLinks>
                    <SocialMediadisc>طراحی و تولید زهسان-ایران سال 1401-1400</SocialMediadisc>
                </SocialMediaContainer>
            </FooterInfo>
            
        </FooterContainer>
    )
};

export default Footer;