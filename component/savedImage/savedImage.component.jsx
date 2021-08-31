
import { useState } from 'react';
import {connect } from 'react-redux';
import CardSaved from '../sevedBox/savedBox.component';
import { SaveContainer, SaveButton , MySaveButton , MySaveIcon, SaveIcon} from './savedImage.styles';
import {addItem} from '../../redux/cart/cart.action';
import MySnackbar from '../messageBox/messageBox.component';

const SavedImages = ({setLocation , addItemToSave,imageInfo}) =>{
    const [showMessage,setShowMessage] = useState(false);
    const [message,setMessage] =useState('');
    const [status,setStatus] = useState('0');

    const handleLoaction = (e) =>{
        // var rect = e.target.getBoundingClientRect();
        // var x = e.clientX - rect.left; //x position within the element.
        // var y = e.clientY - rect.top;  //y position within the element.
        // console.log("Left? : " + x + " ; Top? : " + y + ".");
        // setLocation({x:x , y:y});
        setLocation({x:e.pageX , y:e.pageY});
    }

    const handleAddItemToCard = (info) => {
        setMessage('عکس ذخیره شد');
        setStatus('1');
        setShowMessage(true);
        addItemToSave(info);
        setLocation({});
    }

    return(
        <>
            <SaveContainer>
                <SaveButton onClick = {() => handleAddItemToCard(imageInfo)}><SaveIcon/></SaveButton>
                <MySaveButton onClick= {e => handleLoaction(e)}><MySaveIcon/></MySaveButton>
                {/* <CardSaved fixed= {fixed ? fixed : null} /> */}
            
            </SaveContainer>
            {
                showMessage ? <MySnackbar message={message} status={status} showMessage={showMessage} setShowMessage={setShowMessage} /> : ''
            }
        </>
    )
};


const mapDispatchToProps = (dispatch) => ({
    addItemToSave : (id) => dispatch(addItem(id)),
});

export default connect(null , mapDispatchToProps)(SavedImages);