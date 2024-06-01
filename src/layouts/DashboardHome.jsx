import React from "react";
import Standards from "../components/Standards";
import "../css/DashboardHome.css";
import { useUserContext } from "../components/UserContext";

function DashboardHome() {
  const { user } = useUserContext();

  return (
    <div className="home-container">
      <div className="institution-details">
        <p>GOne Test School</p>
        <p>{user.id}</p>
        <p>Sahibabad</p>
        <p></p>
      </div>
      <div className="btn-section">
        <button className="">Add Student</button>
        <button className="">Add Teacher</button>
      </div>
      <div className="">
        <Standards />
      </div>
    </div>
  );
}

export default DashboardHome;
