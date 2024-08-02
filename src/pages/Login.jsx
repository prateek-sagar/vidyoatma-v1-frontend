import React, { useState } from "react";
import "../css/LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import store from "../redux/stores/userStore";
import { setUser } from "../redux/actions";
import { ClipLoader } from "react-spinners";
const LOGIN_DATA = {
  username: "",
  password: "",
};

function Login() {
  const [data, setData] = useState(LOGIN_DATA);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleUsername(e) {
    setData({ ...data, username: e.target.value });
  }

  function handlePassword(e) {
    setData({ ...data, password: e.target.value });
  }

  async function authenticate(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:8080/api/v1/auth/authenticate",
        {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
          credentials: "include",
        }
      );
      var result;
      if (response.status == 401) {
        alert("Invalid Credentials");
      }
      if (response.ok) {
        result = await response.json();
        console.log(result);
        store.dispatch(setUser(result.id, result.role, result.features));
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
      alert("Server is not connected!!!");
    }

    // fetch API

    // console.log(data);
  }

  // Login page accessible to all
  return (
    <div className="login-page">
      <h1 className="flex-center text-[4rem] md:text-[6rem] md:font-bold text-teal-300 w-full">
        Login
      </h1>
      <div className="flex-center login-card">
        <form
          className="login-form"
          action=""
          onSubmit={authenticate}
          method="post"
        >
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
            placeholder="Enter username"
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
            required
            placeholder="Enter password"
          />
          <button type="submit" className="login-btn">
            {loading ? (
              <ClipLoader color={`white`} loading={loading} size={15} />
            ) : (
              ""
            )}
            <input type="submit" value={"Login"} />
          </button>
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
