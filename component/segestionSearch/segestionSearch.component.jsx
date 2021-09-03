import {SegeestionContainer, SegestionContent , SegestionBox , NewestSection ,
     NewestBox , NewestTitle ,NewestImageContainer , NewestImage} from './segestionSearch.styles';
import pic from '../../assets/img/logo.png';
import { BackDrop } from '../searchBox/searchBox.styles';

const result = [
    {name:'سلام',},
    {name:'خوبی',},
    {name:'چطوری',},
    {name:'احوال شما',},
    {name:'برو بابا',},
    {name:'الو الووو',},
];

const newestCategory = [
    {name:'سلام',},
    {name:'خوبی',},
    {name:'چطوری',},
    {name:'احوال شما',},
    {name:'برو بابا',},
    {name:'الو الووو',},
]

const SegestionSearch = ({showSegesion, setShowSegestion}) =>{

    const handleSearch = () =>{
        setShowSegestion(false);
    }
    return(
        <SegeestionContainer show ={showSegesion ? showSegesion :null}>
            <SegestionContent>
                {
                    result && result.length> 0 ? result.map((res , index) =>(
                        <SegestionBox onClick={()=> handleSearch()} key={index}>
                                {res.name}
                        </SegestionBox>
                    )) : ""
                }
            </SegestionContent>
            <NewestSection>
                {
                    newestCategory && newestCategory.length> 0 ? newestCategory.map((res , index) =>(
                        <NewestBox onClick={()=> handleSearch()} key={index}>
                            <NewestTitle>
                                {res.name}
                            </NewestTitle>
                            <NewestImageContainer>
                                <NewestImage src={pic} layout="intrinsic"></NewestImage>
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