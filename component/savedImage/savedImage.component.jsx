
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
    const [seved , setSaved] = useState(null);
    ///////////////////////////////////////////////
    useEffect(() =>{
        console.log('selectedCartselectedCart' ,selectedCart);
        setSaved(selectedCart ? selectedCart : null);
    },[imageInfo._id]);

    const handleLoaction = (e) =>{
        setLocation({x:e.pageX , y:e.pageY});
    }

    const handleAddItemToCard = (info) => {
        addItemToSave(info);
        if(!selectedCart){
            setMessage('عکس مورد نظر ذخیره شد');
            setStatus('1');
        }else{
            setMessage('عکس از حالت ذخیره خارج شد');
            setStatus('0');
        }
        setShowMessage(true);
        setLocation({});
    }

    return(
        <>
            <SaveContainer>
                <SaveButton onClick = {() => handleAddItemToCard(imageInfo)}><SaveIcon 
                // seved = {seved}
                seved = {selectedCart ? selectedCart : null}
                /></SaveButton>
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
        selectedCart: selectedCart(state, props.imageInfo._id), 
    });
  };


const mapDispatchToProps = (dispatch) => ({
    addItemToSave : (id) => dispatch(addItem(id)),
});

export default connect(mapStateToProps , mapDispatchToProps)(SavedImages);