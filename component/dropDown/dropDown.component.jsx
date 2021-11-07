import { useEffect } from 'react';
import {Filters} from '../../generalMethod/topics';
import {Select , Option} from './dropDown.styles';
const MyDropDown = ({border , handleValue , val,shirink,borderBottom }) =>{
    // const handleValue = () =>{

    // }
    useEffect(() =>{
        console.log('shirinkshirink',shirink);
        handleValue(val ? val : '');
    },[]);

    return(
        <Select shirink={shirink} borderBottom={borderBottom} border={border} onChange={e => handleValue(e.target.value)}>
            <Option borderBottom={borderBottom} value=""></Option>
            {
                
                Filters.length > 0 ? (
                    Filters.map((filter , index) =>(
                        <Option borderBottom={borderBottom} selected={val === filter.title} key={index} value={filter.title}>{filter.title}</Option>
                    ))
                )
                : ""
            }
        </Select>
    )
};

export default MyDropDown;