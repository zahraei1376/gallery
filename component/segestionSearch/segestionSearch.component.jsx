import {SegeestionContainer, SegestionContent , SegestionBox , NewestSection ,
     NewestBox , NewestTitle ,NewestImageContainer , NewestImage} from './segestionSearch.styles';
import pic from '../../assets/img/logo.png';
import {newestCategory} from '../../generalMethod/topics';
import { BackDrop } from '../searchBox/searchBox.styles';
import { useRouter } from 'next/router';

// const result = [
//     {name:'سلام',},
//     {name:'خوبی',},
//     {name:'چطوری',},
//     {name:'احوال شما',},
//     {name:'برو بابا',},
//     {name:'الو الووو',},
// ];

const SegestionSearch = ({showSegesion, setShowSegestion , result}) =>{
    const router = useRouter()
    const handleSearch = (name) =>{
        setShowSegestion(false);
        console.log('name', name);
        router.push({
            pathname: '/gallery',
            query: { images: name} 
        });
    }
    return(
        <SegeestionContainer show ={showSegesion ? showSegesion :null}>
            <SegestionContent>
                {
                    result && result.length> 0 ? result.map((res , index) =>(
                        <SegestionBox onClick={()=> handleSearch(res.title)} key={index}>
                                {res.title}
                        </SegestionBox>
                    )) : ""
                }
            </SegestionContent>
            <NewestSection>
                {
                    newestCategory && newestCategory.length> 0 ? newestCategory.map((res , index) =>(
                        <NewestBox onClick={()=> handleSearch(res.title)} key={index} 
                        // onClick = {() => history.push(res.url)}
                        >
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