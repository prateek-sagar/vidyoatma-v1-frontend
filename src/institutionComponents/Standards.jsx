import React, { useEffect, useState } from "react";
import "../css/DashboardHome.css";
import { controller, standardFetch } from "../controllers/AccordionController";
import { standardStore } from "../redux/stores/StandardStore";
import institutionStore from "../redux/stores/institutionStore";
import StandadrdAccordion from "../sharedcomponents/StandardAccordion";
const standards_name = [
  { id: 1, name: "First" },
  { id: 2, name: "Second" },
  { id: 3, name: "Third" },
  { id: 4, name: "Fourth" },
  { id: 5, name: "Fifth" },
  { id: 6, name: "Sixth" },
  { id: 7, name: "Seventh" },
  { id: 8, name: "Eighth" },
  { id: 9, name: "Nineth" },
  { id: 10, name: "Tenth" },
  { id: 11, name: "Eleventh" },
  { id: 12, name: "Twelfth" },
];

function Standards() {
  const [change, setChange] = useState(false);
  useEffect(() => {
    setChange(false);
  }, [change]);

  const handleChange = () => {
    setChange(true);
  };

  if (standardStore.getState().isLoading) {
    standardFetch(standards_name);
  }
  let titles = standardStore.getState();
  console.log(titles.data);
  return <StandadrdAccordion _titles={titles.data} change={handleChange} />;
}

export default Standards;
