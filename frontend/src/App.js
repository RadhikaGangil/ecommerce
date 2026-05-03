 import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Login from "./components/Login";
// import AdminPage from "./components/AdminPage";
// import ProductList from "./components/ProductList";
// import ProtectedRoute from "./components/ProtectedRoute";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* Login */}
//         <Route path="/" element={<Login />} />

//         {/* Admin Dashboard */}
//         <Route
//           path="/admin"
//           element={
//             <ProtectedRoute>
//               <AdminPage />
//             </ProtectedRoute>
//           }
//         />

//         {/* Product List */}
//         <Route
//           path="/products"
//           element={
//             <ProtectedRoute>
//               <ProductList />
//             </ProtectedRoute>
//           }
//         />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import AdminPage from "./components/AdminPage";
import Products from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import "./styles.css";  

function App() {
  return (
    <BrowserRouter>
      <div className="navbar">E-Commerce App</div>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;