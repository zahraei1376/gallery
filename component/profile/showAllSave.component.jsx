import user from '../../assets/img/myPic.jpg';
import {SubTitle as Title} from '../../generalCss/generalCss.styles';
import {SaveContainer,Container,SaveBoxContainer,SaveImage,
    SaveImageBoxContainer, SaveImageContainer} from './showAllSave.styles';
const myArray = [1,2,3,4,5];
const ShowSaveBoxes = ({setShowBox , showBox}) =>{
    return(
        // <div style={{width:'30%'}}>
        
        <Container onClick={() => setShowBox("2")}>
            <SaveContainer>
                <SaveBoxContainer>
                    <SaveImageContainer>
                        <SaveImage src ={user} layout="fill" />
                    </SaveImageContainer>
                </SaveBoxContainer>
                <SaveBoxContainer>
                    <SaveImageBoxContainer id ={1}>
                        <SaveImage src ={user} layout="fill" />
                    </SaveImageBoxContainer>
                    <SaveImageBoxContainer id ={2}>
                        <SaveImage src ={user} layout="fill" />
                    </SaveImageBoxContainer>
                </SaveBoxContainer>
            </SaveContainer>
            <Title showBox={showBox} value="2">{`تعداد عکس های ذخیره شده ${myArray.length} عدد`}</Title>
        </Container>
        // </div>
    )
};

export default ShowSaveBoxes;