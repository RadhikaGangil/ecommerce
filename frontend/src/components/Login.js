import { useState } from "react";
import axios from "axios";

function Login() {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  // 🔥 HANDLE INPUT
  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });

  };

  // 🔥 LOGIN FUNCTION
  const handleSubmit = async () => {

    // 🔥 VALIDATION
    if (!user.email || !user.password) {

      alert("Please fill all fields ❌");
      return;

    }

    try {

      // 🔥 LOGIN API
      const res = await axios.post(
        "http://localhost:8080/api/auth/login",
        user
      );

      console.log(res.data);

      // ❌ INVALID PASSWORD
      if (res.data === "Invalid password") {

        alert("Invalid Password ❌");
        return;

      }

      // 🔥 TOKEN SAVE
      localStorage.setItem("token", res.data);

      // 🔥 ADMIN LOGIN
      if (user.email === "admin@gmail.com") {

        localStorage.setItem("role", "ADMIN");

        alert("Admin Login Successful ✅");

        window.location.href = "/admin";

      }

      // 🔥 USER LOGIN
      else {

        localStorage.setItem("role", "USER");

        alert("User Login Successful ✅");

        window.location.href = "/home";

      }

    } catch (err) {

      console.log(err);

      alert("Login Failed ❌");

    }

  };

  return (

    <div className="auth-page">

      <div className="auth-card">

        <h2>Welcome Back ✨</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={user.password}
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>
          Login
        </button>

        <p onClick={() => window.location.href = "/register"}>
          Don’t have an account? Register
        </p>

      </div>

    </div>

  );

}

export default Login;