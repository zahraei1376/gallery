

/////////////////////
import React from 'react';
import {Container , ImgContainer ,MyImage , ParagContainer,Parags,
TitleContainer,Title} from './wayBuy.styles';
import naturePic from '../../assets/img/nature2.jpg';

const WayBuy = () =>{
    return(
      <Container>
          <ImgContainer>
            <MyImage src={naturePic} />
          </ImgContainer>

          <TitleContainer>
              <Title>طبیعت گردی ، شناخت طبیعت</Title>
          </TitleContainer>
          
          <ParagContainer>
                <Parags>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی</Parags>
          </ParagContainer>
      </Container>
    )
};

export default WayBuy;