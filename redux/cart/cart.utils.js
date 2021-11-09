export const AddItemToCart=(cartItems,cartItemToAdd)=>{
    const findItem = cartItems.find(cardItem => cardItem._id === cartItemToAdd._id);
    if(findItem){
        return cartItems.filter(cartItem => cartItem._id !== cartItemToAdd._id)
    }else{
        return [...cartItems, {...cartItemToAdd}];
    }
    
};

export const RemoveItemsFromCart = (cartItems,CartItemsToRemove)=>{
    var myCartItems = cartItems.filter( ( el ) => !CartItemsToRemove.includes( el._id ) );
    return myCartItems;
}