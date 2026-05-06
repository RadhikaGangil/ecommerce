import { useState } from "react";
import axios from "axios";

function Register() {

  const [user, setUser] = useState({
    name: "",
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

    if (!user.name || !user.email || !user.password) {
      alert("Fill all fields ❌");
      return;
    }

    try {
      await axios.post(
        "http://localhost:8080/api/auth/register",
        user
      );

      alert("Registered Successfully 🎉");

      window.location.href = "/login";

    } catch {
      alert("Error ❌");
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <h2>Create Account ✨</h2>

        <input
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />

        <input
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>Register</button>

        <p
          className="auth-link"
          onClick={() => window.location.href="/login"}
        >
          Already have account? Login
        </p>

      </div>

    </div>
  );
}

export default Register;