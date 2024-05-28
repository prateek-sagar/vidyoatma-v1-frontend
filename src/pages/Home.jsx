import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";
import { FaRegCopyright } from "react-icons/fa6";
function Home() {
  return (
    <main className="main-content">
      <section className="up home-para flex-layout">
        <h1 className="overlay flex-layout ">Welcome</h1>
        <h1 className="absolute flex-layout">Welcome</h1>
      </section>
      <section className="down links flex-layout ">
        <Link to={"/login"} className="link">
          Login
        </Link>
        <Link to={"/signup"} className="link">
          Signup
        </Link>
      </section>
    </main>
  );
}

export default Home;
