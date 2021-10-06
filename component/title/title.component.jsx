import {TitleWrapper , RightTitle,Title,LeftTitle,} from './title.styles';
const TitleStyle = ({text}) =>{
    return(
        <TitleWrapper>
            <RightTitle/>
            <Title>{text}</Title>
            <LeftTitle/>
        </TitleWrapper>
    )
};

export default TitleStyle