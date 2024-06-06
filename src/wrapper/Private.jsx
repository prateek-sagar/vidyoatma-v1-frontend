import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../layouts/Sidebar";
import "../css/PrivateWrapper.css";
import store from "../redux/store";
export default function Private() {
  return store.getState().isLogin === true ? (
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
