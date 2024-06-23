import React, { useState } from "react";
import "../css/Accordion.css";
import { VscPersonAdd } from "react-icons/vsc";
import { IoIosAdd } from "react-icons/io";
import { standardStore } from "../redux/stores/StandardStore";
import { addSections } from "../redux/actions";
import {
  addStandardSections,
  scrollPosition,
} from "../controllers/AccordionController";
import SectionTable from "./SectionTable";
import { useEffect } from "react";
const handleAccordion = (e, setCurrent) => {
  const activePanel = e.target.closest(".accordion-panel");
  if (!activePanel) return;
  setCurrent(activePanel);

  toggleAccordion(activePanel);
  // scroll effect
};

const toggleAccordion = (panelToActivate) => {
  const buttons = panelToActivate.parentElement.querySelectorAll("button");
  const contents =
    panelToActivate.parentElement.querySelectorAll(".accordion-content");
  buttons.forEach((button) => {
    button.setAttribute("aria-expanded", false);
  });

  contents.forEach((content) => {
    content.setAttribute("aria-hidden", true);
  });
  panelToActivate.querySelector("button").setAttribute("aria-expanded", true);
  panelToActivate
    .querySelector(".accordion-content")
    .setAttribute("aria-hidden", false);
  scrollPosition(panelToActivate);
};

const addSection = (e) => {
  let defaultSection = "";
  const accordionHeadingSelect = e.target.closest(".accordion-heading");
  const toAdd = accordionHeadingSelect
    .querySelector("span")
    .getAttribute("aria-description");
  const index = standardStore
    .getState()
    .data.findIndex((item) => item.standardTitle === toAdd);
  const getSections = standardStore.getState().data[index].sections;
  console.log(getSections);
  if (getSections.length > 0) {
    defaultSection = String.fromCharCode(
      getSections[getSections.length - 1].charCodeAt(0) + 1
    );
  } else {
    defaultSection = "a";
  }
  // console.log(defaultSection);
  standardStore.dispatch(addSections(index, defaultSection));
  addStandardSections(index);
};

export default function StandadrdAccordion({ _titles, change }) {
  const [current, setCurrent] = useState(null);
  const [previous, setPrevious] = useState(null);
  // console.log(current);
  // console.log(previous);
  useEffect(() => {
    if (previous !== null) {
      if (current !== previous) {
        const sections = previous.querySelectorAll(".trigger");
        if (sections.length > 1) {
          sections.forEach((section) => {
            section.setAttribute("aria-expanded", false);
          });
        }
      }
    }
    setPrevious(current);
  }, [current]);
  return (
    <main>
      <div className="wrapper">
        <div
          className="accordion"
          onClick={(e) => handleAccordion(e, setCurrent)}
        >
          {_titles.map((title) => (
            <div key={title.id} className="accordion-panel">
              <h2 id={`panel${title.id}-heading`} className="accordion-heading">
                <button
                  className="accordion-trigger"
                  aria-expanded="false"
                  aria-controls={`panel${title.id}-content`}
                >
                  <span
                    className={`panel${title.id}-title`}
                    aria-description={`${title.standardTitle}`}
                  >
                    {title.standardTitle}
                  </span>
                </button>
                <div className="ml-auto flex gap-2">
                  <button
                    onClick={(e) => {
                      addSection(e);
                      change();
                    }}
                    type="button"
                    className="add-btn"
                    value="section"
                  >
                    <IoIosAdd size={20} />
                    <p>Section</p>
                  </button>
                  <button className="add-btn">
                    <VscPersonAdd size={20} /> <p>Student</p>
                  </button>
                </div>
              </h2>

              <div
                className="accordion-content"
                aria-hidden="true"
                aria-labelledby={`panel${title.id}-heading`}
                id={`panel${title.id}-content`}
                role="region"
              >
                {title.sections.length > 1 ? (
                  <SectionTable sectionArr={title.sections} />
                ) : (
                  <div className="h-10 w-full bg-red-100"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
