import { ProductButton } from '../productHomePage/productHomePage.styles';
import {Container ,Text} from './cta.styles';

const Cta = () =>{
    return(
        <Container>
            <Text>برای مشاهده کارهای ما آماده اید ؟ </Text>
            <ProductButton color="rgba(218,160,103 ,1)">
                نمایش کار های ما
            </ProductButton>
        </Container>
    )
}

export default Cta;