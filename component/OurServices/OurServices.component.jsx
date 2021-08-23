import React ,{useState} from 'react';
import {ServiceConatiner ,ListContainer,MyImageWrapper ,MyImageWrapperHide,
    MyImage,MyImageHide, ImgContainer,ServiceTitle,ArrowIcon,List,ListItems,
    ListLink,ArrowIconList,ServiceBg, MainContainer, ServiceSubTitle,
    ServiceContent, MainTitle, ArrowButton, ServiceImage,ServiceImageMobile, ImgContainerMobile, MyImageWrapperMobile, MyImageMobile, MyImageWrapperHideMobile, MyImageHideMobile, ItemMobile, ArrowButtonMobile} from './OurServices.styles';
// import Image from 'next/image';
import nature  from '../../assets/img/nature9.jpg';
import nature2 from '../../assets/img/nature12.jpg'; 
import nature3 from '../../assets/img/nature13.jpg';
import nature4 from '../../assets/img/nature14.jpg';  


const OurServices = () =>{
    const [show,setShow] = useState(false);
    // const [imageSrc , setImageSrc] = useState(nature);

    const handleImage = (src , act) =>{
        // setImageSrc(src);
        setShow(act);
    }

    return (
        <ServiceConatiner>
            <MainContainer>
                <ServiceImage show = {show ? true : null}>
                    <ImgContainer>
                        <MyImageWrapper show = {show ? true : null}>
                            <MyImage src={nature}/>
                        </MyImageWrapper>
                        <MyImageWrapperHide show = {show ? true : null}>
                            <MyImageHide src={nature2} />
                        </MyImageWrapperHide>
                    </ImgContainer>
                </ServiceImage>

                <ServiceImageMobile>
                    {/* <ImgContainerMobile> */}
                        <MyImageWrapperMobile>
                            <MyImageMobile src={nature4}/>
                            <ItemMobile href="#">
                                مشاهده حیوانات
                                <ArrowButtonMobile ><ArrowIcon /></ArrowButtonMobile>
                            </ItemMobile>
                        </MyImageWrapperMobile>
                        <MyImageWrapperMobile>
                            <MyImageMobile src={nature3} />
                            <ItemMobile href="#">
                                مشاهده حیوانات
                                <ArrowButtonMobile ><ArrowIcon /></ArrowButtonMobile>
                            </ItemMobile>
                        </MyImageWrapperMobile>
                    {/* </ImgContainerMobile> */}
                </ServiceImageMobile>
                <ServiceContent>
                    <ServiceTitle>این میتونه محیط موردعلاقه شما باشه</ServiceTitle>
                    <ServiceSubTitle>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </ServiceSubTitle>
                    <ListContainer>
                        <MainTitle active href="#" onMouseOver = {() => handleImage(nature , false)}><ArrowButton><ArrowIcon /></ArrowButton>مشاهده طبیعت</MainTitle>
                        <MainTitle show = {show ? true : null} href="#" onMouseOver = {() => handleImage(nature2 , true)}><ArrowButton show = {show ? true : null} ><ArrowIcon /></ArrowButton>مشاهده حیوانات</MainTitle>
                        <List show = {show ? true : null}>
                            <ListItems delay="0" ><ListLink href="#"><ArrowIconList/>حیوانات اهلی</ListLink></ListItems>
                            <ListItems delay="0.2" ><ListLink href="#"><ArrowIconList/>حیوانات وحشی</ListLink></ListItems>
                            <ListItems delay="0.4" ><ListLink href="#"><ArrowIconList/>حیوانات خانگی</ListLink></ListItems>
                        </List>
                    </ListContainer>
                    
                </ServiceContent>
                
                    
                {/* <ServiceBg>
                    
                </ServiceBg> */}
            </MainContainer>
        </ServiceConatiner>
    )
};


export default OurServices;