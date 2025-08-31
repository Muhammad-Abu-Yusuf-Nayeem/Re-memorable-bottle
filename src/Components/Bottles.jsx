import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import { addToLS, getStoredCart } from "./LocalStorage";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]); // cart state

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  // load cart from local storage on component mount
  useEffect(() => {
    console.log(bottles.length);
    if (bottles.length === 0) {
      const storedCart = getStoredCart();
      console.log(storedCart);
    }
  }, [bottles]);
  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id);
  };
  return (
    <div>
      <h2>Bottles Available: {bottles.length}</h2>
      <h4>Cart: {cart.length}</h4>
      <div
        className="bottles-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
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
