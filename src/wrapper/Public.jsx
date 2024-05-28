import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Public() {
  console.log(window.location.pathname);
  return (
    <div className="public-wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Public;
