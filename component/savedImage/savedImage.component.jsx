
import {connect } from 'react-redux';
import CardSaved from '../sevedBox/savedBox.component';
import { SaveContainer, SaveButton , MySaveButton , MySaveIcon, SaveIcon} from './savedImage.styles';
import {addItem} from '../../redux/cart/cart.action';
const SavedImages = ({setLocation , addItemToSave,imageInfo}) =>{
    const handleLoaction = (e) =>{
        setLocation({x:e.pageX , y:e.pageY});
    }

    const handleAddItemToCard = (info) => {
        addItemToSave(info);
        setLocation({});
    }

    return(
        <SaveContainer>
            <SaveButton onClick = {() => handleAddItemToCard(imageInfo)}><SaveIcon/></SaveButton>
            <MySaveButton onClick= {e =>{handleLoaction(e)}}><MySaveIcon/></MySaveButton>
            {/* <CardSaved fixed= {fixed ? fixed : null} /> */}
        </SaveContainer>
    )
};


const mapDispatchToProps = (dispatch) => ({
    addItemToSave : (id) => dispatch(addItem(id)),
});

export default connect(null , mapDispatchToProps)(SavedImages);