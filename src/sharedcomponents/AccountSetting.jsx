import React, { useEffect } from "react";
import store from "../redux/stores/userStore";

function getAccountDetails(id) {
  console.log(id);
}

export default function AccountSetting() {
  // user fields like
  // user id and password
  // address
  // we create a new login and link it to the current id
  // we change the password
  // we can change the address
  // basic details

  useEffect(() => {
    var id = store.getState().id;
    getAccountDetails(id);
  }, []);

  return (
    <div className="account-page">
      <h1>Account Settings</h1>
      {/*user id*/}
    </div>
  );
}
