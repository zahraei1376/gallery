import user from '../../assets/img/myPic.jpg';
import {SubTitle as Title} from '../../generalCss/generalCss.styles';
import {Container,UploadBoxContainer,UploadImage, UploadImageContainer,} from './showAllUpload.styles';
// const myArray = [1,2,3,4,5];
const ShowUploadBoxes = ({setShowBox , showBox , imageArray , count}) =>{
    return(
        <Container onClick={() => setShowBox("1")}>
            {
                // imageArray.length > 0 ? 
                imageArray.map((pic , index) => (
                    <UploadBoxContainer key={index} id={index}>
                        <UploadImageContainer>
                            <UploadImage src ={pic && pic.src ? pic.src : user} layout="fill" />
                        </UploadImageContainer>
                    </UploadBoxContainer>
                ))
                // : ""
            }
            <Title showBox={showBox} value="1">{`تعداد عکس های آپلود شده ${count} عدد`}</Title>
        </Container>
    )
};

export default ShowUploadBoxes;