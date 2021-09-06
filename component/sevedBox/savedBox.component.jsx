import {connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import {MyTypography , MySaveButton,MySaveIcon ,P,CloseButtonContainer,SaveBoxContainer,ImageSaveBox,ImageSaveBoxContainer,SaveBoxImage,TiTleSaveBox, SeeAllButton,SaveCloseButton,SaveCloseIcon,SavedBoxContainer, SavedBox, SavedImage, SavedTitle} from './savedBox.styles';
import {limitRecipeTitle} from '../../generalMethod/limitRecipeTitle';
import {selectCartItem} from '../../redux/cart/cart.selectors';

const CardSaved = ({location , setLocation ,saveCartItem ,width}) => {
  return(
    <SavedBoxContainer location={location} width = {width} >
        <CloseButtonContainer>
          <SaveCloseButton onClick = {() => setLocation({})}>
              <SaveCloseIcon/>
          </SaveCloseButton>
        </CloseButtonContainer>
        
        {saveCartItem.length > 0 ? <ImageSaveBoxContainer>
          <ImageSaveBox>
            {
              saveCartItem.map((image , index) =>(
                <SaveBoxContainer key={index}>
                    <TiTleSaveBox>{limitRecipeTitle(image.title)}</TiTleSaveBox>
                    <SaveBoxImage src = {image.src} />
                </SaveBoxContainer>
              ))
            }
          </ImageSaveBox>
          
          <SeeAllButton>نمایش</SeeAllButton>
        </ImageSaveBoxContainer> : <P>موردی ذخیره نشده است</P>}
        
    </SavedBoxContainer>
  )
};

const mapStateToProps = createStructuredSelector({
   saveCartItem : selectCartItem,
});

export default connect(mapStateToProps)(CardSaved);