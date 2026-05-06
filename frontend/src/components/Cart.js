import { useEffect, useState } from "react";
import axios from "axios";

function Cart() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = () => {
    axios.get("http://localhost:8080/api/cart/all")
      .then(res => setItems(res.data));
  };

  // 🔥 UPDATE
  const updateQuantity = async (id, qty) => {
    if (qty < 1) return;
    await axios.put(`http://localhost:8080/api/cart/update/${id}?quantity=${qty}`);
    fetchCart();
  };

  // 🔥 DELETE
  const removeItem = async (id) => {
    await axios.delete(`http://localhost:8080/api/cart/delete/${id}`);
    fetchCart();
  };

  // 🔥 TOTAL
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Your Cart</h2>

      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {items.map(i => (
            <div key={i.id} style={{
              background: "white",
              padding: "15px",
              margin: "10px",
              borderRadius: "10px",
              boxShadow: "0px 0px 5px #ccc"
            }}>
              <h3>{i.name}</h3>
              <p>₹ {i.price}</p>

              <button onClick={() => updateQuantity(i.id, i.quantity + 1)}>+</button>
              <span style={{ margin: "10px" }}>{i.quantity}</span>
              <button onClick={() => updateQuantity(i.id, i.quantity - 1)}>-</button>

              <br /><br />

              <button onClick={() => removeItem(i.id)}>
                Remove ❌
              </button>
            </div>
          ))}

          <h3>Total: ₹ {total}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;