export const AddItemToCart=(cartItems,cartItemToAdd)=>{
    console.log('findItemfindItemfindItem1111', cartItemToAdd);
    const findItem = cartItems.find(cardItem => cardItem._id === cartItemToAdd._id);
    console.log('findItemfindItemfindItem2222', findItem);
    if(findItem){
        return cartItems.filter(cartItem => cartItem._id !== cartItemToAdd._id)
        // return cartItems.map(cartItem =>
        //     cartItem.id === cartItemToAdd.id
        //         ? {...cartItem , quantity: cartItem.quantity + 1}
        //         : cartItem
        //     )
    }else{
        return [...cartItems, {...cartItemToAdd}];
    }
    
};

export const RemoveItemsFromCart = (cartItems,CartItemsToRemove)=>{
    // return cartItems.map(cartItem =>{
    //     var flag = false;
    //     for (let index2 = 0; index2 < CartItemsToRemove.length; index2++) {
    //         if(cartItem.id === CartItemsToRemove[index2].id){
    //             flag = true;
    //             break;
    //         }
    //     }

    //     if(flag) return cartItem;
    // })
    var myCartItems = cartItems.filter( ( el ) => !CartItemsToRemove.includes( el._id ) );
    return myCartItems;
    // return [];
}


// export const RemoveItemFromCart=(cartItems,CartItemToRemove)=>{
//     const existingCartItem=cartItems.find(
//         cartItem => cartItem.id === CartItemToRemove.id
//     );
    
//     if(existingCartItem.quantity === 1){
//         return cartItems.filter(cartItem => cartItem.id !== CartItemToRemove.id)
//     }
    
//     return cartItems.map(cartItem =>
//         cartItem.id === CartItemToRemove.id
//         ? {...cartItem , quantity: cartItem.quantity -1}
//         : cartItem)
// }