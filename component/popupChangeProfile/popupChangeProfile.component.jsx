import { useState, useEffect, useRef } from 'react';
import {
    PopUpContainer, PopUpBody, Form, MyCloseIcon, Group, Lable, Input, SettingIcon,
    ContentContainer, BtnClose, LogoContainer, Logo, Title, PopUpHeader, FileContainer, ContentFile, ImageWrapper, MyImage,
} from './popupChangeProfile.styles';
import MySnackbar from '../messageBox/messageBox.component';
import MyButton from '../ButtonComponent/Button.component';
import { useRouter } from 'next/router';
import ImageCropper from './cropImage';
import { v4 as uuidv4 } from 'uuid';
/////////////////////////////////////////
import { setApiRequest } from '../../utils/getDataOFServer';

import useSWR from 'swr'
import MySpinner from '../MySpinner/MySpinner.component';

const fetcher = (url, user) => fetch(url, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': user
    },
    method: "GET",
}).then((res) => res.json());
/////////////////////////////////////////
const PopUpProfile = ({ setShowProfile, currentUser, close, refreshData, setTriggerDeleteFile, triggerDeleteFile }) => {
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('0');
    const [srcImage, setSrcImage] = useState('');
    const [imageToCrop, setImageToCrop] = useState(undefined);
    const [croppedImage, setCroppedImage] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const previewCanvasRef = useRef(null);

    const [state, setState] = useState({
        photographer: '',
        photographerPicture: '',
        email: '',
        username: '',
        password: '',
        location: '',
    })
    /////////////////////////////////////////////////////////////
    const router = useRouter();
    ///////////////////////////////////////////////////////////// 
    const { data, mutate, error } = useSWR(['/api/profile', currentUser], fetcher)
    useEffect(() => {
        if (data) {
            setState(data.data);
            setSrcImage(data.data?.photographerPicture);
            setImageToCrop(data.data?.photographerPicture);
        }
    }, [data]);
    /////////////////////////////////////////////////////////////
    function generateDownload() {
        var fileIdL = state?.photographerPicture?.name ? state?.photographerPicture?.name?.split('.') : state?.photographerPicture?.split('.');
        const format = fileIdL[fileIdL?.length - 1].toLowerCase();
        ///////////////
        var mimetype = '';
        ///////////////////////////////
        switch (format) {
            case 'jpeg':
                // JPEG Image
                mimetype = 'image/jpeg';
                break;
            case 'jpg':
                // JPEG Image
                mimetype = 'image/jpg';
                break;
            case 'png':
                // Portable Network Graphics (PNG)
                mimetype = 'image/png';
                break;
            default:
                break;
        }
        //////////////////////
        var file;
        return new Promise((resolve, reject) => {
            previewCanvasRef.current.toBlob(
                (blob) => {
                    if (!blob) {
                        reject(new Error('Canvas is empty'));
                        return;
                    }

                    blob.name = "cropped_image";
                    file = new File([blob], uuidv4() + `.${format}`, {
                        type: mimetype,
                    });

                    resolve(file);
                }, 'image/jpeg'
            );
        });
    }
    /////////////////////////////////////////////////////////////
    const handleOnClick = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('photographer', state.photographer);
        formData.append('email', state.email);
        formData.append('location', state.location);
        if (imageToCrop) {
            var file = await generateDownload();
            formData.append('myFile', file);
        }

        const { error, isLoaded, data, reload } = await setApiRequest("/api/profile/edit", formData, true, currentUser)
        if (reload) {
            setStatus('0')
            setMessage(error)
            setShowMessage(true);
            setTimeout(() => {
                router.push('/login')
            }, 1000);
        } else if (error) {
            setStatus('0')
            setMessage(error)
            setShowMessage(true);
        } else {
            setStatus('1')
            setMessage('اطلاعات شما با موفقیت ثبت شد');
            setShowMessage(true);
            refreshData();
            setShowProfile(false);
        }
        setLoading(false);
    }
    /////////////////////////////////////////////////////////////
    const handlefile = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () =>
                setImageToCrop(reader.result)
            );
            reader.readAsDataURL(event.target.files[0]);
        }
        setState({ ...state, photographerPicture: event.target.files[0] });
    };

    return (
        <PopUpContainer>
            <PopUpBody>
                <ContentContainer>
                    <PopUpHeader>
                        <FileContainer>
                            <label htmlFor="upload" id="lable" style={{ position: "relative", width: "16rem" }}>
                                <LogoContainer>
                                    {croppedImage || srcImage ? <Logo id="uploadImage"
                                        layout="fill"
                                        src={croppedImage ? croppedImage : srcImage}
                                    /> : ''}
                                    <SettingIcon />
                                </LogoContainer>

                            </label>
                            <input
                                style={{ display: "none" }}
                                type="file"
                                id="upload"
                                accept="image/png,image/jpeg"
                                onChange={e => handlefile(e)}
                            />
                        </FileContainer>

                        <Title>نمایش اطلاعات شما</Title>
                    </PopUpHeader>
                    <Form>

                        <Group>
                            <Lable shirink={state.photographer ? "true" : null} htmlFor="name" >نام</Lable>
                            <Input placeholder=" " id="name" type="text" value={state?.photographer || ""} onChange={e => setState({ ...state, photographer: e.target.value })} />
                        </Group>
                        <Group>
                            <Lable shirink={state.email ? "true" : null} htmlFor="email" >ایمیل</Lable>
                            <Input placeholder=" " id="email" type="text" value={state?.email || ""} onChange={e => setState({ ...state, email: e.target.value })} />
                        </Group>
                        <Group>
                            <Lable shirink={state.location ? "true" : null} htmlFor="location" >موقعیت مکانی</Lable>
                            <Input placeholder=" " id="location" type="text" value={state?.location || ""} onChange={e => setState({ ...state, location: e.target.value })} />
                        </Group>
                        <div>
                            <MyButton mg="3" text="ارسال" onClick={e => handleOnClick(e)} disabled={loading} />
                            {
                                loading && <MySpinner />
                            }
                        </div>
                    </Form>
                </ContentContainer>
                <ContentFile>
                    <div>
                        <ImageCropper
                            previewCanvasRef={previewCanvasRef}
                            imageToCrop={imageToCrop ? imageToCrop : srcImage}
                            onImageCropped={(croppedImage) => setCroppedImage(croppedImage)}
                        />
                    </div>
                </ContentFile>
            </PopUpBody>
            <BtnClose onClick={close}><MyCloseIcon /></BtnClose>
            {
                showMessage && <MySnackbar message={message} status={status} showMessage={showMessage} setShowMessage={setShowMessage} />
            }
        </PopUpContainer>
    );
};

export default PopUpProfile;