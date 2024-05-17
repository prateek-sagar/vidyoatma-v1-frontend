import React from "react";
import Address from "../layouts/Address";
export default function Register() {
  // register
  return (
    <>
      <div>Register an institution</div>
      <form action="" method="post">
        <p>username</p>
        <input type="text" name="username" id="" />
        <p>password</p>
        <input type="password" name="password" id="" />
        <p>Institution Name</p>
        <input type="text" name="institution_name" id="" />
        <p>abreviate</p>
        <input type="text" name="abreviate" id="" />
        <Address />
        <p>Establishment Date</p>
        <input type="date" name="establishmentDate" id="" />
        <p>Lower Standard</p>
        <input type="number" name="lower_standard" id="" />
        <p>Higher Standard</p>
        <input type="number" name="higher_standard" id="" />

        <input type="submit" value="register" />
      </form>
    </>
  );
}
