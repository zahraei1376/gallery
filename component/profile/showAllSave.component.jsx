import user from '../../assets/img/myPic2.jpg';
import {SubTitle as Title} from '../../generalCss/generalCss.styles';
import {SaveContainer,Container,SaveBoxContainer,SaveImage,
    SaveImageBoxContainer, SaveImageContainer} from './showAllSave.styles';
import { LatestPhotos , selectCartItemsCount ,} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
const ShowSaveBoxes = ({setShowBox , showBox , cartItem , count}) =>{
    return(
        <Container onClick={() => setShowBox("2")}>
            <SaveContainer>
                {/* {
                    cartItem.length > 0 ? 
                   ( <> */}
                        <SaveBoxContainer>
                            <SaveImageContainer>
                                <SaveImage src ={cartItem[0] && cartItem[0].src ? cartItem[0].src : user } width="100%" height="100%" layout="responsive" />
                            </SaveImageContainer>
                        </SaveBoxContainer>
                        <SaveBoxContainer>
                            <SaveImageBoxContainer id ={1}>
                                <SaveImage src ={cartItem[1] && cartItem[1].src ? cartItem[1].src : user } width="100%" height="100%" layout="responsive" />
                            </SaveImageBoxContainer>
                            <SaveImageBoxContainer id ={2}>
                                <SaveImage src ={cartItem[2] && cartItem[2].src ? cartItem[2].src : user } width="100%" height="100%" layout="responsive" />
                            </SaveImageBoxContainer>
                        </SaveBoxContainer>
                    {/* </>)
                    : ""
                } */}
            </SaveContainer>
            <Title showBox={showBox} value="2">{`تعداد عکس های ذخیره شده ${count} عدد`}</Title>
        </Container>
    )
};

// export default ShowSaveBoxes;
const mapStateToProps = createStructuredSelector({
    cartItem : LatestPhotos,
    count : selectCartItemsCount,
 });

export default connect(mapStateToProps)(ShowSaveBoxes);