import { combineReducers } from 'redux';
import UserReducer from './user/user.reducer';
import CartReducer from './cart/cart.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
// import storageSession from 'redux-persist/lib/storage/session';

const ConfigPersist = {
    key:'root',
    storage: storage,
    whiteList:['user' , 'cart']
}

const RootReducer = combineReducers({
    user:UserReducer,
    cart : CartReducer,
});

export default persistReducer(ConfigPersist,RootReducer);