import CartActionType from './cart.types';
import { AddItemToCart, RemoveItemsFromCart } from './cart.utils';

const INITIAL_STATE={
    CartItems:[]
};

const CartReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case CartActionType.ADD_ITEM:
            return{
                ...state,
                CartItems: AddItemToCart(state.CartItems , action.payload)
                // CartItems: [...state.CartItems , action.payload]
            }
        case CartActionType.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                CartItems:state.CartItems.filter(
                    item=>item._id !== action.payload._id && item.user === action.payload.user
                    )
            }
        case CartActionType.REMOVE_ITEM:
            return{
                ...state,
                CartItems: [],
                // CartItems:RemoveItemFromCart(state.CartItems, action.payload)
            }
        case CartActionType.REMOVE_ITEMS:
                return{
                    ...state,
                    CartItems:RemoveItemsFromCart(state.CartItems, action.payload)
                }
            
        default:
            return state
            
    }
};

export default CartReducer;