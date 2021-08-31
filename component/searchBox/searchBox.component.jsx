import { useState } from "react";
import SegestionSearch from "../segestionSearch/segestionSearch.component";
import {SearchBoxContainer , SearchBoxInput ,MySearchIcon ,SearchButton ,ClearIcon , BackDrop} from './searchBox.styles';

const SearchBox = () =>{
    const [searchText , setSearchText] = useState('');
    const [showSegesion, setShowSegestion] = useState(false);
    return(
        <>
            <SearchBoxContainer>
                {/* <MySearchIcon /> */}
                {searchText ? 
                <SearchButton onClick={() => {setSearchText('')}} >
                    <ClearIcon />
                </SearchButton> : ''}
                <SearchBoxInput onFocus={() =>setShowSegestion(true)} type="text" placeholder="جستجو &#x1F50E;" value = {searchText}  onChange = {(e) => setSearchText(e.target.value)} />
                <SegestionSearch showSegesion = {showSegesion} setShowSegestion = {setShowSegestion} />
                <BackDrop show = {showSegesion ? showSegesion :null} onClick = {() =>setShowSegestion(false)} />
            </SearchBoxContainer>
            
        </>
    )
}

export default SearchBox;