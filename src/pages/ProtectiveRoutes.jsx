import { Navigate, Outlet } from "react-router-dom";

export default function ProtectiveRoutes() {
  let auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
}
