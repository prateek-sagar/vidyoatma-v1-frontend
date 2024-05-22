import React from "react";
import { GoGear } from "react-icons/go";

function Sidebar() {
  // const user = useContext(UserContext);
  const institution_features = [
    {
      id: 1,
      name: "TSUNAMI",
    },
    {
      id: 2,
      name: "Student Portfolio",
    },
    {
      id: 3,
      name: "Track Course",
    },
    {
      id: 4,
      name: "Notification",
    },
    {
      id: 5,
      name: "Attendance",
    },
    {
      id: 6,
      name: "Finance",
    },
    {
      id: 7,
      name: "Allocation",
    },
  ];
  // it is protected and seen after login
  return (
    <div className="h-screen md:max-w-[250px] bg-gray-400 sidebar font-outfit">
      <div className="user-info flex flex-col justify-center items-start p-2">
        <p className="ml-2 text-2xl">G-One Test School</p>
        <p className="ml-2 text-sm">test@school.com</p>
      </div>
      <div className="features p-2">
        <ul className=" h-full flex flex-col justify-evenly px-2">
          {institution_features.map((feature) => (
            <li
              className="bg-gray-200 font-outfit rounded-full h-[10%] flex justify-center items-center"
              key={feature.id}
            >
              {feature.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="account flex justify-start items-center py-2 px-3">
        <div className="flex bg-gray-200 w-full rounded-full justify-start items-center py-2 px-3">
          <GoGear size={22} />
          <p className="ml-1 flex justify-center items-center">Settings</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
