import React from "react";
import "../css/home.css";
import ShowLogo from "./ShowLogo";

function Header() {
  return (
    <div className="header bg-green-200 flex-layout">
      <ShowLogo />
      <div>
        {window.location.pathname === "/" ? "login  /  Signup" : "login"}
      </div>
    </div>
  );
}

export default Header;
