import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Account from "./Components/Account";
import Comments from "./Components/Comment";
import Login from "./Components/Login";
import { products, users } from "./data/products";



function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);

  // Load user from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleLogin = (email, password) => {
    const foundUser = users.find((u) => u.email === email && u.password === password);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem("user", JSON.stringify(foundUser));
      alert("Login successful!");
    } 
    else {
      alert("Invalid email or password!");
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    alert("You have logged out!");
  };

  const addToCart = (id, quantity) => {
    const product = products.find((p) => p.id === id);
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      else{
        return [...prevCart, { ...product, quantity }];
      }
    });
    alert('Product added to cart');
  };

  const updateCart = (id, quantity) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => (item.id === id ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const saveUser = (userData) => setUser(userData);

  const addComment = (comment) => setComments((prevComments) => [...prevComments, comment]);


  return (
    <Router>
      <Header user={user} logout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />

        <Route
          path="/cart"
          element={
            user ? (
              <Cart cart={cart} updateCart={updateCart} finalizePurchase={() => alert("Purchase finalized!")} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/account"
          element={
            user ? (
              <Account user={user} saveUser={saveUser} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/comments"
          element={
            user ? <Comments comments={comments} addComment={addComment} /> : <Navigate to="/login" replace />
          }
        />

        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );

}

export default App;