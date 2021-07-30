import {HeaderContainer , TitleHeaderContainer,HeadercontextContainer,TitleHeader,
    HeaderImageContainer,HeaderImage,SubTitleHeader,
    TextContainer,Text,TextSpan} from './header.styles';
import headerFood from '../../../assets/img/food.jpg';
const Header = () =>{
    return(
        <HeaderContainer>
            <HeadercontextContainer>
                <TitleHeaderContainer>
                    <TitleHeader>سفارش آنلاین غذا</TitleHeader>
                    <TextContainer>
                        <Text><TextSpan></TextSpan> ویژگی ما <TextSpan></TextSpan></Text>
                    </TextContainer>
                    <SubTitleHeader>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</SubTitleHeader>
                </TitleHeaderContainer>

                <HeaderImageContainer>
                    <HeaderImage src={headerFood} 
                        alt="Picture of the food"
                        width={500}
                        height={600}
                    />
                </HeaderImageContainer>
               
                
            </HeadercontextContainer>
        </HeaderContainer>
    )
};

export default Header;