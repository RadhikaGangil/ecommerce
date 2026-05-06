import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {

  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/api/product/all")
      .then(res => {
        setProducts(res.data);
        setFiltered(res.data);
      });
  }, []);

  const handleSearch = (val) => {
    setSearch(val);
    const r = products.filter(p =>
      p.name.toLowerCase().includes(val.toLowerCase())
    );
    setFiltered(r);
  };

  const filterCategory = (c) => {
    if (c === "ALL") return setFiltered(products);
    setFiltered(products.filter(p =>
      p.category?.toLowerCase() === c.toLowerCase()
    ));
  };

  return (
    <div>

      {/* NAVBAR */}
      <div className="navbar">
        <div className="logo">
          <div className="logo-badge">F</div>
          Fashionera
        </div>

        <div className="search">
          <input
            placeholder="Search products..."
            value={search}
            onChange={(e)=>handleSearch(e.target.value)}
          />
        </div>

        <div className="nav-actions">
          <span onClick={()=>navigate("/login")}>Login</span>
          <span onClick={()=>navigate("/cart")}>Cart 🛒</span>
        </div>
      </div>

      {/* HERO */}
      <div className="hero">
        <div>
          <h1>Style That Speaks</h1>
          <p>Discover trends. Express yourself.</p>
        </div>
      </div>

      {/* CATEGORY */}
      <div className="categories">
        <div className="cat" onClick={()=>filterCategory("ALL")}>All</div>
        <div className="cat" onClick={()=>filterCategory("men")}>Men</div>
        <div className="cat" onClick={()=>filterCategory("women")}>Women</div>
        <div className="cat" onClick={()=>filterCategory("shoes")}>Shoes</div>
      </div>

      {/* PRODUCTS */}
      <div className="products">
        {filtered.map(p => (
          <div className="card" key={p.id}>
            <img src={`https://picsum.photos/300?random=${p.id}`} />
            <div className="info">
              <h4>{p.name}</h4>
              <p>₹ {p.price}</p>
              <button onClick={()=>navigate(`/product/${p.id}`)}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="footer">
        © 2026 Fashionera — Built by You 🔥
      </div>

    </div>
  );
}

export default Home;