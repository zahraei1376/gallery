import { useState , useEffect } from 'react';
import {PopUpContainer ,TextArea, PopUpBody ,Form, MyCloseIcon,Group,Lable,Input,SettingIcon,
  ContentContainer,BtnClose,LogoContainer,Logo,Title, PopUpHeader,FileContainer,} from './popupUpload.styles';
import {addItem} from '../../redux/cart/cart.action';
import { connect } from 'react-redux';
import MySnackbar from '../messageBox/messageBox.component';
import { createStructuredSelector } from 'reselect';
import { selectedCart } from '../../redux/cart/cart.selectors';
import MyButton from '../ButtonComponent/Button.component';
// import logo from '../../assets/img/galleryLg.png';
import logo from '../../assets/img/galleryLg2.png';
import MyDropDown from '../dropDown/dropDown.component';
const PopUpUpload = (props) => {
    const [showMessage,setShowMessage] = useState(false);
    const [message,setMessage] =useState('');
    const [status,setStatus] = useState('0');
    const [load , setLoad] = useState(false);
    /////////////////////////////////////////////////////////////
    const handleOnClick = () =>{
       alert('senddddd');
    }


    const handlefile = (event) => {
        alert('selecttttttttttt');

        //////////////////////////////////
      };

    return (
        <PopUpContainer>
          <PopUpBody>
            
            <ContentContainer>
                <PopUpHeader>
                    <FileContainer>
                        <label htmlFor="upload" id="lable" style={{cursor:"pointer"}}>
                            <LogoContainer>
                                <Logo 
                                width="100%" height="100%"
                                 layout="responsive" src={logo}/>
                                <SettingIcon/>
                            </LogoContainer>
                        </label>
                        <input
                            style={{display:"none"}}
                            type="file"
                            id="upload"
                            accept="image/png,image/jpeg"
                            onChange={e => handlefile(e)}
                        />
                    </FileContainer>
                    <Title>برای انتخاب عکس موردنظر بر روی لوگوی بالا کلیک کنید</Title>
                </PopUpHeader>
                <Form>
                    
                    <Group>
                        <Lable htmlFor="title" >عنوان</Lable>
                        <Input id="title" type="text" />
                    </Group>
                    <Group>
                        <Lable>انتخاب نوع</Lable>
                        <MyDropDown/>
                    </Group>
                    <Group>
                        <Lable htmlFor="explain" >توضیحات</Lable>
                        <TextArea rows="5" id="explain" />
                    </Group>
                    <MyButton mg="3" text="ارسال" onClick = {handleOnClick} />
                </Form>
            </ContentContainer>          
          </PopUpBody>
          <BtnClose onClick = {props.close}><MyCloseIcon/></BtnClose>
          {
                showMessage && <MySnackbar message={message} status={status} showMessage={showMessage} setShowMessage={setShowMessage} /> 
          }
        </PopUpContainer>
      );
};

// const mapStateToProps = (state, props) => {
//   return createStructuredSelector({
//       selectedCart: selectedCart(state, props.data.id), 
//   });
// };

// const mapDispatchToProps = (dispatch) => ({
//   addItemToSave : (id) => dispatch(addItem(id)),
// });

// export default connect(mapStateToProps , mapDispatchToProps)(PopUpUpload);

export default PopUpUpload;