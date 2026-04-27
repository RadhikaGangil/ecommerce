// import React, { useState } from "react";
// import axios from "axios";

// function Register() {

//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     try {
//       const res = await axios.post(
//         "http://localhost:8080/api/auth/register",
//         user
//       );
//       alert(res.data);
//     } catch (err) {
//   if (err.response && err.response.data.message) {
//     alert("Error: " + err.response.data.message);
//   } else if (err.response && err.response.data) {
//     alert("Error: " + JSON.stringify(err.response.data));
//   } else {
//     alert("Server not responding");
//   }
// }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Register</h2>

//       <input
//         type="text"
//         name="name"
//         placeholder="Enter Name"
//         onChange={handleChange}
//       /><br /><br />

//       <input
//         type="email"
//         name="email"
//         placeholder="Enter Email"
//         onChange={handleChange}
//       /><br /><br />

//       <input
//         type="password"
//         name="password"
//         placeholder="Enter Password"
//         onChange={handleChange}
//       /><br /><br />

//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   );
// }

// export default Register;

import React, { useState } from "react";
import axios from "axios";

function Register() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {

    console.log("Sending Data:", user); // debug

    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/register",
        user
      );

      alert(res.data);

    } catch (err) {

      console.log("Error:", err); // debug

      if (err.response && err.response.data) {
        alert("Error: " + JSON.stringify(err.response.data));
      } else {
        alert("Server not responding");
      }
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Register</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        onChange={handleChange}
      /><br /><br />

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

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default Register;