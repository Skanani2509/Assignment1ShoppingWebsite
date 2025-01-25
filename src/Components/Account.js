import React, { useState } from "react";

const Account = ({ user, saveUser }) => {
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [shippingAddress, setShippingAddress] = useState(user?.shippingAddress || "");
  const [password, setPassword] = useState("");
};

export default Account;
