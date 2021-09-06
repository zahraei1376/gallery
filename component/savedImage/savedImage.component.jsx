
import { useState, useEffect } from 'react';
import {connect } from 'react-redux';
import CardSaved from '../sevedBox/savedBox.component';
import { SaveContainer, SaveButton , MySaveButton , MySaveIcon, SaveIcon} from './savedImage.styles';
import {addItem} from '../../redux/cart/cart.action';
import {selectedCart} from '../../redux/cart/cart.selectors';
import MySnackbar from '../messageBox/messageBox.component';
import { createStructuredSelector } from 'reselect';

const SavedImages = ({setLocation , addItemToSave,selectedCart,imageInfo}) =>{
    const [showMessage,setShowMessage] = useState(false);
    const [message,setMessage] =useState('');
    const [status,setStatus] = useState('0');

    const handleLoaction = (e) =>{
        setLocation({x:e.pageX , y:e.pageY});
    }

    useEffect(() => {
        console.log('selectedCart',selectedCart);
    });

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
                <SaveButton onClick = {() => handleAddItemToCard(imageInfo)}><SaveIcon seved = {selectedCart ? selectedCart : null}/></SaveButton>
                <MySaveButton onClick= {e => handleLoaction(e)}><MySaveIcon /></MySaveButton>
                {/* <CardSaved fixed= {fixed ? fixed : null} /> */}
            
            </SaveContainer>
            {
                showMessage ? <MySnackbar message={message} status={status} showMessage={showMessage} setShowMessage={setShowMessage} /> : ''
            }
        </>
    )
};

// const mapStateToProps = createStructuredSelector({
//     selectedCart : (id) => selectedCart(id),
//  });

 const mapStateToProps = (state, props) => {
    return createStructuredSelector({
        selectedCart: selectedCart(state, props.imageInfo.id), 
    });
  };


const mapDispatchToProps = (dispatch) => ({
    addItemToSave : (id) => dispatch(addItem(id)),
});

export default connect(mapStateToProps , mapDispatchToProps)(SavedImages);