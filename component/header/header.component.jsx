import {HeaderContainer , MyImage , HeaderContent , SearchBoxContaiber , HeaderTitle} from './header.styles';
import header from '../../assets/img/wallpaper/1 (173).jpg';
import SearchBox from '../searchBox/searchBox.component';
import ShowTopics from '../showTopics/showTopics.component';

const Header = () => {
    return(
        <HeaderContainer>
            <MyImage 
                src={header} 
                layout='fill'
                alt={`Gallery image`} 
            />
            <HeaderContent >
                <HeaderTitle>بهترین عکسها و فیلمهای رایگان موجود در 'گالری' توسط سازندگان با استعداد</HeaderTitle>
                <SearchBoxContaiber>
                    <SearchBox/>
                </SearchBoxContaiber>
                <ShowTopics/>
            </HeaderContent>
            
        </HeaderContainer>
    )
};

export default Header;