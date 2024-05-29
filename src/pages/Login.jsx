import React, { useState } from "react";
import "../css/LoginPage.css";
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

  function authenticate() {
    console.log(data);
  }

  // Login page accessible to all
  return (
    <div className="flex-center login-card">
      <h1 className="text-4xl w-full px-8">Login</h1>
      <form className="login-form" action="" method="post">
        <input type="hidden" name="" />
        {/* <label>USERNAME</label> */}
        <input
          required
          className="input-text"
          type="text"
          name="username"
          onChange={(e) => handleUsername(e)}
          placeholder=" Enter username"
        />
        {/* <label>PASSWORD</label> */}
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
      </form>
    </div>
  );
}

export default Login;
