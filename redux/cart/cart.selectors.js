import { createSelector } from 'reselect';

const selectCart = (state)=> state.cart;

export const selectCartItem = createSelector(
    [selectCart],
    cart=>cart.CartItems
);

export const selectedCart = (state, id) => createSelector(
    [selectCartItem],
    (CartItems) => {
        // console.log('iddddddd', id);
        var flag = false;
        for (let index = 0; index < CartItems.length; index++) {
            if(CartItems[index].id ===  id) {
                flag = true;
                break;
            }
            
        }
        if(flag) return true;
        return false;
    }
);

export const selectCartItemsCount = createSelector(
    [selectCartItem],
    (CartItems) => {
        console.log('CartItems',CartItems,CartItems.length);
        return CartItems.length
    }
);

// export const selectCartItemsCount = createSelector(
//     [selectCartItem],
//     (CartItems) => CartItems.reduce(
//         (accumalateQuantity,CartItem)=>accumalateQuantity + CartItem.quantity,
//     0
//     )
// );

export const selectCartTotal = createSelector(
    [selectCartItem],
    (CartItems)=>CartItems.reduce(
        (accumalateQuantity,CartItem)=>accumalateQuantity + (CartItem.quantity * CartItem.price),
    0
    )
)