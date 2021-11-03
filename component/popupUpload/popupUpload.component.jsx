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
    const [info , setInfo] = useState({
        properties:'',
        title:'',
        sunTitle:'',
        myFile:null,
    });
    /////////////////////////////////////////////////////////////
    const handleOnClick = async() =>{
       alert('senddddd');
       e.preventDefault();
        const formData = new FormData();
        formData.append('properties', info.properties);
        formData.append('title',info.title);
        formData.append('sunTitle',info.sunTitle);
        formData.append('myFile',info.myFile);
        await fetch("/api/profile/edit", {
            headers: {
                'Authorization': currentUser
            },
            method:"POST",
            body:formData
        })
        .then((response)=>{ 
            return response.json();   
        })
        .then((dataRes)=>{
            console.log('1111111111'); 
            if(dataRes.seccess){
                setStatus('1')
                setMessage('اطلاعات شما با موفقیت ثبت شد');
                setShowMessage(true);
            }else{
                if(dataRes.reload){
                    console.log('1111111111');
                    setStatus('0')
                    setMessage(dataRes.message)
                    setShowMessage(true);
                    setTimeout(() => {
                        router.push('/login')
                    }, 1000);
                }else{
                    console.log('2222222222');
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
        });
    }


    const handlefile = (event) => {
        setInfo({...info , myFile:event.target.files[0]});
    };

    const handleValue = (val) =>{
        console.log('valllllllllllllll' , val);
        setInfo({...info , properties: val});
    }

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
                        <Input id="title" type="text" onChange={e => setInfo({...info , title: e.target.value})} />
                    </Group>
                    <Group>
                        <Lable>انتخاب نوع</Lable>
                        <MyDropDown handleValue={handleValue} />
                    </Group>
                    <Group>
                        <Lable htmlFor="explain" >توضیحات</Lable>
                        <TextArea rows="5" id="explain" onChange={e => setInfo({...info , sunTitle: e.target.value})} />
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