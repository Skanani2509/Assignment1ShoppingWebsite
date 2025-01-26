import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import Comments from "./pages/Comments";
import Login from "./pages/Login";
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


}

export default App;