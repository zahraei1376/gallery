import CartActionType from './cart.types';

export const addItem = item => ({
    type: CartActionType.ADD_ITEM,
    payload: item
});

export const ClearItemFromCart = item =>({
    type:CartActionType.CLEAR_ITEM_FROM_CART,
    payload:item
});

export const RemoveItem = () =>({
    type:CartActionType.REMOVE_ITEM,
    // payload:item
});

export const RemoveItems = (IDS) =>({
    type:CartActionType.REMOVE_ITEMS,
    payload:IDS
});