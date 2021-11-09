import MyNavbar from '../../component/Menu/Navbar.component';
import SavedGallery from '../../component/savedImageGallery/savedImageGallery.component';
import { TitleWrapper,LeftTitle , RightTitle,GalleryPageSecion ,TitleContainer,Title , SunTitle ,SunTitleSelect,InfoSelectContainer,
    DeleteContainer, DeleteButton, MyDeleteIcon ,InfoContainer,InfoWrapper,SelectAll ,SelectAllContainer} from './mySaved.styles';
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
const SavedBoxesComponent = ({currentUser,saveCartItem ,uploadFiles,setTriggerDeleteFile,triggerDeleteFile, count , RemoveItems , RemoveItem , type}) =>{
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


    useEffect(() =>{
        setTextBtn(0);
    },[type]);
      /////////////////////////////////////
    const handleRemoveItem = () =>{
        if(type === 2){//عکسهای ذخیره شده
            RemoveItems(imageForDelete);
        }else if(type === 1){
            const data = {
                arrayId:imageForDelete,
              }
        
              fetch("/api/profile/deleteImage", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': currentUser,
                    },
                method:"POST",
                body: JSON.stringify(data)
              })
              .then((response)=>{ 
                  return response.json();   
              })
              .then((dataRes)=>{ 
                  if(dataRes.seccess){
                    setTriggerDeleteFile(!triggerDeleteFile);
                    setStatus('0')
                    setMessage('عکس موردنظر با موفقیت حذف شد!!!');
                    setShowMessage(true);
                      
                  }else{
                      if(dataRes.reload){
                          setStatus('0')
                          setMessage(dataRes.message)
                          setShowMessage(true);
                          setTimeout(() => {
                              router.push('/login')
                          }, 1000);
                      }else{
                          setStatus('0')
                          setMessage(dataRes.message)
                          setShowMessage(true);
                      }
                  }
        
              })
              .catch(err => {
                  setStatus('0')
                  setMessage(err.message)
                  setShowMessage(true);
                  // setLoading(false);
              });
        }
        
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
        <GalleryPageSecion >
            <TitleContainer>
                <TitleStyle text={type === 1 ? "عکس های آپلود شده من" : "عکس های ذخیره شده من"}/>
            </TitleContainer>
            <InfoContainer fixed={fixed ? "true" : null}>
                <InfoWrapper fixed={fixed ? "true" : null}>
                <SunTitle>{type === 1 ? `تعداد عکس های آپلود شده ${uploadFiles.length} عدد` :  `تعداد عکس های ذخیره شده ${count} عدد`}</SunTitle>
                <SelectAllContainer>
                    <SelectAll dsl={type === 1 ? 
                    uploadFiles.length === 0 ? "true" : null :
                    count === 0 ? "true" : null}  select = {textBtn === 1 ? "true" : null} disabled={type === 1 ? uploadFiles.length === 0 ? true :false : count === 0 ? true :false} onClick={() => handleSelectAll(type === 1 ? uploadFiles : saveCartItem)}>{textBtn === 0 ? 'انتخاب همه' : 'لغو انتخاب ها'}</SelectAll>
                    <Tooltip title="حذف"  aria-label="حذف">
                        <DeleteContainer>
                            <DeleteButton disabled={imageForDelete.length === 0} onClick = {() => {handleRemoveItem(imageForDelete)}}>
                                <MyDeleteIcon disable={imageForDelete.length === 0 ? 'true' : null} />
                            </DeleteButton>
                        </DeleteContainer>
                    </Tooltip>
                </SelectAllContainer>
                </InfoWrapper>
            </InfoContainer>

            <InfoSelectContainer>
                <SunTitleSelect>{`تعداد عکس های انتخاب شده ${imageForDelete.length} عدد`}</SunTitleSelect>
            </InfoSelectContainer>

            <SavedGallery uploadedImage = {type === 1 ? true : false} images = {type === 1 ? uploadFiles : saveCartItem} imageForDelete = {imageForDelete} setImageForDelete ={setImageForDelete} />
            {
                showMessage && <MySnackbar message={message} status={status} showMessage={showMessage} setShowMessage={setShowMessage} /> 
            }
        </GalleryPageSecion>
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

export default connect(mapStateToProps , mapDispatchToProps)(SavedBoxesComponent);