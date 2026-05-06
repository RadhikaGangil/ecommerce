import React from "react";

function AdminPage() {

  return (
    <div className="admin-page">

      {/* 🔥 SIDEBAR */}
      <div className="sidebar">

        <h2>Fashionera ✨</h2>

        <ul>
          <li>📦 Products</li>
          <li>🛒 Orders</li>
          <li>👥 Users</li>
          <li>📊 Analytics</li>
          <li>⚙ Settings</li>
        </ul>

        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            window.location.href = "/";
          }}
        >
          Logout
        </button>

      </div>

      {/* 🔥 MAIN CONTENT */}
      <div className="admin-content">

        <h1>Admin Dashboard</h1>

        {/* 🔥 CARDS */}
        <div className="dashboard-cards">

          <div className="dash-card">
            <h3>Total Products</h3>
            <p>120</p>
          </div>

          <div className="dash-card">
            <h3>Total Orders</h3>
            <p>85</p>
          </div>

          <div className="dash-card">
            <h3>Total Users</h3>
            <p>45</p>
          </div>

          <div className="dash-card">
            <h3>Revenue</h3>
            <p>₹ 50,000</p>
          </div>

        </div>

        {/* 🔥 TABLE */}
        <div className="product-table">

          <h2>Recent Products</h2>

          <table>

            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Shoes</td>
                <td>₹ 2000</td>
                <td>Available</td>
              </tr>

              <tr>
                <td>2</td>
                <td>T-Shirt</td>
                <td>₹ 1200</td>
                <td>Available</td>
              </tr>

              <tr>
                <td>3</td>
                <td>Watch</td>
                <td>₹ 3500</td>
                <td>Available</td>
              </tr>
            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default AdminPage;