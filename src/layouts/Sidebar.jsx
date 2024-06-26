import React, { useState } from "react";
import "../css/Navigation.css";
import { useFeatureContext } from "../sharedcomponents/FeaturesContext";
import { Link, useNavigate } from "react-router-dom";
import store from "../redux/stores/userStore";
import { removeAllStandard, removeUser } from "../redux/actions";
import { standardStore } from "../redux/stores/StandardStore";
function Sidebar() {
  const [active, setActive] = useState(1);
  const { feature } = useFeatureContext();
  const navigate = useNavigate();

  const handlelogout = () => {
    store.dispatch(removeUser());
    console.log("logging out");
    standardStore.dispatch(removeAllStandard());
    navigate("/login");
  };
  const handleActiveId = (id) => {
    setActive(id);
  };
  const _features = [{ id: 1, name: "home" }];
  for (let index = 0; index < feature.length; index++) {
    const element = feature[index];
    _features.push({ id: index + 2, name: element });
  }
  const handleString = (str) => {
    const strArray = str.split("_");
    let newStr = "";
    strArray.forEach((e) => {
      e = e.charAt(0).toUpperCase() + e.slice(1);
      newStr = newStr.concat(e.concat(" "));
    });
    return newStr;
  };
  // it is protected and seen after login
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <p className="">G-One Test School</p>
        <p className="">test@school.com</p>
      </div>
      <nav className="features">
        <ul className="nav-list">
          {_features.map((feature) => (
            <Link
              to={`${feature.name === `home` ? `` : feature.name}`}
              key={feature.id}
              id={feature.id}
              className={`links ${active === feature.id ? "active" : ""}`}
              onClick={() => handleActiveId(feature.id)}
            >
              {handleString(feature.name)}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="sidebar-footer">
        <button
          className="flex justify-center items-center px-[0.5rem] py-[0.15rem]"
          onClick={() => handlelogout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
