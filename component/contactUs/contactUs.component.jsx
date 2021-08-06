import { ProductButton } from '../productHomePage/productHomePage.styles';
import {Container ,Title,Button, ButtonContainer, ContactContainer, Content, ContentTitle, ContenDescription} from './contactUs.styles';
import Cta from './cta.component';

const ContactUs = () =>{
    return(
        <Container>
            <Cta/>
            <ContactContainer>
                <Title>محیطی زیبا با هم یاری</Title>
                <Content>
                    <ContentTitle>ارتباط با ما</ContentTitle>
                    <ContenDescription>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
                    </ContenDescription>

                    <ButtonContainer>
                        <Button
                        // onClick={() => router.push('/login', undefined, { shallow: true })}
                        // onClick={()=> history.push('/login')}
                        onClick={()=> router.push('/login')} 
                        >تماس با ما</Button>
                    </ButtonContainer>
                </Content>
            </ContactContainer>
           
        </Container>
    )
}

export default ContactUs;