import styled from 'styled-components';
import Button from '@material-ui/core/Button';


export const MarginBottomSmall = styled.div`
    margin-bottom: 1.5rem !important;
`;

export const MarginBottomRightMedium = styled.div`
    margin-bottom: 4rem !important;
    text-align:right;

    @media only screen and (max-width: 56.25em) {
        margin-bottom: 3rem !important;
    };
`;

export const MarginBottomBig = styled.div`
    margin-bottom: 8rem !important;

    @media only screen and (max-width: 56.25em) {
        margin-bottom: 5rem !important;
    };
`;

export const MarginTopBig = styled.div`
    margin-top: 8rem !important;
`;

export const MarginTopHuge = styled.div`
    margin-top: 10rem !important;
`;

export const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 700;
    display: inline-block;
    background-image: ${props => props.color1 && props.color2 ? `linear-gradient(to right,${props.color1} , ${props.color2});` : "linear-gradient(to right, #3f87a6 ,#084159 );"};
    // background-image: linear-gradient(to right, $color-primary-light, $color-primary-dark);
    -webkit-background-clip: text;
    color: transparent;
    transition: all .2s;

    @media only screen and (max-width: 75em) {
        font-size: 3rem;
    }; 
    
    
    @media only screen and (max-width: 56.25em) {
        font-size: 2.5rem;
    };

    &:hover {
        transform: skewY(2deg) skewX(15deg) scale(1.1);
        text-shadow: .5rem 1rem 2rem rgba(#000, .2);
    }
`;

export const Btn = styled(Button)`
    background-color:${props => props.bgcolor ? props.bgcolor : '#084159'} !important;
    color:${props => props.clr ? props.clr : '#fff'} !important;
    font-size:1.8rem !important;
    // font-family:ir_sans !important;
    font-family:ir_sans !important;
    direction:rtl;
    transition:all 0.2s;
    // margin-bottom: 1.5rem !important;
    width: 100% !important;
    // background-color:#084159 !important;
    // color:#fff !important;

    &:hover{
        background-color:#191e3e !important;
        color:#fff !important;
    }

   
`;

export const SubTitle =  styled.h1`
    // font-family: ir_sans;
    font-size:1.5rem;
    transition:all .3s;
    margin-top:${props => props.value && props.value === "1" ? "16rem":"1rem"};
    text-align:center;
    font-family: ir_sans;
    // background-image:${props => props.value && props.showBox && props.showBox === props.value ? 'radial-gradient(ellipse at top ,rgba(252,141,109,.8),rgba(191,79,123,.8),rgba(36,45,100,.8) 80%,rgba(25,30,62,.8) 100%)': 'radial-gradient(ellipse at top ,#1d1d1d,#1d1d1d)'};
    // -webkit-background-clip: text;
    // color: transparent;
    color:${props => props.value && props.showBox && props.showBox === props.value ? "rgba(36,45,100,.8)":"#1d1d1d"};
    padding-bottom:1rem;
    border-bottom:${props => props.value && props.showBox && props.showBox === props.value ? "2px solid rgba(36,45,100,.8)":"2px solid transparent"};
`;