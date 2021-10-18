// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import {Card, Title , Container ,ImageContainer,Image,TitleShowAll,ShowAllContainer} from './showTopics.styles';
// import Slider from "react-slick";
// import { useRouter } from 'next/router';
// import {animals , colors , Topics} from '../../generalMethod/topics';

// const ShowTopicsForGallery = () => {
//   const [topics,setTopics] = useState(Topics);
//   const router = useRouter()
//   // useEffect(() => {
//   //   setTopics([
//   //       { name:'حیوانات اهلی' , photographer:'زهرا علیپور',title:"غروب دل انگیز", discription:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' , picture:'/img/user.png' , topicImage:'/img/topics/topic-6.jpg' , images: [...animals]},
//   //       { name:'حیوانات وحشی' , photographer:'زهرا علیپور',title:"مکان های زیبا", discription:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' , picture:'/img/user.png' , topicImage:'/img/topics/topic-9.jpg' , images: [...animals]},
//   //       { name:'حیوانات' , photographer:'زهرا علیپور',title:"عاشقانه", discription:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' , picture:'/img/user.png' , topicImage:'/img/topics/topic-8.jpg' , images: [...animals]},
//   //       { name:'پوشاک' , photographer:'زهرا علیپور',title:"آلات موسیقی", discription:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' , picture:'/img/user.png' , topicImage:'/img/topics/topic-10.jpg' , images: [...animals]},
//   //       { name:'طراحی داخلی' , photographer:'زهرا علیپور',title:"حشرات", discription:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' , picture:'/img/user.png' , topicImage:'/img/topics/topic-11.jpg' , images: [...animals]},
//   //       { name:'مردم' , photographer:'زهرا علیپور',title:"زیبایی روی آب", discription:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' , picture:'/img/user.png' , topicImage:'/img/topics/topic-12.jpg' , images: [...animals]},
//   //       { name:'طبیعت' , photographer:'زهرا علیپور',title:"گل های زیبا", discription:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' , picture:'/img/user.png' , topicImage:'/img/topics/topic-7.jpg', images: [...animals]},
//   //       { name:'فیلم' , photographer:'زهرا علیپور',title:"شکوفه های بهاری", discription:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' , picture:'/img/user.png' , topicImage:'/img/topics/topic-13.jpg' , images: [...animals]},
//   //       { name:'ماشین' , photographer:'زهرا علیپور',title:"شکوفه های بهاری", discription:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' , picture:'/img/user.png' , topicImage:'/img/topics/topic-14.jpg' , images: [...animals]},
//   //       { name:'خیابان' , photographer:'زهرا علیپور',title:"شکوفه های بهاری", discription:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' , picture:'/img/user.png' , topicImage:'/img/topics/topic-15.jpg' , images: [...animals]},
//   //    ]);
//   // }, []);

//   let settings = {
//     infinite: false,
//     speed: 500,
//     arrows: true,
//     slidesToShow: 6,
//     slidesToScroll: 1,

//     responsive: [
//       {
//         breakpoint: 960,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <div className="container">
//        {/* <ShowAllContainer 
//         // onClick={()=> router.push('/showAllTopic')}
//          >
//             <TitleShowAll onClick={() => router.push({
//               pathname: '/showAllTopic',
//               query: { topics: topics },
//             })}>نمایش همه</TitleShowAll>
//         </ShowAllContainer> */}
//         <Container>
//             {topics.length === 0 ? (
//                 ""
//             ) : (
//                 //   <div>
//                     <Slider {...settings}>
//                         {topics.map((current , index) => {
                          
//                           return(
//                             // <div className="out" key={index}>
//                             <Card key={index}  bg = {colors[index] && colors[index].bg ? colors[index].bg : '#fff'} onClick={() => router.push({
//                               pathname: '/gallery',
//                               // state: { images:  current.images  },
//                               query: { images: JSON.stringify(current.images) } 
//                               // query: { images: current.images},
//                               // query: { images: 'zahar'},
//                               })}>
//                                 <Title color = {colors[index] && colors[index].color ? colors[index].color : '#000' }>
//                                     {current.name}
//                                 </Title>
//                                 <ImageContainer>
//                                     <Image src = {current.topicImage}/>
//                                 </ImageContainer>
                                
//                             </Card>
//                             // </div>
//                         )})}
//                     </Slider>
//                 // </div>
//             )}
//         </Container>
       
//     </div>
//   );
// }

// export default ShowTopicsForGallery;



import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Card, Title , Container ,ImageContainer,Image,TitleShowAll,ShowAllContainer} from './showTopics.styles';
import Slider from "react-slick";
// import { useRouter } from 'next/router';
import {colors , Filters} from '../../generalMethod/topics';

const ShowTopicsForGallery = ({setTopic}) => {
  const [filters,setFilters] = useState(Filters);
  // const router = useRouter();

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
                            // onClick={() => router.push({
                            //   pathname: '/gallery',
                            //   query: { images: JSON.stringify(current.images) } 
                            //   })}
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