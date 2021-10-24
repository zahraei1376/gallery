import { useState , useEffect } from 'react';
import {PopUpContainer , PopUpBody ,Form, MyCloseIcon,Group,Lable,Input,SettingIcon,
  ContentContainer,BtnClose,LogoContainer,Logo,Title, PopUpHeader,FileContainer,} from './popupChangeProfile.styles';
import {addItem} from '../../redux/cart/cart.action';
import { connect } from 'react-redux';
import MySnackbar from '../messageBox/messageBox.component';
import { createStructuredSelector } from 'reselect';
import { selectedCart } from '../../redux/cart/cart.selectors';
import MyButton from '../ButtonComponent/Button.component';
// import logo from '../../assets/img/galleryLg.png';
import logo from '../../assets/img/user.png';
const PopUpProfile = ({currentUser , close}) => {
    const [showMessage,setShowMessage] = useState(false);
    const [message,setMessage] =useState('');
    const [status,setStatus] = useState('0');
    const [load , setLoad] = useState(false);
    const [state, setState] = useState({
        photographer : '',
        photographerPicture:'',
        email:'',
        username:'',
        password: '',
        location:'',
    })
    /////////////////////////////////////////////////////////////
    useEffect(() =>{
        fetch("/api/profile", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': currentUser
            },
            method:"GET",
            // body: JSON.stringify(data)
        })
        .then((response)=>{ 
            return response.json();   
        })
        .then((dataRes)=>{ 
            if(dataRes.seccess){
                console.log('dataRes.data',dataRes.data);
                setState(dataRes.data);
            }else{
                setStatus('0')
                setMessage(dataRes.message)
                setShowMessage(true);
                // setLoading(false);
            }

        })
        .catch(err => {
            setStatus('0')
            setMessage(err.message)
            setShowMessage(true);
            // setLoading(false);
        });
    },[]);

    const handleOnClick = async(e) =>{
       e.preventDefault();
        const data = {
            photographer : state.photographer,
            photographerPicture: state.photographerPicture,
            email: state.email,
            username: state.username,
            password: state.password,
            location:state.location,
        }

        await fetch("/api/profile", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': currentUser
            },
            method:"POST",
            body: JSON.stringify(data)
        })
        .then((response)=>{ 
            return response.json();   
        })
        .then((dataRes)=>{ 
            if(dataRes.seccess){
                console.log('dataRes.data',dataRes.data);
                setState(dataRes.data);
                setStatus('1')
                setMessage('اطلاعات شما با موفقیت ثبت شد');
                setShowMessage(true);
            }else{
                setStatus('0')
                setMessage(dataRes.message)
                setShowMessage(true);
            //    setLoading(false);
            }

        })
        .catch(err => {
            setStatus('0')
            setMessage(err.message)
            setShowMessage(true);
        //    setLoading(false);
        });
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
                                <Logo layout="fill" src={state.photographerPicture ? state.photographerPicture: logo}/>
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
                        <Lable htmlFor="name" >نام</Lable>
                        <Input id="name" type="text" value={state.photographer} onChange = {e => setState({...state , photographer:e.target.value })} />
                    </Group>
                    {/* <Group>
                        <Lable htmlFor="pass" >پسورد</Lable>
                        <Input id="pass" type="password" value={state.password} onChange = {e => setState({...state , password:e.target.value })}/>
                    </Group> */}
                    <Group>
                        <Lable htmlFor="email" >ایمیل</Lable>
                        <Input id="email" type="text" value={state.email} onChange = {e => setState({...state , email:e.target.value })}/>
                    </Group>
                    {/* <Group>
                        <Lable htmlFor="phone" >تماس</Lable>
                        <Input id="phone" type="text" />
                    </Group> */}
                    <Group>
                        <Lable htmlFor="location" >موقعیت مکانی</Lable>
                        <Input id="location" type="text" value={state.location} onChange = {e => setState({...state , location:e.target.value })} />
                    </Group>
                    {/* <Group> */}
                    <MyButton mg="3" text="ارسال" onClick = {e => handleOnClick(e)} />
                    {/* </Group> */}
                </Form>
            </ContentContainer>          
          </PopUpBody>
          <BtnClose onClick = {close}><MyCloseIcon/></BtnClose>
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

// export default connect(mapStateToProps , mapDispatchToProps)(PopUpProfile);

export default PopUpProfile;