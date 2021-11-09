import MyNavbar from '../../component/Menu/Navbar.component';
import SavedGallery from '../../component/savedImageGallery/savedImageGallery.component';
import { TitleWrapper,LeftTitle , RightTitle,GallerySavedPageSecion ,SubTitleSaved,TitleSavedContainer,TitleSaved,Title ,SunTitleSaved, SunTitle ,SunTitleSavedSelect,InfoSavedSelectContainer,
    DeleteContainer, DeleteButton, MyDeleteIcon ,InfoSavedContainer,InfoSavedWrapper,SelectAll ,SelectAllContainer} from './mySaved.styles';
import { selectCartItem , selectCartItemsCount ,} from '../../redux/cart/cart.selectors';
import {currentUser} from '../../redux/user/user.selector';
import {RemoveItems , RemoveItem} from '../../redux/cart/cart.action';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { Tooltip } from '@material-ui/core';
import TitleStyle from '../../component/title/title.component';
import MySnackbar from '../messageBox/messageBox.component';
// import { scrollFunction } from '../../generalMethod/limitRecipeTitle';
//////////////////////////////////////////////
const SavedBoxesPageComponent = ({currentUser,saveCartItem ,uploadFiles,setTriggerDeleteFile,triggerDeleteFile, count , RemoveItems , RemoveItem , type}) =>{
    const [imageForDelete, setImageForDelete] = useState([]);
    const [textBtn , setTextBtn] = useState(0);
    const [fixed , setFixed] = useState(null);
    const [showMessage,setShowMessage] = useState(false);
    const [message,setMessage] =useState('');
    const [status,setStatus] = useState('0');
    // const [uploadFiles , setUploadFiles] = useState([]);
    //////////////////////////////////////////
    useEffect(() => {
        const onScroll = e => {
            var y = e.target.documentElement.scrollTop;
            if ( y >= 100) {
                if(!fixed){
                    setFixed(true);
                }
            }else{
                setFixed(false);
            }
        };

        
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);
      /////////////////////////////////////
    const handleRemoveItem = () =>{
        RemoveItems(imageForDelete);        
        setImageForDelete([]);
    }

    const handleSelectAll = (items) =>{
        if(textBtn === 0) {
            setTextBtn(1);
            var temp = [];
            for (let index = 0; index < items.length; index++) {
                temp.push(items[index]._id);
            }
            setImageForDelete(temp);
        }
        else {
            setTextBtn(0);
            setImageForDelete([]);
        };
        
    }
    //////////////////////////////////////////
    //////////////////////////////////////////
    
    
    return(
        <GallerySavedPageSecion >
            <TitleSavedContainer>
                <TitleSaved>گالری کیهان </TitleSaved>
                <SubTitleSaved> عکس های ذخیره شده من در کیهان گالری</SubTitleSaved>
            </TitleSavedContainer>
            <div style={{margin:"3rem" ,
            backgroundColor:'#ececec',
            borderTopLeftRadius: "2rem",
            borderTopRightRadius: "2rem",
            }}>
                <InfoSavedContainer fixed={fixed ? "true" : null}>
                    <InfoSavedWrapper fixed={fixed ? "true" : null}>
                        <SunTitleSaved>{`تعداد عکس های ذخیره شده ${count}`}</SunTitleSaved>
                    <SelectAllContainer>
                        <SelectAll dsl={count === 0 ? "true" : null}  select = {textBtn === 1 ? "true" : null} disabled={count === 0 ? true :false} onClick={() => handleSelectAll(saveCartItem)}>{textBtn === 0 ? 'انتخاب همه' : 'لغو انتخاب ها'}</SelectAll>
                        <Tooltip title="حذف"  aria-label="حذف">
                            <DeleteContainer>
                                <DeleteButton disabled={imageForDelete.length === 0} onClick = {() => {handleRemoveItem(imageForDelete)}}>
                                    <MyDeleteIcon disable={imageForDelete.length === 0 ? 'true' : null} />
                                </DeleteButton>
                            </DeleteContainer>
                        </Tooltip>
                    </SelectAllContainer>
                    </InfoSavedWrapper>
                </InfoSavedContainer>

                <InfoSavedSelectContainer>
                    <SunTitleSavedSelect>{`تعداد عکس های انتخاب شده ${imageForDelete.length} عدد`}</SunTitleSavedSelect>
                </InfoSavedSelectContainer>
                
                <div style={{marginTop:'5rem'}}>
                <SavedGallery biger="true" together = "true" images = {saveCartItem} imageForDelete = {imageForDelete} setImageForDelete ={setImageForDelete} />
                </div>
            </div>
            {
                showMessage && <MySnackbar message={message} status={status} showMessage={showMessage} setShowMessage={setShowMessage} /> 
            }
        </GallerySavedPageSecion>
    )
};

const mapStateToProps = createStructuredSelector({
    saveCartItem : selectCartItem,
    count : selectCartItemsCount,
    currentUser:currentUser,
 });


 const mapDispatchToProps = dispatch =>({
    RemoveItems: (IDS) => dispatch(RemoveItems(IDS)),
    RemoveItem: () => dispatch(RemoveItem()),
});

export default connect(mapStateToProps , mapDispatchToProps)(SavedBoxesPageComponent);