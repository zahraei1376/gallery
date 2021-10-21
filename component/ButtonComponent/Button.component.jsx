import { Button, ButtonContainer } from "./Button.styles"

const MyButton = ({mg,text , onClick}) =>{
    return(
        <ButtonContainer mg={mg}>
            <Button
                onClick={()=> onClick()} 
            >{text}</Button>
        </ButtonContainer>
    )
};

export default MyButton;