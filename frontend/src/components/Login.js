import React, { useState } from "react";
import axios from "axios";

function Login() {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {

    if (!user.email || !user.password) {
      alert("Fill all fields");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/login",
        user
      );

      // 🔥 TOKEN STORE
      localStorage.setItem("token", res.data);

      alert("Login Successful");
      window.location.href = "/dashboard";

      console.log("Token:", res.data);

    } catch (err) {
      console.log(err);

      if (err.response) {
        alert(err.response.data);
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