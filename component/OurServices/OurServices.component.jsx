import React from 'react';
import {ServiceConatiner , ServiceBox ,ServiceTitle,
    ServiceImageContainer,
    ServiceImage ,ServiceName,ServiceTextContainer,ServiceTextSpan,ServiceTextQuestion,ServiceTextService,ServiceTextServiceSpan ,ServiceTextBotton} from './OurServices.styles';

// import question  from '../../asset/img/question.png'; 

const OurServices = () =>{
    return (
        <ServiceConatiner>
            <ServiceTitle>این میتونه محیط موردعلاقه شما باشه</ServiceTitle>
            <ServiceBox>
                <ServiceImageContainer>
                    {/* <ServiceImage src={question} /> */}
                </ServiceImageContainer>
                <ServiceTextContainer>
                    <ServiceName>سوال از دوست عزیز <ServiceTextSpan>فرانک</ServiceTextSpan></ServiceName>
                    <ServiceTextQuestion>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </ServiceTextQuestion>
                    <ServiceTextService>
                        <ServiceTextServiceSpan>جواب : </ServiceTextServiceSpan>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </ServiceTextService>
                    <ServiceTextBotton><span>&rarr;</span> نمایش همه</ServiceTextBotton>
                </ServiceTextContainer>
            </ServiceBox>
            <ServiceBox>
                <ServiceImageContainer>
                    {/* <ServiceImage src={question} /> */}
                </ServiceImageContainer>
                <ServiceTextContainer>
                    <ServiceName>سوال از دوست عزیز <ServiceTextSpan>فرانک</ServiceTextSpan></ServiceName>
                    <ServiceTextQuestion>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </ServiceTextQuestion>
                    <ServiceTextService>
                        <ServiceTextServiceSpan>جواب : </ServiceTextServiceSpan>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </ServiceTextService>
                    <ServiceTextBotton><span>&rarr;</span> نمایش همه</ServiceTextBotton>
                </ServiceTextContainer>
            </ServiceBox>
            <ServiceBox>
                <ServiceImageContainer>
                    {/* <ServiceImage src={question} /> */}
                </ServiceImageContainer>
                <ServiceTextContainer>
                    <ServiceName>سوال از دوست عزیز <ServiceTextSpan>فرانک</ServiceTextSpan></ServiceName>
                    <ServiceTextQuestion>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </ServiceTextQuestion>
                    <ServiceTextService>
                        <ServiceTextServiceSpan>جواب : </ServiceTextServiceSpan>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </ServiceTextService>
                    <ServiceTextBotton><span>&rarr;</span> نمایش همه</ServiceTextBotton>
                </ServiceTextContainer>
            </ServiceBox>
        </ServiceConatiner>
    )
};


export default OurServices;