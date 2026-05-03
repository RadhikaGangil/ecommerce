import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductDetails() {

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/product/${id}`)
      .then(res => setProduct(res.data));
  }, []);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>{product.name}</h2>
      <p>Price: ₹ {product.price}</p>
      <p>Category: {product.category}</p>

      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;