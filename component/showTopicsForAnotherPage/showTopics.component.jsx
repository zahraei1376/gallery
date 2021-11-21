import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Card, Title , Container ,ImageContainer,Image} from './showTopics.styles';
import Slider from "react-slick";
import {colors , Filters} from '../../generalMethod/topics';

const ShowTopicsForGallery = ({setTopic}) => {
  const [filters,setFilters] = useState(Filters);

  let settings = {
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
        <Container>
            {filters.length === 0 ? (
                ""
            ) : (
                    <Slider {...settings}>
                        {filters.map((current , index) => {
                          
                          return(
                            <Card key={index}  bg = {colors[index] && colors[index].bg ? colors[index].bg : '#fff'} 
                            onClick={() => setTopic(current.name)}
                              >
                                <Title color = {colors[index] && colors[index].color ? colors[index].color : '#000' }>
                                    {current.name}
                                </Title>
                                <ImageContainer>
                                    <Image src = {current.topicImage}/>
                                </ImageContainer>
                                
                            </Card>
                        )})}
                    </Slider>
            )}
        </Container>
       
    </div>
  );
}

export default ShowTopicsForGallery;