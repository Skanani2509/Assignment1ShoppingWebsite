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

};


export default Account;
