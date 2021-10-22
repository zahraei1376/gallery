import {Filters} from '../../generalMethod/topics';
import {Select , Option} from './dropDown.styles';
const MyDropDown = () =>{
    return(
        <Select>
            {
                Filters.length > 0 ? (
                    Filters.map((filter , index) =>(
                        <Option key={index} value={filter.title}>{filter.title}</Option>
                    ))
                )
                : ""
            }
        </Select>
    )
};

export default MyDropDown;