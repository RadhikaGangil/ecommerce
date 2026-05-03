// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function ProductList() {

//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         fetchProducts();
//     }, []);

//     const fetchProducts = async () => {
//         try {
//             const token = localStorage.getItem("token");

//             const res = await axios.get(
//                 "http://localhost:8080/api/product/all",
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 }
//             );

//             setProducts(res.data);

//         } catch (err) {
//             console.log(err);
//             alert("Error fetching products");
//         }
//     };

//     return (
//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//             <h2>Product List 🛒</h2>

//             {products.length === 0 ? (
//                 <p>No products available</p>
//             ) : (
//                 products.map((p) => (
//                     <div key={p.id} style={{
//                         border: "1px solid black",
//                         margin: "10px",
//                         padding: "10px"
//                     }}>
//                         <h3>{p.name}</h3>
//                         <p>Price: ₹{p.price}</p>
//                         <p>{p.description}</p>
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// }

// export default ProductList;



import { useEffect, useState } from "react";
import axios from "axios";

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/product/all")
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>

      {products.map(p => (
        <div className="card" key={p.id}>
          <h3>{p.name}</h3>
          <p>₹ {p.price}</p>

          <button onClick={() => window.location.href = `/product/${p.id}`}>
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;