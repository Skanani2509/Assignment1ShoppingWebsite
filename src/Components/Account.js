import React, { useState } from "react";

const Account = ({ user, saveUser }) => {
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [shippingAddress, setShippingAddress] = useState(user?.shippingAddress || "");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    if (!email || !password) {
      alert("Email and password are required");
      return;
    }

    saveUser({ name, email, shippingAddress, password });
    alert(user ? "Account updated successfully!" : "Account created successfully!");
  };

  return (
    <div>
      <h1>{user ? "Edit Account" : "Create Account"}</h1>
      <div>
        <label>Name:</label>
        <input type="text" placeholder="Name"/>
      </div>
      <div>
        <label>Email:</label>
        <input type="email" placeholder="Email"/>
      </div>
      <div>
        <label>Shipping Address:</label>
        <input type="text" placeholder="Shipping Address"/>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" placeholder="Password"/>
      </div>
      <button
        onClick={handleSave}>
        {user ? "Save Changes" : "Create Account"}
      </button>
    </div>
  );

};


export default Account;
