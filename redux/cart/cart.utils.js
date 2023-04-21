export const AddItemToCart = (cartItems, cartItemToAdd) => {
    const findItem = cartItems.find(cardItem => cardItem._id === cartItemToAdd._id && cardItem.user === cartItemToAdd.user);
    if (findItem) {
        return cartItems.filter(cartItem => cartItem._id !== cartItemToAdd._id)
    } else {
        return [...cartItems, { ...cartItemToAdd }];
    }

};

export const RemoveItemsFromCart = (cartItems, CartItemsToRemove) => {
    var myCartItems = cartItems.filter((el) => el.user !== CartItemsToRemove.user && !CartItemsToRemove.images?.includes(el._id));
    return myCartItems;
}