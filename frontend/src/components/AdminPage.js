// // import React from "react";

// // function AdminPage() {
// //   return (
// //     <div style={{ textAlign: "center", marginTop: "30px" }}>
// //       <h2>Admin Dashboard ⚙️</h2>

// //       <button onClick={() => window.location.href = "/products"}>
// //         View Products
// //       </button>

// //       <br /><br />

// //       <button
// //         onClick={() => {
// //           localStorage.removeItem("token");
// //           window.location.href = "/";
// //         }}
// //       >
// //         Logout
// //       </button>
// //     </div>
// //   );
// // }

// // export default AdminPage;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function AdminPage() {

//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   const fetchUser = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const res = await axios.get(
//         "http://localhost:8080/api/auth/me",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );

//       setUser(res.data);

//     } catch (err) {
//       console.log(err);
//     }
//   };

//   if (!user) return <p>Loading...</p>;

//   return (
//     <div style={{ textAlign: "center", marginTop: "30px" }}>
//       <h2>Welcome {user.name}</h2>
//       <h3>Role: {user.role}</h3>

//       {/* 🔥 Admin only UI */}
//       {user.role === "ADMIN" && (
//         <>
//           <button onClick={() => window.location.href = "/products"}>
//             View Products
//           </button>

//           <br /><br />

//           <button onClick={() => window.location.href = "/add-product"}>
//             Add Product
//           </button>
//         </>
//       )}

//       {/* ❌ Non-admin */}
//       {user.role !== "ADMIN" && (
//         <p>You are not authorized ❌</p>
//       )}

//       <br /><br />

//       <button
//         onClick={() => {
//           localStorage.removeItem("token");
//           window.location.href = "/";
//         }}
//       >
//         Logout
//       </button>
//     </div>
//   );
// }

// export default AdminPage;



import React, { useEffect, useState } from "react";
import axios from "axios";

// function AdminPage() {

//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   const fetchUser = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       console.log("Token:", token);

//       const res = await axios.get(
//         "http://localhost:8080/api/auth/me",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );

//       console.log("User:", res.data);

//       setUser(res.data);

//     } catch (err) {
//       console.log("Error:", err);
//       alert("Error loading user");
//     }
//   };

//   // 🔥 LOADING FIX
//   if (!user) return <p>Loading...</p>;

//   return (
//     <div style={{ textAlign: "center", marginTop: "30px" }}>
//       <h2>Welcome {user.name}</h2>
//       <h3>Role: {user.role}</h3>

//       {/* ADMIN UI */}
//       {user.role === "ADMIN" ? (
//         <>
//           <button onClick={() => window.location.href = "/products"}>
//             View Products
//           </button>

//           <br /><br />

//           <button onClick={() => window.location.href = "/add-product"}>
//             Add Product
//           </button>
//         </>
//       ) : (
//         <p>You are not authorized ❌</p>
//       )}

//       <br /><br />

//       <button
//         onClick={() => {
//           localStorage.removeItem("token");
//           window.location.href = "/";
//         }}
//       >
//         Logout
//       </button>
//     </div>
//   );
// }
function AdminPage() {

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Admin Dashboard</h2>

      <button onClick={() => window.location.href = "/products"}>
        View Products
      </button>

      <br /><br />

      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </div>
  );
}


export default AdminPage;