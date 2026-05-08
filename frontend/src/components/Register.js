import { useState } from "react";
import axios from "axios";

function Register() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER"
  });

  // 🔥 HANDLE INPUT
  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });

  };

  // 🔥 REGISTER
  const handleSubmit = async () => {

    if (!user.name || !user.email || !user.password) {

      alert("Please fill all fields ❌");
      return;

    }

    try {

      await axios.post(
        "http://localhost:8080/api/auth/register",
        user
      );

      alert("Registered Successfully ✅");

      window.location.href = "/login";

    } catch (err) {

      console.log(err);

      alert("Registration Failed ❌");

    }

  };

  return (

    <div className="auth-page">

      <div className="auth-card">

        <h2>Create Account ✨</h2>

        {/* NAME */}
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />

        {/* PASSWORD */}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />

        {/* ROLE */}
        <select
          name="role"
          onChange={handleChange}
          className="role-select"
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
        </select>

        {/* BUTTON */}
        <button onClick={handleSubmit}>
          Register
        </button>

        <p onClick={() => window.location.href = "/login"}>
          Already have an account? Login
        </p>

      </div>

    </div>

  );
}

export default Register;