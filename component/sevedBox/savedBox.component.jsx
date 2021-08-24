import {MyTypography , MySaveButton,MySaveIcon ,SavedBoxContainer, SavedBox, SavedImage, SavedTitle} from './savedBox.styles';

const CardSaved = ({location}) => {
  return(
    <SavedBoxContainer location={location.coordinates}>

    </SavedBoxContainer>
  )
};

export default CardSaved;