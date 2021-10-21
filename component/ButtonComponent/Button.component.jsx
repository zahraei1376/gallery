import { Button, ButtonContainer } from "./Button.styles"

const MyButton = ({text}) =>{
    return(
        <ButtonContainer>
            <Button
            onClick={()=> router.push('/login')} 
            >{text}</Button>
        </ButtonContainer>
    )
};

export default MyButton;