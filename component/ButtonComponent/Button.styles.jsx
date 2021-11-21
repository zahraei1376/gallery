import styled from "styled-components";
export const ButtonContainer = styled.div`
  margin-top:${props => props.mg ? `${props.mg}rem`:"1rem"};
  display:grid;
`;

export const Button = styled.button`
    color:#fff;
    border-radius:1rem;
    cursor:pointer;
    font-family:ir_sans;
    border:none;
    display: inline-block;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    background-image:${props => props.color ? `linear-gradient(-120deg, ${props.color} 0%, ${props.color} 50%, #fff 50%)` : "linear-gradient(-120deg, #fff 0%,transparent 50%, #191e3e 50%)"};
    background-size: 200%;
    transition: all .4s;
    margin-right:1rem;

  &:hover{
      background-position: 100%;
      color: #1d1d1d;
      transform: translateX(-1rem);
  }
`;