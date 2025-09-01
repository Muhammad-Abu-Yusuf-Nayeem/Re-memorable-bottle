const getStoredCart = () => {
  const getStoredCartString = localStorage.getItem("cart");
  if (getStoredCartString) {
    return JSON.parse(getStoredCartString);
  }
  return [];
};

const saveCartToLS = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};
const addToLS = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  //save to local storage
  saveCartToLS(cart);
};
const removeFromLS = (id) => {
  const storedCart = getStoredCart();
  const remaining = storedCart.filter((bId) => bId !== id);
  saveCartToLS(remaining);
};
export { getStoredCart, addToLS, saveCartToLS, removeFromLS };
