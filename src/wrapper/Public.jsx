import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../sharedcomponents/Header";
import Footer from "../sharedcomponents/Footer";

function Public() {
  return (
    <div className="public-wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Public;
