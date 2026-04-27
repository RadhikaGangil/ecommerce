import React, { useState } from "react";
import axios from "axios";

function Login() {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  // input change handle
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  // login submit
  const handleSubmit = async () => {

    // basic validation
    if (!user.email || !user.password) {
      alert("Please fill all fields");
      return;
    }

    console.log("Login Data:", user);

    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/login",
        user
      );

      console.log("Token:", res.data);

      // 🔥 TOKEN STORE
      localStorage.setItem("token", res.data);

      alert("Login Successful");

    } catch (err) {

      console.log("Error:", err);

      if (err.response && err.response.data) {
        alert("Error: " + err.response.data);
      } else {
        alert("Server not responding");
      }
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        onChange={handleChange}
      /><br /><br />

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        onChange={handleChange}
      /><br /><br />

      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;