import { Button, ButtonContainer } from "./Button.styles"

const MyButton = ({mg,text , onClick}) =>{
    return(
        <ButtonContainer mg={mg}>
            <Button
                onClick={(e)=> onClick(e)} 
            >{text}</Button>
        </ButtonContainer>
    )
};

export default MyButton;