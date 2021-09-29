import MyNavbar from '../../component/Menu/Navbar.component';
import SavedGallery from '../../component/savedImageGallery/savedImageGallery.component';
import { GalleryPageSecion ,TitleContainer,Title , SunTitle ,SunTitleSelect,InfoSelectContainer,
    DeleteContainer, DeleteButton, MyDeleteIcon ,InfoContainer,SelectAll ,SelectAllContainer} from './mySaved.styled';
import { selectCartItem , selectCartItemsCount ,} from '../../redux/cart/cart.selectors';
import {RemoveItems , RemoveItem} from '../../redux/cart/cart.action';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { Tooltip } from '@material-ui/core';
// import { scrollFunction } from '../../generalMethod/limitRecipeTitle';
//////////////////////////////////////////////
const SavedPage = ({saveCartItem , count , RemoveItems , RemoveItem}) =>{
    const [imageForDelete, setImageForDelete] = useState([]);
    const [textBtn , setTextBtn] = useState(0);
    const [fixed , setFixed] = useState(null);
    const [selected , setSelected] = useState(0);
    //////////////////////////////////////////
    useEffect(()=>{
        // RemoveItem();
        setSelected(imageForDelete.length)
    },[imageForDelete]);
    //////////////////////////////////////////
    const handleSelectAll = () =>{
        if(textBtn === 0) {
            setTextBtn(1);
            var temp = [];
            for (let index = 0; index < saveCartItem.length; index++) {
                temp.push(saveCartItem[index].id);
            }
            setImageForDelete(temp);
        }
        else {
            setTextBtn(0);
            setImageForDelete([]);
        };
        
    }
    //////////////////////////////////////////
    const scrollFunction = () => {
        console.log('yyyyyyyy',window.scrollY);
        var y = window.scrollY;
        console.log('yyyyyyyy',y);
        // if ( y >= 61) {
        if ( y >= 10) {
            if(!fixed){
                setFixed(true);
            }
        }else{
            // if(scrolling){
              // console.log('scrolling', scrolling);
              setFixed(false);
            // }
        }
      } 
    //////////////////////////////////////////
    return(
        <GalleryPageSecion onScroll = {() => scrollFunction()} id="fixed">
            <MyNavbar scrolling = {true} />
            <TitleContainer>
                <Title>عکس های ذخیره شده من</Title>
            </TitleContainer>
            <InfoContainer fixed={fixed ? "true" : null}>
                <SunTitle>{`تعداد عکس های ذخیره شده ${count} عدد`}</SunTitle>
                <SelectAllContainer>
                    <SelectAll disabled={selected === 0} onClick={handleSelectAll}>{textBtn === 0 ? 'انتخاب همه' : 'لغو انتخاب ها'}</SelectAll>
                    <Tooltip title="حذف"  aria-label="حذف">
                        <DeleteContainer>
                            <DeleteButton disabled={selected === 0} onClick = {() => {RemoveItems(imageForDelete)}}>
                                <MyDeleteIcon disable={selected === 0 ? true : null} />
                            </DeleteButton>
                        </DeleteContainer>
                    </Tooltip>
                </SelectAllContainer>
            </InfoContainer>

            <InfoSelectContainer>
                <SunTitleSelect>{`تعداد عکس های انتخاب شده ${selected} عدد`}</SunTitleSelect>
            </InfoSelectContainer>

            <SavedGallery images = {saveCartItem} imageForDelete = {imageForDelete} setImageForDelete ={setImageForDelete} />
            
        </GalleryPageSecion>
    )
};

const mapStateToProps = createStructuredSelector({
    saveCartItem : selectCartItem,
    count : selectCartItemsCount,
 });


 const mapDispatchToProps = dispatch =>({
    RemoveItems: (IDS) => dispatch(RemoveItems(IDS)),
    RemoveItem: () => dispatch(RemoveItem()),
});

export default connect(mapStateToProps , mapDispatchToProps)(SavedPage);