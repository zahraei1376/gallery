import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Card, Title , Container ,TitleShowAll,ShowAllContainer,ImageContainer ,Image} from './showTopics.styles';
import Slider from "react-slick";
import { useRouter } from 'next/router';
import {Topics} from '../../generalMethod/topics';

const ShowTopics = () => {
  const [topics,setTopics] = useState(Topics);
  const router = useRouter();
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
         >
            <TitleShowAll onClick={() => router.push({
              pathname: '/showAllTopic',
            })}>نمایش همه</TitleShowAll>
        </ShowAllContainer>
        <Container>
            {topics.length === 0 ? (
                ""
            ) : (
                <Slider {...settings}>
                    {topics.map((current , index) => {
                      return(
                        <Card key={index} onClick={() => router.push({
                          pathname: '/gallery',
                          query: { images: current.name}
                          })}>
                            <ImageContainer>
                                <Image src = {current.topicImage}/>
                            </ImageContainer>
                            <Title>
                                {current.name}
                            </Title>
                        </Card>
                    )})}
                </Slider>
            )}
        </Container>
       
    </div>
  );
}

export default ShowTopics;

