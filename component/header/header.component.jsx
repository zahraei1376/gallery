import {HeaderContainer , MyImage , HeaderContent , SearchBoxContaiber , HeaderTitle} from './header.styles';
import header from '../../assets/img/wallpaper/1 (173).jpg';
import SearchBox from '../searchBox/searchBox.component';

const Header = () => {
    return(
        <HeaderContainer>
            <MyImage 
                src={header} 
                layout='fill'
                alt={`Gallery image`} 
            />
            <HeaderContent >
                <HeaderTitle>بهترین عکسها و فیلمهای رایگان موجود در سهام توسط سازندگان با استعداد.</HeaderTitle>
                <SearchBoxContaiber>
                    <SearchBox/>
                </SearchBoxContaiber>
            </HeaderContent>
            
        </HeaderContainer>
    )
};

export default Header;