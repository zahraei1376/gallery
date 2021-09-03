import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Card, Title , Container ,ShowAllContainer} from './showTopics.styles';
import Slider from "react-slick";

const ShowTopics = () => {
    const [topice,setTopics] = useState([]);

  useEffect(() => {
    setTopics([
        { name:'حیوانات اهلی'},
        { name:'حیوانات وحشی'},
        { name:'حیوانات'},
        { name:'پوشاک'},
        { name:'طراحی داخلی'},
        { name:'مردم'},
        { name:'طبیعت'},
        { name:'فیلم'},
        { name:'ماشین'},
        { name:'خیابان'},
     ]);
  }, []);

  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="container">
        <Container>
            {topice.length === 0 ? (
                ""
            ) : (
                //   <div>
                    <Slider {...settings}>
                        {topice.map((current , index) => (
                            // <div className="out" key={index}>
                            <Card key={index}>
                                <Title>
                                    {current.name}
                                </Title>
                            </Card>
                            // </div>
                        ))}
                    </Slider>
                // </div>
            )}
        </Container>
        <ShowAllContainer>
            <Title>نمایش همه</Title>
        </ShowAllContainer>
    </div>
  );
}

export default ShowTopics;

