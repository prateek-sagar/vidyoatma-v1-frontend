import Sidebar from "../layouts/Sidebar";
import { Navigate, Outlet } from "react-router-dom";
export default function Dashboard() {
  let auth = { token: true };
  return auth.token ? (
    <div className="flex">
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to={"/login"} />
  );
}
