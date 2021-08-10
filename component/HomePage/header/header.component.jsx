import {HeaderContainer , TitleHeaderContainer,HeadercontextContainer,TitleHeader,
    HeaderImageContainer,HeaderImage,SubTitleHeader,
    TextContainer,Text,TextSpan, HeaderBoxes, Box} from './header.styles';
import headerFood from '../../../assets/img/dog1.jpg';
const Header = () =>{
    return(
        <HeaderContainer>
            <HeadercontextContainer>

                
                <TitleHeaderContainer>
                    <TitleHeader>زندگی حیوانات با زهرا</TitleHeader>
                    <TextContainer>
                        <Text><TextSpan></TextSpan> ویژگی ما <TextSpan></TextSpan></Text>
                    </TextContainer>
                    <SubTitleHeader>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</SubTitleHeader>
                </TitleHeaderContainer>

                {/* <HeaderBoxes>
                    <Box></Box>
                    <Box></Box>
                </HeaderBoxes> */}

                {/* <HeaderImageContainer>
                    <HeaderImage src={headerFood} 
                    layout="responsive"
                        alt="Picture of the food"
                        // layout="fill"
                        // layout="fixed"
                        // width={500}
                        // height={600}
                    />
                </HeaderImageContainer> */}
                
               
                
            </HeadercontextContainer>
        </HeaderContainer>
    )
};

export default Header;