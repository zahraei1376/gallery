import { ProductButton } from '../productHomePage/productHomePage.styles';
import {Container ,Text} from './cta.styles';

const Cta = () =>{
    return(
        <Container>
            <Text>برای مشاهده کارهای ما آماده اید ؟ </Text>
            <ProductButton>
                نمایش کار های ما
            </ProductButton>
        </Container>
    )
}

export default Cta;