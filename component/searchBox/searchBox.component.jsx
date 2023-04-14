import React, { useState, useEffect } from "react";
import SegestionSearch from "../segestionSearch/segestionSearch.component";
import { SearchBoxContainer, SearchBoxInput, MySearchIcon, SearchButton, ClearIcon, BackDrop, ClearButton } from './searchBox.styles';
import { Topics } from '../../generalMethod/topics';

const SearchBox = ({ segestion, text, scroll, clicked }) => {
    const [searchText, setSearchText] = useState('');
    const [showSegesion, setShowSegestion] = useState(false);
    const [result, setResult] = useState([]);
    //////////////////////////////////////////////////
    useEffect(() => {
        setSearchText(text);
    }, [text]);

    const handleSearchText = (value) => {
        setSearchText(value);
        if (Topics && Topics.length > 0) {
            var res = Topics.filter(title => {
                if (value && value != " ") {
                    return title.title.includes(value);
                }
            });
            setResult(res || "");
        }
    }

    const handleBlur = () => {
        setTimeout(() => {
            setShowSegestion(false);
        }, 500);
    }

    return (
        <React.Fragment>
            <SearchBoxContainer>
                {searchText ?
                    <ClearButton segestion={segestion} onClick={() => { handleSearchText('') }} >
                        <ClearIcon scroll={scroll} clicked={clicked} />
                    </ClearButton> : ''}
                <SearchBoxInput segestion={segestion} scroll={scroll} clicked={clicked}
                    onBlur={() => handleBlur()}
                    onFocus={() => setShowSegestion(true)} type="text" placeholder="جستجو" value={searchText} onChange={(e) => handleSearchText(e.target.value)} />
                <SegestionSearch segestion={segestion} result={result} showSegesion={showSegesion} setShowSegestion={setShowSegestion} />
                <SearchButton segestion={segestion}>
                    <MySearchIcon />
                </SearchButton>
            </SearchBoxContainer>
            {/* <BackDrop show = {showSegesion ? showSegesion :null} onClick = {() =>setShowSegestion(false)} /> */}
        </React.Fragment>
    )
}

export default SearchBox;