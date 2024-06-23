import { setStandard } from "../redux/actions";
import { standardStore } from "../redux/stores/StandardStore";
import store from "../redux/stores/userStore";

export function controller(arr) {
  console.log(arr);
  arr.forEach((standard) => {
    standardStore.dispatch(
      setStandard({ id: standard.id, name: standard.name, sections: [] })
    );
  });
}

export function scrollPosition(panelToPosition) {
  console.log(panelToPosition.offsetTop);
  console.log(document.querySelector(".main-container").offsetHeight);
}

export async function standardFetch(array) {
  try {
    const id = store.getState().id;
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/standard`,
      {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id }),
        credentials: "include",
      }
    );
    if (response.ok) {
      const sections = await response.json();
      sections.forEach((section, index) => {
        standardStore.dispatch(
          setStandard({
            id: section.standard,
            name: array[index].name,
            sections: section.section,
          })
        );
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function addStandardSections(index) {
  const data = standardStore.getState().data[index];
  const id = store.getState().id;
  console.log("data ", store.getState().id, data.id, data.sections);
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/standard/add`,
      {
        method: "POST",
        credentials: "include",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          institutionId: id,
          standard: data.id,
          sections: data.sections,
        }),
      }
    );
    if (response.ok) {
      console.log("Added");
    }
  } catch (error) {
    alert("Something went wrong, contact to prateek sagar");
  }
}
