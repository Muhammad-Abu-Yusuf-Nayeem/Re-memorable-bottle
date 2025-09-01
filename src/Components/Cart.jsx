import "./cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h4>Cart: {cart.length}</h4>
      <div className="cart-container">
        {cart.map((bottle) => (
          <div className="cart-item" key={bottle.id}>
            <img src={bottle.img} alt="" />
            <button onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
 