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
    <div style={{ maxWidth: "500px", margin: "20px auto", padding: "20px", border: "1px solid #ddd" }}>
      <h1>{user ? "Edit Account" : "Create Account"}</h1>
      <div style={{ marginBottom: "15px" }}>
        <label>Name:</label>
        <input 
            type="text" 
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
            display: "block",
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label>Email:</label>
        <input 
            type="email" 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
                display: "block",
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                borderRadius: "5px",
                border: "1px solid #ddd",
            }}/>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label>Shipping Address:</label>
        <input 
            type="text" 
            placeholder="Shipping Address"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            style={{
                display: "block",
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                borderRadius: "5px",
                border: "1px solid #ddd",
            }}/>
      </div>
      <div  style={{ marginBottom: "15px" }}>
        <label>Password:</label>
        <input 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
                display: "block",
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                borderRadius: "5px",
                border: "1px solid #ddd",
            }}/>
      </div>
      <button
        onClick={handleSave}
        style={{
            padding: "10px 20px",
            backgroundColor: "#333",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
        {user ? "Save Changes" : "Create Account"}
        
      </button>
    </div>
  );

};


export default Account;
