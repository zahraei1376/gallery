import MyNavbar from '../../component/Menu/Navbar.component';
// import SavedGallery from '../../component/savedImageGallery/savedImageGallery.component';
import { TitleWrapper,LeftTitle , RightTitle,GalleryPageSecion ,TitleContainer,Title , SunTitle ,SunTitleSelect,InfoSelectContainer,
    DeleteContainer, DeleteButton, MyDeleteIcon ,InfoContainer,InfoWrapper,SelectAll ,SelectAllContainer} from './mySaved.styled';
// import { selectCartItem , selectCartItemsCount ,} from '../../redux/cart/cart.selectors';
// import {RemoveItems , RemoveItem} from '../../redux/cart/cart.action';
// import { createStructuredSelector } from 'reselect';
// import { connect } from 'react-redux';
// import { useState, useEffect } from 'react';
// import { Tooltip } from '@material-ui/core';
// import TitleStyle from '../../component/title/title.component';
import SavedBoxesComponent from '../../component/mySaved/mySaved.component';
// import { scrollFunction } from '../../generalMethod/limitRecipeTitle';
//////////////////////////////////////////////
const SavedPage = ({saveCartItem , count , RemoveItems , RemoveItem}) =>{
    // const [imageForDelete, setImageForDelete] = useState([]);
    // const [textBtn , setTextBtn] = useState(0);
    // const [fixed , setFixed] = useState(null);
    // //////////////////////////////////////////
    // useEffect(() => {
    //     const onScroll = e => {
    //         var y = e.target.documentElement.scrollTop;
    //         if ( y >= 70) {
    //             if(!fixed){
    //                 setFixed(true);
    //             }
    //         }else{
    //             setFixed(false);
    //         }
    //     };

        
    //     window.addEventListener("scroll", onScroll);

    //     return () => window.removeEventListener("scroll", onScroll);
    // }, []);
      /////////////////////////////////////
    // const handleRemoveItem = () =>{
    //     RemoveItems(imageForDelete);
    //     setImageForDelete([]);
    // }

    // const handleSelectAll = () =>{
    //     if(textBtn === 0) {
    //         setTextBtn(1);
    //         var temp = [];
    //         for (let index = 0; index < saveCartItem.length; index++) {
    //             temp.push(saveCartItem[index].id);
    //         }
    //         setImageForDelete(temp);
    //     }
    //     else {
    //         setTextBtn(0);
    //         setImageForDelete([]);
    //     };
        
    // }
    //////////////////////////////////////////
    //////////////////////////////////////////
    return(
        <GalleryPageSecion >
            <MyNavbar 
            scrolling = {true} 
            // scrolling = {!fixed ? "true" : null} 
            />
            <SavedBoxesComponent type ={2}/>
            {/* <TitleContainer>
                <TitleStyle text="عکس های ذخیره شده من"/>
            </TitleContainer>
            <InfoContainer fixed={fixed ? "true" : null}>
                <InfoWrapper fixed={fixed ? "true" : null}>
                <SunTitle>{`تعداد عکس های ذخیره شده ${count} عدد`}</SunTitle>
                <SelectAllContainer>
                    <SelectAll dsl={count === 0 ? "true" : null}  select = {textBtn === 1 ? "true" : null} disabled={count === 0 ? true :false} onClick={handleSelectAll}>{textBtn === 0 ? 'انتخاب همه' : 'لغو انتخاب ها'}</SelectAll>
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

            <SavedGallery images = {saveCartItem} imageForDelete = {imageForDelete} setImageForDelete ={setImageForDelete} /> */}
        </GalleryPageSecion>
    )
};

export default SavedPage;

// const mapStateToProps = createStructuredSelector({
//     saveCartItem : selectCartItem,
//     count : selectCartItemsCount,
//  });


//  const mapDispatchToProps = dispatch =>({
//     RemoveItems: (IDS) => dispatch(RemoveItems(IDS)),
//     RemoveItem: () => dispatch(RemoveItem()),
// });

// export default connect(mapStateToProps , mapDispatchToProps)(SavedPage);