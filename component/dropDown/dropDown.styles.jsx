import styled from "styled-components";

export const Select =  styled.select`
    width:70%;
    height:3.5rem;
    border-radius:5px;
    outline:none;
    border:${props => props.border ? "1px solid #000" : "none"};
    background-color:#fff;
    font-size:1.8rem;
    font-family:ir_sans;
`;

export const Option = styled.option`
    font-size:1.8rem;
    font-family:ir_sans;
`;