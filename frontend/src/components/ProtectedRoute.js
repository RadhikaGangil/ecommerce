import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const token = localStorage.getItem("token");

  // ❌ अगर token नहीं है → login पर भेजो
  if (!token) {
    return <Navigate to="/" />;
  }

  // ✔ अगर login है → page दिखाओ
  return children;
}

export default ProtectedRoute;