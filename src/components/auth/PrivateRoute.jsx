import { LoadingOverlay } from "@mantine/core";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase";

export default function PrivateRoute({ children }) {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    <LoadingOverlay />;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location.pathname }} replace />;
}
