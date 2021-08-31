import { useState } from "react";
import {SearchBoxContainer , SearchBoxInput ,MySearchIcon ,SearchButton ,ClearIcon} from './searchBox.styles';

const SearchBox = () =>{
    const [searchText , setSearchText] = useState('');
    const handleGetData = () => {
        fetch('https://api.unsplash.com/search/photos?page=1&query=office')
        .then(response =>{
            console.log('response1', response);
            return response.json();
        }).then(res =>{
            console.log('response2', res);
        }).catch(err =>{
            console.log('errrrr' , err);
        })
    }
    return(
        <SearchBoxContainer>
            {/* <MySearchIcon /> */}
            {searchText ? 
            <SearchButton 
            // onClick={handleGetData}
            >
                <ClearIcon onClick={() => {setSearchText('')}} />
            </SearchButton> : ''}
            <SearchBoxInput type="text" placeholder="جستجو &#x1F50E;" value = {searchText}  onChange = {(e) => setSearchText(e.target.value)} />
        </SearchBoxContainer>
    )
}

export default SearchBox;