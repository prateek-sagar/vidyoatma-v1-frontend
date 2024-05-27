import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";
import { FaRegCopyright } from "react-icons/fa6";
function Home() {
  return (
    <div className="w-full bg-gray-200 h-screen">
      <div className="home-wrapper bg-red-200">
        <header className="header">
          <div className="vidya">VIDYOATMA</div>
          <div>
            <Link className="link" to="/login">
              login
            </Link>
          </div>
        </header>
        <main className="main-content flex-layout border border-red-600">
          <section className="main-header flex-layout border border-red-600 w-fit">
            <h1>
              Hey! Are you serious about your child growth.... Please SignUp
              here & If you know more please click on About button
            </h1>
          </section>

          <section className="links-btn flex-layout">
            <Link className="link signup-btn flex-layout" to="/signup">
              signup
            </Link>
            <div className="link about-btn">about ??</div>
          </section>
        </main>

        <footer className="mb-0 footer border border-red-600 h-[10%]">
          <FaRegCopyright /> vidyoatama
        </footer>
      </div>
    </div>
  );
}

export default Home;
