import { useState ,useEffect} from 'react';
import {AllTopicContainer ,AllTopicTitleContainer,TitleContainer, AllTopicTitle , AllTopicSubTitle  ,AllTopicContent} from './allToppic.styles';
import TopicBox from './topicBox.component';
import {Topics} from '../../generalMethod/topics';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { Button, ButtonContainer } from '../footer/footer.styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width:'100%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      '& > *': {
        marginBottom: '10rem',
      },
    },
  }));

const ShowAllTopicComponent = () =>{
    const classes = useStyles();
    const number = 9;
    // const [count , setCount] = useState(Math.ceil(Topics.length / number));
    const [page, setPage] = useState(1);
    const [showTopics , setShowTopics] = useState([]);
    useEffect(() =>{
        let newArray = Topics.slice((page-1) * number , number * page);
        setShowTopics(newArray);
    } , [page]);

    const handleChangePage  = (event, value) => {
        setPage(value);
    };
    
    return (
        <AllTopicContainer>
            {/* <AllTopicTitleContainer>
            <ButtonContainer>
                    <Button
                    onClick={()=> router.push('/login')} 
                    >تماس با ما</Button>
                </ButtonContainer>
                <TitleContainer>
                
                <AllTopicTitle>عنوان های ما</AllTopicTitle>
                <AllTopicSubTitle>جهان را از دید ما و دریچه دوربین ما زیبا ببینید</AllTopicSubTitle>
                </TitleContainer>
                
            </AllTopicTitleContainer> */}
            <AllTopicContent>
                {
                    showTopics.map((topic , index) =>(
                        <TopicBox key={index} topic={topic}/>
                    ))
                    
                }
            </AllTopicContent>
            <div className={classes.root}>
                <Pagination 
                    count={Math.ceil(Topics.length / number)}
                    color="primary"
                    size="large"
                    page={page}
                    onChange={handleChangePage}
                />
            </div>
            
        </AllTopicContainer>
    )
};

export default ShowAllTopicComponent;