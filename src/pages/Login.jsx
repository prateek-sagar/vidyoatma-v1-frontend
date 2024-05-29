import React, { useState } from "react";
import "../css/LoginPage.css";
import { Link } from "react-router-dom";
const LOGIN_DATA = {
  username: "",
  password: "",
};

function Login() {
  const [data, setData] = useState(LOGIN_DATA);

  function handleUsername(e) {
    setData({ ...data, username: e.target.value });
  }

  function handlePassword(e) {
    setData({ ...data, password: e.target.value });
  }

  async function authenticate() {
    try {
      const response = await fetch(
        "http://127.0.0.1:8080/api/v1/auth/authenticate",
        {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
          credentials: "include",
        }
      );
    } catch (error) {
      console.error("Error:", error);
    }

    // fetch API

    console.log(data);
  }

  // Login page accessible to all
  return (
    <div className="login-page">
      <h1 className="flex-center text-[4rem] md:text-[6rem] md:font-bold text-teal-300 w-full">
        Login
      </h1>
      <div className="flex-center login-card">
        <form className="login-form" action="" method="post">
          <input type="hidden" name="" />
          <label className="font-outfit text-2xl md:text-3xl font-semibold">
            Enter Username
          </label>
          <input
            required
            className="input-text"
            type="text"
            name="username"
            onChange={(e) => handleUsername(e)}
            placeholder=" Enter username"
          />
          <label className="font-outfit text-2xl md:text-3xl font-semibold">
            Enter Password
          </label>
          <input
            onChange={(e) => {
              handlePassword(e);
            }}
            className="input-text"
            type="password"
            name="password"
            placeholder="Enter password"
          />
          <input
            type="button"
            onClick={authenticate}
            className="login-btn"
            value="login"
          />
          <p className="w-full flex-center">
            Not an existing user?{" "}
            <Link to={"/signup"} className="underline">
              signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
