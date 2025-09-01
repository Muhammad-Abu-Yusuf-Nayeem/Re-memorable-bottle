import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import { addToLS, getStoredCart } from "./LocalStorage";
import Cart from "./Cart";
import { removeFromLS } from "./LocalStorage";
const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]); // cart state
  const savedCart = []; // temporary array to hold saved cart items

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  // load cart from local storage on component mount
  useEffect(() => {
    console.log(bottles.length);
    if (bottles.length > 0) {
      const storedCart = getStoredCart();
      console.log("Stored cart:", storedCart);
      console.log("Fetched bottles:", bottles);

      for (const id of storedCart) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          savedCart.push(bottle); // add bottle to cart state
        }
      }
      console.log("savedCart", savedCart);
      setCart(savedCart); // update cart state
    }
  }, [bottles]); // <-- depends on bottles

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id);
  };

  const handleRemoveFromCart = (id) => {
    //visulaly remove from cart
    const remaining = cart.filter((bottle) => bottle.id !== id);
    setCart(remaining);
    //remove from local storage
    removeFromLS(id);
  };

  return (
    <div>
      <h2>Bottles Available: {bottles.length}</h2>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      <div
        className="bottles-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "1px",
        }}
      >
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
