
import { useState, useEffect } from 'react';
import {connect } from 'react-redux';
import { SaveContainer, SaveButton , MySaveButton , MySaveIcon, SaveIcon} from './savedImage.styles';
import {addItem} from '../../redux/cart/cart.action';
import { currentUser } from '../../redux/user/user.selector';
import {selectedCart} from '../../redux/cart/cart.selectors';
import MySnackbar from '../messageBox/messageBox.component';
import { createStructuredSelector } from 'reselect';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';

const SavedImages = ({setLocation , addItemToSave,selectedCart,imageInfo , currentUser}) =>{
    const [showMessage,setShowMessage] = useState(false);
    const [message,setMessage] =useState('');
    const [status,setStatus] = useState('0');
    const [seved , setSaved] = useState(null);
    ///////////////////////////////////////////////////////////
    const router = useRouter()
    /////////////////////////////
    var cookies = new Cookies();
    ///////////////////////////////////////////////////////////
    useEffect(() =>{
        setSaved(selectedCart ? selectedCart : null);
    },[imageInfo._id]);

    const handleLoaction = (e) =>{
        if(cookies.get('user')){
            setLocation({x:e.pageX , y:e.pageY});
        }else{
            router.push('/login');
        }
    }

    const handleAddItemToCard = (info) => {
        // addItemToSave(info);
        if(cookies.get('user')){
            addItemToSave({...info , user:currentUser});
            if(!selectedCart){
                setMessage('عکس مورد نظر ذخیره شد');
                setStatus('1');
            }else{
                setMessage('عکس از حالت ذخیره خارج شد');
                setStatus('0');
            }
            setShowMessage(true);
            setLocation({});
        }else{
            router.push('/login');
        }
       
    }

    return(
        <>
            <SaveContainer>
                <SaveButton onClick = {() => handleAddItemToCard(imageInfo)}>
                    <SaveIcon  seved = {selectedCart ? selectedCart : null}/>
                </SaveButton>
                <MySaveButton onClick= {e => handleLoaction(e)}><MySaveIcon /></MySaveButton>
            
            </SaveContainer>
            {
                showMessage ? <MySnackbar message={message} status={status} showMessage={showMessage} setShowMessage={setShowMessage} /> : ''
            }
        </>
    )
};

 const mapStateToProps = (state, props) => {
    return createStructuredSelector({
        selectedCart: selectedCart(state, props.imageInfo._id), 
        currentUser:currentUser,
    });
  };


const mapDispatchToProps = (dispatch) => ({
    addItemToSave : (id) => dispatch(addItem(id)),
});

export default connect(mapStateToProps , mapDispatchToProps)(SavedImages);