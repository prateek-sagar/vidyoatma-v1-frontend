import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import "../css/DashboardHome.css";
import institutionStore from "../redux/institutionStore";

const standards_name = [
  "First",
  "Second",
  "Third",
  "Fourth",
  "Fifth",
  "Sixth",
  "Seventh",
  "Eighth",
  "Nineth",
  "Tenth",
  "Eleventh",
  "Twelfth",
];
function Standards() {
  const standards = [];
  for (
    let i = institutionStore.getState().lowerStandard;
    i <= institutionStore.getState().higherStandard;
    i++
  ) {
    standards.push({ id: i, standard: standards_name[i - 1] });
  }
  return (
    <ul className="standard-list">
      {standards.map((standard) => (
        <li key={standard.id} className="">
          {standard.standard}
          <IoIosArrowDown />
        </li>
      ))}
    </ul>
  );
}

export default Standards;
