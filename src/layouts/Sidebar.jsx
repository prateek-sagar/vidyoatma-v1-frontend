import React, { useState } from "react";
import "../css/Navigation.css";
import { useFeatureContext } from "../sharedcomponents/FeaturesContext";
import { useNavigate } from "react-router-dom";
import store from "../redux/store";
import { removeUser } from "../redux/actions";
function Sidebar() {
  const [active, setActive] = useState(1);
  const { feature } = useFeatureContext();
  const navigate = useNavigate();
  const handlelogout = () => {
    store.dispatch(removeUser());
    console.log("logging out");
    navigate("/login");
  };
  const handleActiveId = (id) => {
    setActive(id);
  };
  const _features = [{ id: 1, name: "Home" }];
  for (let index = 0; index < feature.length; index++) {
    const element = feature[index];
    _features.push({ id: index + 2, name: element });
  }
  // it is protected and seen after login
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <p className="">G-One Test School</p>
        <p className="">test@school.com</p>
      </div>
      <nav>
        <ul className="nav-list">
          {_features.map((feature) => (
            <li
              key={feature.id}
              id={feature.id}
              className={active === feature.id ? "active" : ""}
              onClick={() => handleActiveId(feature.id)}
            >
              {feature.name}
            </li>
          ))}
        </ul>
        <div className="sidebar-footer">
          <button onClick={() => handlelogout()}>Logout</button>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
