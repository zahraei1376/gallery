import SearchActionType from './search.type';

const INITIAL_STATE={
    text:''
};

const SearchReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case SearchActionType.ADD_TEXT:
            return{
                ...state,
                text: action.payload
            }
        case SearchActionType.REMOVE_TEXT:
            return{
                ...state,
                text:'',
            }
            
        default:
            return state
            
    }
};

export default SearchReducer;