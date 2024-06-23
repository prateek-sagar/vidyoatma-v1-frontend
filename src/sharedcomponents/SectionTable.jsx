import React from "react";
import { standardStore } from "../redux/stores/StandardStore";
import "../css/SectionTable.css";

const handleSection = (e) => {
  const activeSection = e.target.closest(".accordion-row");
  if (!activeSection) {
    return;
  }

  toggleSection(activeSection);
};

function toggleSection(activateSection) {
  const sections = activateSection.parentElement.querySelectorAll(".trigger");
  const contents =
    activateSection.parentElement.querySelectorAll(".section-content");
  sections.forEach((section) => {
    section.setAttribute("aria-expanded", false);
    // console.log(section);
  });
  contents.forEach((content) => {
    content.setAttribute("aria-hidden", true);
  });

  activateSection.querySelector(".trigger").setAttribute("aria-expanded", true);
  activateSection
    .querySelector(".section-content")
    .setAttribute("aria-hidden", false);
  console.log(activateSection.style.height);
  // activateSection.style.height =
  //   activateSection.querySelector(".trigger").offsetHeight +
  //   activateSection.querySelector(".section-content").offsetHeight;
}

export default function SectionTable({ sectionArr }) {
  return (
    <div className="sections-table">
      <div className="table-heading row">
        <p>ID</p>
        <p>Section</p>
        <p>Mentor</p>
      </div>
      <div className="table-accordion" onClick={(e) => handleSection(e)}>
        {sectionArr.map((section, index) => (
          <div key={index} lassName="accordion-row">
            <div className="trigger row" aria-expanded="false">
              <div>{index + 1}</div>
              <button>{section}</button>
              <div>-</div>
            </div>
            <div aria-hidden={"true"} className="section-content">
              content
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
