import styled from "styled-components";

export const Select =  styled.select`
    width:${props => props.borderBottom ? "90%" : "70%"};
    height:3.5rem;
    border-radius:${props => props.borderBottom ? "0" : "5px"};
    outline:none;
    
    border:${props => props.border ? "1px solid #000" : "none"};
    border-bottom:${props => props.borderBottom ? "1px solid #fff" : "1px solid #000"};
    background-color:transparent;
    font-size:${props => props.borderBottom ? "1.4rem" : "1.5rem"};
    font-family:ir_sans;
`;

export const Option = styled.option`
    font-size:${props => props.borderBottom ? "1.4rem":"1.5rem"};
    font-family:ir_sans;
`;