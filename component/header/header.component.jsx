import { useEffect , useState } from 'react';
import {HeaderContainer , MyImage , HeaderContent , SearchBoxContaiber , HeaderTitle , MyProfileContainer} from './header.styles';
import SearchBox from '../searchBox/searchBox.component';
import ShowTopics from '../showTopics/showTopics.component';
import PopupMyProfile from './myProfile.component';

const Header = () => {
    const [src , setSrc] = useState('/img/header/header-12.jpg');
    useEffect(() => {
        // setSrc(`/img/header/header-${Math.ceil(Math.random() * 10) + 1}.jpg`);
        setSrc(`/img/header/header-12.jpg`);
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
            <MyProfileContainer>
                <PopupMyProfile/>
            </MyProfileContainer>
            
        </HeaderContainer>
    )
};

export default Header;