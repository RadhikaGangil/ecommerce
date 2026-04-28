import React from "react";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard Page 🔐</h2>

      <button onClick={() => {
        localStorage.removeItem("token");
        window.location.href = "/";
      }}>
        Logout
      </button>

    </div>
  );
}

export default Dashboard;