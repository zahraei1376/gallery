import { useEffect } from 'react';
import {Filters} from '../../generalMethod/topics';
import {Select , Option} from './dropDown.styles';
const MyDropDown = ({border , handleValue , val }) =>{
    // const handleValue = () =>{

    // }
    useEffect(() =>{
        handleValue(val ? val : '');
    },[]);

    return(
        <Select border={border} onChange={e => handleValue(e.target.value)}>
            {
                Filters.length > 0 ? (
                    Filters.map((filter , index) =>(
                        <Option selected={val === filter.title} key={index} value={filter.title}>{filter.title}</Option>
                    ))
                )
                : ""
            }
        </Select>
    )
};

export default MyDropDown;