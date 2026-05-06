import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {

  // 🔥 role get
  const role = localStorage.getItem("role");

  // ❌ admin नहीं है
  if (role !== "ADMIN") {
    return <Navigate to="/home" />;
  }

  // ✔ admin है
  return children;
}

export default AdminRoute;