import React from "react";

function Login() {
  // Login page accessible to all
  return (
    <>
      <div>Login</div>
      <div>
        <form action="" method="post">
          <input type="hidden" name="" />
          <p>username</p>
          <input type="text" name="username" id="" />
          <p>password</p>
          <input type="password" name="password" id="" />
          <input type="submit" value="login" />
        </form>
      </div>
    </>
  );
}

export default Login;
