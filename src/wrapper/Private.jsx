import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../layouts/Sidebar";
import "../css/PrivateWrapper.css";
import { useUserContext } from "../components/UserContext";
export default function Private() {
  const { user } = useUserContext();
  return user.islogIn === true ? (
    <div className="private-wrapper">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <Outlet />
    </div>
  ) : (
    <Navigate to={"/login"} />
  );
}
