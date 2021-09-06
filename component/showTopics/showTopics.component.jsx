import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Card, Title , Container ,TitleShowAll,ShowAllContainer,ImageContainer ,Image} from './showTopics.styles';
import Slider from "react-slick";
import { useRouter } from 'next/router';
import {animals} from '../../generalMethod/topics';

const ShowTopics = () => {
  const [topics,setTopics] = useState([]);
  const router = useRouter()
  useEffect(() => {
    setTopics([
        { name:'حیوانات اهلی' , photographer:'زهرا علیپور',title:"غروب دل انگیز", discription:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' , picture:'/img/user.png' , topicImage:'/img/topics/topic6.jpg' , images: [...animals]},
        { name:'حیوانات وحشی' , photographer:'زهرا علیپور',title:"مکان های زیبا", discription:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' , picture:'/img/user.png' , topicImage:'/img/topics/topic7.jpg' , images: [...animals]},
        { name:'حیوانات' , photographer:'زهرا علیپور',title:"عاشقانه", discription:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' , picture:'/img/user.png' , topicImage:'/img/topics/topic8.jpg' , images: [...animals]},
        { name:'پوشاک' , photographer:'زهرا علیپور',title:"آلات موسیقی", discription:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' , picture:'/img/user.png' , topicImage:'/img/topics/topic1.jpg' , images: [...animals]},
        { name:'طراحی داخلی' , photographer:'زهرا علیپور',title:"حشرات", discription:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' , picture:'/img/user.png' , topicImage:'/img/topics/topic2.jpg' , images: [...animals]},
        { name:'مردم' , photographer:'زهرا علیپور',title:"زیبایی روی آب", discription:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' , picture:'/img/user.png' , topicImage:'/img/topics/topic3.jpg' , images: [...animals]},
        { name:'طبیعت' , photographer:'زهرا علیپور',title:"گل های زیبا", discription:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' , picture:'/img/user.png' , topicImage:'/img/topics/topic4.jpg', images: [...animals]},
        { name:'فیلم' , photographer:'زهرا علیپور',title:"شکوفه های بهاری", discription:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' , picture:'/img/user.png' , topicImage:'/img/topics/topic5.jpg' , images: [...animals]},
        { name:'ماشین' , photographer:'زهرا علیپور',title:"شکوفه های بهاری", discription:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' , picture:'/img/user.png' , topicImage:'/img/topics/topic5.jpg' , images: [...animals]},
        { name:'خیابان' , photographer:'زهرا علیپور',title:"شکوفه های بهاری", discription:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' , picture:'/img/user.png' , topicImage:'/img/topics/topic5.jpg' , images: [...animals]},
     ]);
  }, []);

  let settings = {
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
       <ShowAllContainer 
        // onClick={()=> router.push('/showAllTopic')}
         >
            <TitleShowAll onClick={() => router.push({
              pathname: '/showAllTopic',
              query: { topics: topics },
            })}>نمایش همه</TitleShowAll>
        </ShowAllContainer>
        <Container>
            {topics.length === 0 ? (
                ""
            ) : (
                //   <div>
                    <Slider {...settings}>
                        {topics.map((current , index) => {
                          return(
                            // <div className="out" key={index}>
                            <Card key={index} onClick={() => router.push({
                              pathname: '/gallery',
                              // state: { images:  current.images  },
                              query: { images: current.images},
                              // query: { images: 'zahar'},
                              })}>
                                <ImageContainer>
                                    <Image src = {current.topicImage}/>
                                </ImageContainer>
                                <Title>
                                    {current.name}
                                </Title>
                            </Card>
                            // </div>
                        )})}
                    </Slider>
                // </div>
            )}
        </Container>
       
    </div>
  );
}

export default ShowTopics;

