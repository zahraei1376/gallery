import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import MySnackbar from '../../component/messageBox/messageBox.component';
import Profile from '../../component/profile/profile.component';
import { parseCookies } from '../../utils/parseCookie';
const ProfilePage = ({selected,files,userInfo,error,reload,}) =>{
    /////////////////////////////////////////////////////////
    const [showMessage,setShowMessage] = useState(false);
    const [message,setMessage] = useState('');
    const [status,setStatus] = useState('0');
    ///////////////////////////////////////////////////////////
    const router = useRouter();
    //////////////////////////////////////////////////////////
    useEffect(() =>{
        if(error) {
            setStatus('0')
            setMessage(error)
            setShowMessage(true);
        }
    },[]);

    const refreshData = () => {
        router.replace(router.asPath);
    }

    return (
        <div>
            <Profile 
                selected = {selected}
                files ={files}
                userInfo ={userInfo}
                error = {error}
                reload ={reload}
                refreshData={refreshData}
            />

            {showMessage && <MySnackbar message={message} status={status} showMessage={showMessage} setShowMessage={setShowMessage} />  }
        </div>
    )
};


export async function getServerSideProps({req, res}){
    var data = [] , selected = [] , error =null , reload = false , userInfo = {};
    const myCookie = await parseCookies(req);
    console.log("cookies.get('user')" ,myCookie.user);
    if(!myCookie.user){
        return {
            redirect:{
                destination:'/login'
            }
            
        }
    }
    await fetch("http://localhost:3000/api/myUpload", {
        headers: {
            'Authorization': myCookie.user
            },
        method:"GET",
    })
    .then((response)=>{ 
        return response.json();   
    })
    .then((dataRes)=>{ 
        if(dataRes.seccess){
            var filtered = dataRes.data.files.slice(- 5);
            var count = 5 - filtered.length ;
            if(count !== 0){
                for (let index = 0; index < count; index++) {
                    filtered.unshift(null);
                }
            }
            selected = filtered;
            data = dataRes.data.files;
            userInfo = dataRes.data.user;            
        }else{
            if(dataRes.reload){
                reload = dataRes.reload;
            }else{
                error = dataRes.message;
            }
        }

    })
    .catch(err => {
        error = dataRes.message;
    });


    if(reload){
        return {
            redirect:{
                destination:'/login'
            }
            
        }
    }

    return {
        props : {
            selected : selected,
            files:data,
            userInfo: userInfo,
            error:error,
        },
    }
 
}

export default ProfilePage;