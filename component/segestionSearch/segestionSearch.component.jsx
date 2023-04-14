import {
    SegeestionContainer, SegestionContent, SegestionBox, NewestSection,
    NewestBox, NewestTitle, NewestImageContainer, NewestImage
} from './segestionSearch.styles';
import { newestCategory } from '../../generalMethod/topics';
import { useRouter } from 'next/router';

const SegestionSearch = ({ showSegesion, setShowSegestion, result, segestion }) => {
    const router = useRouter()
    const handleSearch = (name) => {
        setShowSegestion(false);
        router.push({
            pathname: '/gallery',
            query: { images: name }
        });
    }
    return (
        <SegeestionContainer show={showSegesion ? showSegesion : null}>
            <SegestionContent result={result && result.length > 0}>
                {
                    result && result.length > 0 ? result.map((res, index) => (
                        <SegestionBox onClick={() => handleSearch(res.title)} key={index}>
                            {res.title}
                        </SegestionBox>
                    )) : ""
                }
            </SegestionContent>
            <NewestSection segestion={segestion}>
                {
                    newestCategory && newestCategory.length > 0 ? newestCategory.map((res, index) => (
                        <NewestBox onClick={() => handleSearch(res.title)} key={index} segestion={segestion}>
                            <NewestTitle>
                                {res.title}
                            </NewestTitle>
                            <NewestImageContainer>
                                <NewestImage src={res.src} layout="fill"></NewestImage>
                            </NewestImageContainer>
                        </NewestBox>
                    )) : ""
                }
            </NewestSection>
            {/* <BackDrop show = {showSegesion ? showSegesion :null} onClick = {() =>setShowSegestion(false)} /> */}
        </SegeestionContainer>
    )
};

export default SegestionSearch;