import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import Cart from "./pages/Cart";




function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
}

export default App;