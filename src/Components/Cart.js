import React from "react";

const Cart = ({ cart, updateCart, finalizePurchase }) => {
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleQuantityChange = (id, qty) => {
        updateCart(id, qty);
      };

      return (
        <div>
          <h1>Shopping Cart</h1>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  />
                  <button onClick={() => updateCart(item.id, 0)}>Remove</button>
                </div>
              ))}
              
            </div>
          )}
        </div>
      );  
        
  };
  
  export default Cart;
  