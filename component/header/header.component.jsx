import { HeaderContainer, MyImage, HeaderContent, SearchBoxContaiber, HeaderTitle, MyProfileContainer } from './header.styles';
import SearchBox from '../searchBox/searchBox.component';
import ShowTopics from '../showTopics/showTopics.component';
import PopupMyProfile from './myProfile.component';
import headerPic from '../../public//img/header/header-12.jpg';

const Header = () => {
    return (
        <HeaderContainer>
            <MyImage
                src={headerPic}
                layout='fill'
                alt={`Gallery image`}
            />
            <HeaderContent >
                <HeaderTitle>بهترین عکسها و فیلمهای رایگان موجود در گالری توسط سازندگان با استعداد</HeaderTitle>
                <SearchBoxContaiber>
                    <SearchBox />
                </SearchBoxContaiber>
                <ShowTopics />
            </HeaderContent>
            <MyProfileContainer>
                <PopupMyProfile />
            </MyProfileContainer>

        </HeaderContainer>
    )
};

export default Header;