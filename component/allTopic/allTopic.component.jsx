import {AllTopicContainer ,AllTopicTitleContainer, AllTopicTitle , AllTopicSubTitle  ,AllTopicContent} from './allToppic.styles';
import TopicBox from './topicBox.component';
const topics = [
    {photographer:'زهرا علیپور',title:"غروب دل انگیز", discription:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' , picture:'/img/user.png' , topicImage:'/img/topics/topic6.jpg'},
    {photographer:'زهرا علیپور',title:"مکان های زیبا", discription:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' , picture:'/img/user.png' , topicImage:'/img/topics/topic7.jpg'},
    {photographer:'زهرا علیپور',title:"عاشقانه", discription:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' , picture:'/img/user.png' , topicImage:'/img/topics/topic8.jpg'},
    {photographer:'زهرا علیپور',title:"آلات موسیقی", discription:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' , picture:'/img/user.png' , topicImage:'/img/topics/topic1.jpg'},
    {photographer:'زهرا علیپور',title:"حشرات", discription:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' , picture:'/img/user.png' , topicImage:'/img/topics/topic2.jpg'},
    {photographer:'زهرا علیپور',title:"زیبایی روی آب", discription:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' , picture:'/img/user.png' , topicImage:'/img/topics/topic3.jpg'},
    {photographer:'زهرا علیپور',title:"گل های زیبا", discription:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' , picture:'/img/user.png' , topicImage:'/img/topics/topic4.jpg'},
    {photographer:'زهرا علیپور',title:"شکوفه های بهاری", discription:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است' , picture:'/img/user.png' , topicImage:'/img/topics/topic5.jpg'},
    
];
const ShowAllTopicComponent = () =>{
    return (
        <AllTopicContainer>
            <AllTopicTitleContainer>
                <AllTopicTitle>عنوان های ما</AllTopicTitle>
                <AllTopicSubTitle>جهان را از دید ما و دریچه دوربین ما زیبا ببینید</AllTopicSubTitle>
            </AllTopicTitleContainer>
            <AllTopicContent>
                {
                    topics.map((topic , index) =>(
                        <TopicBox key={index} topic={topic}/>
                    ))
                    
                }
            </AllTopicContent>
            
        </AllTopicContainer>
    )
};

export default ShowAllTopicComponent;