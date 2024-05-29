import React from "react";

export default function UserAccount(props) {
  return (
    <div className="max-w-sm mx-auto grid gap-y-4 w-full">
      <label className="font-outfit text-3xl font-semibold">Enter Email</label>
      <input
        autoFocus
        required
        type="text"
        value={props.username}
        className="h-10 border-none bg-gray-300 font-outfit text-gray-600  text-xl rounded-full focus:ring-blue-500 w-full focus:border-blue-500 block py-1 px-4"
        onChange={(e) => props.updateUsername(e)}
      />
      <label className="font-outfit text-3xl font-semibold">
        Enter Password
      </label>
      <input
        required
        type="password"
        className="h-10 border-none bg-gray-300 font-outfit text-gray-600  text-xl rounded-full focus:ring-blue-500 w-full focus:border-blue-500 block py-1 px-4"
        value={props.password}
        onChange={(e) => props.updatePassword(e)}
      />
    </div>
  );
}
