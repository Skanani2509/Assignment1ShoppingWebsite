import React, { useState } from "react";

const Account = ({ user, saveUser }) => {
  const [name, setName] = useState(user?.name || "");
};

export default Account;
