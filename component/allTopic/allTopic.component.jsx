import {AllTopicContainer ,AllTopicTitleContainer, AllTopicTitle , AllTopicSubTitle  ,AllTopicContent} from './allToppic.styles';
import TopicBox from './topicBox.component';
import {topics} from '../../generalMethod/topics';

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