import React, { useState } from "react";

const Login = ({ onLogin }) =>
const [email, setEmail] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

