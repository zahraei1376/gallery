import SearchActionType from './search.type';

export const addText = item => ({
    type: SearchActionType.ADD_TEXT,
    payload: item
});

export const RemoveText = () =>({
    type:CartActionType.REMOVE_TEXT,
    // payload:item
});