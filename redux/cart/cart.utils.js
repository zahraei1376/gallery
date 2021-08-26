export const AddItemToCart=(cartItems,cartItemToAdd)=>{

    const findItem = cartItems.find(cardItem => cardItem.id === cartItemToAdd.id);
    if(findItem){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToAdd.id)
        // return cartItems.map(cartItem =>
        //     cartItem.id === cartItemToAdd.id
        //         ? {...cartItem , quantity: cartItem.quantity + 1}
        //         : cartItem
        //     )
    }else{
        return [...cartItems, {...cartItemToAdd}];
    }
    
};


export const RemoveItemFromCart=(cartItems,CartItemToRemove)=>{
    const existingCartItem=cartItems.find(
        cartItem => cartItem.id === CartItemToRemove.id
    );
    
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== CartItemToRemove.id)
    }
    
    return cartItems.map(cartItem =>
        cartItem.id === CartItemToRemove.id
        ? {...cartItem , quantity: cartItem.quantity -1}
        : cartItem)
}