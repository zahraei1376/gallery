import React ,{useState} from 'react';
import {ServiceConatiner ,ServiceTitle,ArrowIcon,List,ListItems,ListLink,ArrowIconList,ServiceName,ServiceTextContainer,ServiceTextSpan,ServiceTextQuestion,ServiceTextService,ServiceTextServiceSpan ,ServiceTextBotton, ServiceBg, MainContainer, ServiceSubTitle, ServiceContent, MainTitle, ArrowButton} from './OurServices.styles';

// import question  from '../../asset/img/question.png'; 

const OurServices = () =>{
    const [show,setShow] = useState(false);
    return (
        <ServiceConatiner>
            <MainContainer>
                <ServiceContent>
                    <ServiceTitle>این میتونه محیط موردعلاقه شما باشه</ServiceTitle>
                    <ServiceSubTitle>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </ServiceSubTitle>
                    <MainTitle active href="#" onMouseOver = {() => setShow(false)}><ArrowButton><ArrowIcon /></ArrowButton>مشاهده طبیعت</MainTitle>
                    <MainTitle show = {show ? true : null} href="#" onMouseOver = {() => setShow(true)}><ArrowButton show = {show ? true : null} ><ArrowIcon /></ArrowButton>مشاهده حیوانات</MainTitle>
                    <List show = {show ? true : null}>
                        <ListItems delay="0" ><ListLink href="#"><ArrowIconList/>حیوانات اهلی</ListLink></ListItems>
                        <ListItems delay="0.2" ><ListLink href="#"><ArrowIconList/>حیوانات وحشی</ListLink></ListItems>
                        <ListItems delay="0.4" ><ListLink href="#"><ArrowIconList/>حیوانات خانگی</ListLink></ListItems>
                    </List>
                </ServiceContent>

                <ServiceBg>
                        
                </ServiceBg>
            </MainContainer>
        </ServiceConatiner>
    )
};


export default OurServices;