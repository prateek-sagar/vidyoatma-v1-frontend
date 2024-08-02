import React, { useState } from "react";
import "../css/Navigation.css";
import { Link, useNavigate } from "react-router-dom";
import store from "../redux/stores/userStore";
import { removeAllStandard, removeUser } from "../redux/actions";
import { standardStore } from "../redux/stores/StandardStore";
function Sidebar() {
  const [active, setActive] = useState(1);
  const features = store.getState().features;
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

  const handleSetting = () => {
    navigate("account");
  };
  const _features = [{ id: 1, name: "home" }];
  if (features) {
    for (let index = 0; index < features.length; index++) {
      const element = features[index];
      _features.push({ id: index + 2, name: element });
    }
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
        <button onClick={() => handleSetting()}>Account Settings</button>
        <button onClick={() => handlelogout()}>Logout</button>
      </div>
    </div>
  );
}

export default Sidebar;
