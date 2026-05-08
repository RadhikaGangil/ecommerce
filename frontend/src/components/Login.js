// import { useState } from "react";
// import axios from "axios";

// function Login() {

//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//     role: "USER"
//   });

//   // 🔥 HANDLE INPUT
//   const handleChange = (e) => {

//     setUser({
//       ...user,
//       [e.target.name]: e.target.value
//     });

//   };

//   // 🔥 LOGIN
//   const handleSubmit = async () => {

//     if (!user.email || !user.password) {

//       alert("Please fill all fields ❌");
//       return;

//     }

//     try {

//       const res = await axios.post(
//         "http://localhost:8080/api/auth/login",
//         user
//       );

//       // 🔥 SAVE
//       localStorage.setItem("token", "loggedin");
//       localStorage.setItem("role", user.role);

//       alert("Login Successful ✅");

//       // 🔥 REDIRECT
//       if (user.role === "ADMIN") {

//         window.location.href = "/admin";

//       } else {

//         window.location.href = "/home";
//       }

//     } catch (err) {

//       console.log(err);

//       alert("Invalid Email or Password ❌");

//     }

//   };

//   return (

//     <div className="auth-page">

//       <div className="auth-card">

//         <h2>Welcome Back ✨</h2>

//         {/* EMAIL */}
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter Email"
//           onChange={handleChange}
//         />

//         {/* PASSWORD */}
//         <input
//           type="password"
//           name="password"
//           placeholder="Enter Password"
//           onChange={handleChange}
//         />

//         {/* ROLE */}
//         <select
//           name="role"
//           className="role-select"
//           onChange={handleChange}
//         >
//           <option value="USER">User</option>
//           <option value="ADMIN">Admin</option>
//         </select>

//         {/* BUTTON */}
//         <button onClick={handleSubmit}>
//           Login
//         </button>

//         <p onClick={() => window.location.href = "/register"}>
//           Don’t have an account? Register
//         </p>

//       </div>

//     </div>

//   );
// }

// export default Login;


// import { useState } from "react";
// import axios from "axios";

// function Login() {

//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//     role: "USER"
//   });

//   // 🔥 HANDLE INPUT
//   const handleChange = (e) => {

//     setUser({
//       ...user,
//       [e.target.name]: e.target.value
//     });

//   };

//   // 🔥 LOGIN FUNCTION
//   const handleSubmit = async () => {

//     // ❌ VALIDATION
//     if (!user.email || !user.password) {

//       alert("Please fill all fields ❌");
//       return;

//     }

//     try {

//       // 🔥 API CALL
//       const res = await axios.post(
//         "http://localhost:8080/api/auth/login",
//         user
//       );

//       console.log(res.data);

//       // ✅ ROLE FROM BACKEND
//       const role = res.data;

//       // ✅ SAVE TOKEN + ROLE
//       localStorage.setItem("token", "success");
//       localStorage.setItem("role", role);

//       alert("Login Successful ✅");

//       // ✅ REDIRECT
//       if (role === "ADMIN") {

//         window.location.href = "/admin";

//       } else {

//         window.location.href = "/home";

//       }

//     } catch (err) {

//       console.log(err);

//       alert("Invalid Email or Password ❌");

//     }

//   };

//   return (

//     <div className="auth-page">

//       <div className="auth-card">

//         <h2>Welcome Back ✨</h2>

//         {/* EMAIL */}
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter Email"
//           value={user.email}
//           onChange={handleChange}
//         />

//         {/* PASSWORD */}
//         <input
//           type="password"
//           name="password"
//           placeholder="Enter Password"
//           value={user.password}
//           onChange={handleChange}
//         />

//         {/* ROLE */}
//         <select
//           name="role"
//           className="role-select"
//           value={user.role}
//           onChange={handleChange}
//         >
//           <option value="USER">User</option>
//           <option value="ADMIN">Admin</option>
//         </select>

//         {/* LOGIN BUTTON */}
//         <button onClick={handleSubmit}>
//           Login
//         </button>

//         {/* REGISTER LINK */}
//         <p onClick={() => window.location.href = "/register"}>
//           Don’t have an account? Register
//         </p>

//       </div>

//     </div>

//   );

// }

// export default Login;


import { useState } from "react";
import axios from "axios";

function Login() {

  const [user, setUser] = useState({
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

  // 🔥 LOGIN
  const handleSubmit = async () => {

    // ❌ VALIDATION
    if (!user.email || !user.password) {

      alert("Please fill all fields ❌");
      return;

    }

    try {

      // ✅ LOGIN API
      const res = await axios.post(
        "http://localhost:8080/api/auth/login",
        user
      );

      console.log(res.data);

      // ✅ USER DATA
      const loggedInUser = res.data;

      // ✅ SAVE TOKEN + ROLE
      localStorage.setItem("token", "success");
      localStorage.setItem("role", loggedInUser.role);

      alert("Login Successful ✅");

      // ✅ REDIRECT
      if (loggedInUser.role === "ADMIN") {

        window.location.href = "/admin";

      } else {

        window.location.href = "/home";

      }

    } catch (err) {

      console.log(err);

      alert("Invalid Email or Password ❌");

    }

  };

  return (

    <div className="auth-page">

      <div className="auth-card">

        <h2>Welcome Back ✨</h2>

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={handleChange}
        />

        {/* PASSWORD */}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={user.password}
          onChange={handleChange}
        />

        {/* ROLE */}
        <select
          name="role"
          className="role-select"
          value={user.role}
          onChange={handleChange}
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
        </select>

        {/* LOGIN BUTTON */}
        <button onClick={handleSubmit}>
          Login
        </button>

        {/* REGISTER LINK */}
        <p onClick={() => window.location.href = "/register"}>
          Don’t have an account? Register
        </p>

      </div>

    </div>

  );

}

export default Login;