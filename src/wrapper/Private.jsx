import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../layouts/Sidebar";
import "../css/PrivateWrapper.css";
import store from "../redux/store";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
export default function Private() {
  const [expand, setExpand] = useState(false);
  return store.getState().isLogin === true ? (
    <>
      <button className="menu-toggler" onClick={() => setExpand(!expand)}>
        {!expand ? <FaBars size={18} /> : <IoClose size={18} />}
      </button>
      <div className="private-wrapper">
        <div className="sidebar-container" aria-expanded={`${expand}`}>
          <div className="box">
            <Sidebar />
          </div>
        </div>
        <div className="main-container">
          <Outlet />
        </div>
      </div>
    </>
  ) : (
    <Navigate to={"/login"} />
  );
}
