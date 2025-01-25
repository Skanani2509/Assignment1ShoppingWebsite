import React from "react";

const Cart = ({ cart, updateCart, finalizePurchase }) => {
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleQuantityChange = (id, qty) => {
        updateCart(id, qty);
      };
  
  };
  
  export default Cart;
  