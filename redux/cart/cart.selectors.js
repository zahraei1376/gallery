import { createSelector } from 'reselect';

const selectCart=(state)=>state.cart;

export const selectCartItem = createSelector(
    [selectCart],
    cart=>cart.CartItems
);

export const selectCartItemsCount=createSelector(
    [selectCartItem],
    (CartItems)=>CartItems.reduce(
        (accumalateQuantity,CartItem)=>accumalateQuantity + CartItem.quantity,
    0
    )
);

export const selectCartTotal=createSelector(
    [selectCartItem],
    (CartItems)=>CartItems.reduce(
        (accumalateQuantity,CartItem)=>accumalateQuantity + (CartItem.quantity * CartItem.price),
    0
    )
)