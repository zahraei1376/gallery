import React ,{useEffect} from 'react';
// import Carousel from 'react-material-ui-carousel';
// import { Paper, Button } from '@material-ui/core';
////////////////
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
//////////////////////////////////
import {ButtonStyleContainer , ButtonStyle , ImageCarousel ,PaperStyle ,TitleCarousel ,DiscCarousel,TitleConatiner ,CarouselContainer} from './carouselHeader.styles';
// import headerPic1 from '../../assets/img/carousel3.jpg';
// import headerPic2 from '../../assets/img/carousel4.jpg';
// import headerPic3 from '../../assets/img/carousel5.jpg';
// import { useEffect } from 'react';
//////////////////////////////////////
var items = [
    {
        url:'/img/carousel3.jpg',
        // url:'https://newevolutiondesigns.com/images/freebies/nature-hd-background-1.jpg',
        name: "با چند تار مو از اسبتان، او را بهتر بشناسید. ",
        description: "شاید برایتان عجیب و باور نکردنی باشد که با چند تار مو از اسبتان می توانید اطلاعاتی در خصوص میزان هوش، کنجکاوی و آموزش پذیری او بدست آورید. این همه ی ماجرا نیست!"
    },
    {
        url:'/img/carousel4.jpg',
        // url:'https://newevolutiondesigns.com/images/freebies/nature-hd-background-8.jpg',
        name: "با چند تار مو از اسبتان، او را بهتر بشناسید. ",
        description: "شما با همان چند  تار مو همچنین می توانید از میزان ریسک ابتلای او به بیماری های ژنتیکی آگاه شوید و خواهیددانست اگر قرار است کره ای داشته باشد تا چه میزان احتمال انتقال بیماری به فرزندش وجود دارد."
    },
    {
        url:'/img/carousel4.jpg',
        // url:'https://newevolutiondesigns.com/images/freebies/nature-hd-background-24.jpg',
        name: "با چند تار مو از اسبتان، او را بهتر بشناسید. ",
        description: " همان چند تار مو کافیست تا خلوص نژادی اسبتان را بطور دقیق بدانید و تشخیص دهید کره اش پس از تولد چه رنگی خواهد داشت. ماموریت ما این است که برای کشف دنیای اسبتان در کنارتان باشیم و کمک کنیم تا زندگی مطلوبتری برای اسبتان رقم بزنید و یا اگر پرورش دهنده اسب هستید، اسب های رویاییتان را پرورش دهید."

    }
];
//////////////////////////////////////
const Item = ({item}) =>
{
    useEffect(()=>{
        console.log('props.url',item.url);
    },[item.url])

    return (
        <PaperStyle>
            <ImageCarousel src = {item.url} 
            // width={500}
            // height={500}
            layout='fill'
            ></ImageCarousel>
            <TitleConatiner>
                <TitleCarousel>{item.name}</TitleCarousel>
                <DiscCarousel>{item.description}</DiscCarousel>
                {/* <ButtonStyleContainer>
                    <ButtonStyle>
                        ورود
                    </ButtonStyle>
                </ButtonStyleContainer> */}
            </TitleConatiner>
        </PaperStyle>
    )
}
//////////////////////////////////////////
const CarouselComponnet = (props) =>
{
    return (
        <CarouselContainer 
        NextIcon={<NavigateNextIcon/>}
        PrevIcon={<NavigateBeforeIcon/>}
        animation="fade"
        timeout={1500}
        interval={8000}
        style={{ zIndex: -1251 }}
        >
            {
                items.map((item, i) => <Item key={i} item={item} /> )
            }
        </CarouselContainer>
    )
}

export default CarouselComponnet;