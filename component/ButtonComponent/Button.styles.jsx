import styled from "styled-components";
export const ButtonContainer = styled.div`
  // display:flex;
  // justify-content:center;
  // align-items:center;
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
    // font-weight: 300;
    padding: 1rem 2rem;
    background-image:${props => props.color ? `linear-gradient(-120deg, ${props.color} 0%, ${props.color} 50%, #fff 50%)` : "linear-gradient(-120deg, #fff 0%,transparent 50%, #191e3e 50%)"};
    background-size: 200%;
    transition: all .4s;
    border:1px solid #eee;
    margin-right:1rem;
    // border:1px solid transparen;
  // linear-gradient(to bottom ,rgb(218,160,103),#bf4f7b);

  &:hover{
      background-position: 100%;
      color: #1d1d1d;
      transform: translateX(-1rem);
    //   border:1px solid #191e3e;
  }
`;