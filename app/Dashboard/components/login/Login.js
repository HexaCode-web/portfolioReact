import React, { useState } from "react";
import "./login.css";
import Input from "../input/Input";
const Login = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="login">
      <h2>Welcome</h2>
      <Input
        label="Username"
        name="username"
        value={loginData.username}
        onChangeFunction={handleFormChange}
      />
      <Input
        label="Password"
        name="password"
        value={loginData.password}
        onChangeFunction={handleFormChange}
      />
      <button className="loginBtn">Login</button>
    </div>
  );
};

export default Login;
