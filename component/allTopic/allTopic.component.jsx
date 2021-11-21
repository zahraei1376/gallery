import { useState ,useEffect} from 'react';
import {AllTopicContainer ,AllTopicContent} from './allToppic.styles';
import TopicBox from './topicBox.component';
import {Topics} from '../../generalMethod/topics';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

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