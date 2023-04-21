import { useState, useEffect } from 'react';
import {
    SpinnerContainer, GallerySecion, Gallery__item, CheckIcon,
    ImageWrapper, TitleContainer, Title, SavedBoxContainer,
    GalleryColumn, DownloadContainer, Download, InfoIcon,
    NotFoundContainer, ImageContainer,
} from './savedImageGallery.styles';
import Image from 'next/image';
import ImageGallery from '../galleryComponent/imageGallery.cmponent';
//////////////////////////////////////////////
import MySpinner from '../MySpinner/MySpinner.component';
import { limitRecipeTitle, downloadFile } from '../../generalMethod/limitRecipeTitle';
import ShowImage from '../../component/imageShow/showImage.component';
import notFound from '../../assets/img/notFound.png';

const SavedGallery = ({ biger, together, uploadedImage, images, imageForDelete, setImageForDelete }) => {
    //////////////////////////////////////////////
    const [loading, setLoading] = useState(false);
    const [converterImages, setConverterImages] = useState([]);
    const [size, setSize] = useState(0);
    const [showComponent, setShowComponent] = useState(false);
    const [srcImage, setSrcImage] = useState('');
    ///////////////////////////////////////////////
    const handleShowImage = (imageInfo) => {
        setSrcImage(imageInfo);
        toggleShowImage();
    }

    const toggleShowImage = () => {
        setShowComponent(pre => !pre);
    }
    //////////////////////////////////////////////
    function ResizeWindows() {
        var SIZE = 4;
        if (images && images.length > 0 && images[0]) {
            if (window.innerWidth < 540) {
                SIZE = 1;
                setConverterImages(chunkify(images, SIZE, true));
            } else if (window.innerWidth < 768) {
                SIZE = 2;
                setConverterImages(chunkify(images, SIZE, true));
            } else {
                if (!biger) {
                    if (window.innerWidth < 1024) {
                        SIZE = 3;
                        setConverterImages(chunkify(images, SIZE, true));
                    } else {
                        SIZE = 4;
                        setConverterImages(chunkify(images, SIZE, true));
                    }
                } else {
                    SIZE = 3;
                    setConverterImages(chunkify(images, SIZE, true));
                }

            }

            setSize(SIZE);
        } else {
            setConverterImages([]);
        }

    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            ResizeWindows();
        });
        return () => window.removeEventListener("resize", ResizeWindows);
    }, [images]);

    useEffect(() => {
        ResizeWindows();
    }, [images]);
    //////////////////////////////////////////////
    function chunkify(a, n, balanced) {
        if (n < 2)
            return [a];

        var len = a.length,
            out = [],
            i = 0,
            size;

        if (len % n === 0) {
            size = Math.floor(len / n);
            while (i < len) {
                out.push(a.slice(i, i += size));
            }
        }

        else if (balanced) {
            while (i < len) {
                size = Math.ceil((len - i) / n--);
                out.push(a.slice(i, i += size));
            }
        }

        else {

            n--;
            size = Math.floor(len / n);
            if (len % size === 0)
                size--;
            while (i < size * n) {
                out.push(a.slice(i, i += size));
            }
            out.push(a.slice(size * n));

        }

        return out;
    }

    const handleSelectImage = (imageInfo) => {
        const existingCartItem = imageForDelete.find(
            cartItem => cartItem === imageInfo._id
        );
        var temp = [...imageForDelete];
        if (existingCartItem) {
            for (var i = 0; i < temp.length; i++) {
                if (temp[i] === imageInfo._id) {
                    temp.splice(i, 1);
                    break;
                }
            }
        } else {
            temp.push(imageInfo._id);

        }
        setImageForDelete(temp);
    }
    //////////////////////////////////////////////

    const foundSelectedOrNot = (id) => {
        const existingCartItem = imageForDelete.find(
            cartItem => cartItem === id
        );
        if (existingCartItem) return true;
        return null

    }

    return (
        <>
            {!loading ?

                converterImages.length ? <GallerySecion size={size} together={together}>
                    {converterImages.map((CVI, topIndex) => (
                        <GalleryColumn key={topIndex}>
                            {CVI && CVI.length > 0 ?
                                CVI.map((image, index) => {
                                    var selected = foundSelectedOrNot(image._id);
                                    return (
                                        <Gallery__item uploadedImage={uploadedImage} together={together} key={index} selected={selected}>
                                            <ImageWrapper together={together} onClick={() => handleSelectImage(image)}>
                                                <ImageGallery imageSrc={image.src} />
                                            </ImageWrapper>
                                            <TitleContainer>
                                                <DownloadContainer onClick={() => downloadFile(image.src, 0)} >
                                                    <Download />
                                                </DownloadContainer>
                                                <DownloadContainer onClick={() => handleShowImage(image)} >
                                                    <InfoIcon />
                                                </DownloadContainer>
                                                <Title>{limitRecipeTitle(image.title, 25)}</Title>

                                            </TitleContainer>
                                            <CheckIcon selected={selected} />
                                        </Gallery__item>
                                    )
                                }
                                )
                                : ""}


                        </GalleryColumn>
                    ))}
                </GallerySecion> : <NotFoundContainer><ImageContainer><Image src={notFound} layout="fill" alt="image" /></ImageContainer></NotFoundContainer>
                : <SpinnerContainer><MySpinner /></SpinnerContainer>}
            {showComponent && <ShowImage uploadedImage={uploadedImage} data={srcImage} close={toggleShowImage} caption="" />}
        </>
    )
};

export default SavedGallery;