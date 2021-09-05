import React, { useState } from "react";
import SegestionSearch from "../segestionSearch/segestionSearch.component";
import {SearchBoxContainer , SearchBoxInput ,MySearchIcon ,SearchButton ,ClearIcon , BackDrop} from './searchBox.styles';
import {topics} from '../../generalMethod/topics';

const SearchBox = () =>{
    const [searchText , setSearchText] = useState('');
    const [showSegesion, setShowSegestion] = useState(false);
    const [result , setResult] = useState([]);
    

    const handleSearchText = (value) => {
        setSearchText(value);
        if(topics && topics.length > 0){
            var res = topics.filter(title => {
                if(value && value != " "){
                    return title.title.includes(value);
                }
                
            });
            setResult(res);
        }
    }

    return(
        <React.Fragment>
            <SearchBoxContainer>
                {searchText ? 
                <SearchButton onClick={() => {setSearchText('')}} >
                    <ClearIcon />
                </SearchButton> : ''}
                <SearchBoxInput onBlur  = {() => setShowSegestion(false)} onFocus = {() => setShowSegestion(true)} type="text" placeholder="جستجو &#x1F50E;" value = {searchText}  onChange = {(e) => handleSearchText(e.target.value)} />
                <SegestionSearch result = {result} showSegesion = {showSegesion} setShowSegestion = {setShowSegestion} />
            </SearchBoxContainer>
            {/* <BackDrop show = {showSegesion ? showSegesion :null} onClick = {() =>setShowSegestion(false)} /> */}
        </React.Fragment>
    )
}

export default SearchBox;