import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}/>
        </div>
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );

};

export default Login;
