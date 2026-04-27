import React, { useState } from "react";
import axios from "axios";

function Login() {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/login",
        user
      );

      // 🔥 store token / message
      localStorage.setItem("token", res.data);

      alert(res.data);

    } catch (err) {
      if (err.response && err.response.data) {
        alert("Error: " + JSON.stringify(err.response.data));
      } else {
        alert("Server error");
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