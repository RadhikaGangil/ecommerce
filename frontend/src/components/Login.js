
// import React, { useState } from "react";
// import axios from "axios";

// function Login() {

//   const [user, setUser] = useState({
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setUser({
//       ...user,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async () => {

//     // 🔥 validation
//     if (!user.email || !user.password) {
//       alert("Please fill all fields");
//       return;
//     }

//     try {
//       const res = await axios.post(
//         "http://localhost:8080/api/auth/login",
//         user
//       );

//       // 🔥 token store
//       localStorage.setItem("token", res.data);

//       alert("Login Successful ✅");

//       // 🔥 redirect to admin
//       window.location.href = "/admin";

//     } catch (err) {

//       console.log("Error:", err);

//       // 🔥 proper error handling (NO blank alert)
//       if (err.response && err.response.data) {
//         alert(JSON.stringify(err.response.data));
//       } else {
//         alert("Invalid email or password ❌");
//       }
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Login Page 🔐</h2>

//       <input
//         type="email"
//         name="email"
//         placeholder="Enter Email"
//         value={user.email}
//         onChange={handleChange}
//       />
//       <br /><br />

//       <input
//         type="password"
//         name="password"
//         placeholder="Enter Password"
//         value={user.password}
//         onChange={handleChange}
//       />
//       <br /><br />

//       <button onClick={handleSubmit}>Login</button>
//     </div>
//   );
// }

// export default Login;

import { useState } from "react";
import axios from "axios";

function Login() {

  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/login",
        user
      );

      localStorage.setItem("token", res.data);
      alert("Login Success");

      window.location.href = "/admin";

    } catch (err) {
      alert("Login Failed");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />

      <button onClick={handleSubmit}>Login</button>

      <p onClick={() => window.location.href = "/register"}>
        New User? Register
      </p>
    </div>
  );
}

export default Login;