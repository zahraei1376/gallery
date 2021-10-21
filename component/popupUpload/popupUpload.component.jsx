import { useState , useEffect } from 'react';
import {PopUpContainer , PopUpBody ,Form, MyCloseIcon,Group,Lable,Input,SettingIcon,
  ContentContainer,BtnClose,LogoContainer,Logo,Title, PopUpHeader,FileContainer,} from './popupUpload.styles';
import {addItem} from '../../redux/cart/cart.action';
import { connect } from 'react-redux';
import MySnackbar from '../messageBox/messageBox.component';
import { createStructuredSelector } from 'reselect';
import { selectedCart } from '../../redux/cart/cart.selectors';
import MyButton from '../ButtonComponent/Button.component';
// import logo from '../../assets/img/galleryLg.png';
import logo from '../../assets/img/user.png';
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
                        <label htmlFor="upload" id="lable" style={{position:"relative" ,width:"16rem"}}>
                            <LogoContainer>
                                <Logo layout="fill" src={props.pic ? props.pic: logo}/>
                                <SettingIcon/>
                            </LogoContainer>
                            
                        </label>
                        <input
                            style={{display:"none"}}
                            type="file"
                            id="upload"
                            // name="file"
                            accept="image/png,image/jpeg"
                            onChange={e => handlefile(e)}
                            // onClick={checkSendfile}
                        />
                    </FileContainer>
                    <Title>نمایش اطلاعات شما</Title>
                </PopUpHeader>
                <Form>
                    
                    <Group>
                        <Lable htmlFor="title" >عنوان</Lable>
                        <Input id="title" type="text" />
                    </Group>
                    <Group>
                        <Lable htmlFor="pass" >پسورد</Lable>
                        <Input id="pass" type="password" />
                    </Group>
                    <Group>
                        <Lable htmlFor="email" >ایمیل</Lable>
                        <Input id="email" type="text" />
                    </Group>
                    <Group>
                        <Lable htmlFor="phone" >تماس</Lable>
                        <Input id="phone" type="text" />
                    </Group>
                    <Group>
                        <Lable htmlFor="location" >موقعیت مکانی</Lable>
                        <Input id="location" type="text" />
                    </Group>
                    {/* <Group> */}
                    <MyButton mg="3" text="ارسال" onClick = {handleOnClick} />
                    {/* </Group> */}
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