import React from "react";
import "../css/home.css";
import ShowLogo from "./ShowLogo";
import { FaRegCopyright } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="mb-0 footer border bg-red-200 h-[10%]">
      <FaRegCopyright /> vidyoatama
    </footer>
  );
}

export default Footer;
