import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetails() {

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/product/${id}`)
      .then(res => setProduct(res.data));
  }, []);

  const addToCart = async () => {
    try {
      await axios.post("http://localhost:8080/api/cart/add", {
        productId: product.id,
        quantity: 1
      });

      alert("Added to Cart ✅");
window.location.href = "/cart";   // 🔥 redirect

    } catch (err) {
      console.log(err);
      alert("Error ❌");
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{product.name}</h2>
      <p>₹ {product.price}</p>

      <button onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;