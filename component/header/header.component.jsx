import { useEffect , useState } from 'react';
import {HeaderContainer , MyImage , HeaderContent , SearchBoxContaiber , HeaderTitle} from './header.styles';
import header from '../../assets/img/wallpaper/1 (173).jpg';
import SearchBox from '../searchBox/searchBox.component';
import ShowTopics from '../showTopics/showTopics.component';

const Header = () => {
    const [src , setSrc] = useState(header);
    useEffect(() => {
        setSrc(`/img/header/header-${Math.ceil(Math.random() * 10) + 1}.jpg`);
    } , []);

    return(
        <HeaderContainer>
            <MyImage 
                src={src}
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