import React, { useState } from "react";
import "../css/FormSlider.css";
import formStore from "../redux/stores/FormStore";
import { formData } from "../model/FormState";
import { ADD_STUDENT } from "../redux/actionTypes";
import AddStudentForm from "../sharedcomponents/AddStudentForm";
import { IoClose } from "react-icons/io5";
import { closeForm } from "../redux/actions";
function SliderForm() {
  const [formState, setFormState] = useState(formData);
  formStore.subscribe(() => {
    setFormState(formStore.getState());
  });
  const handleClose = () => {
    formStore.dispatch(closeForm());
  };
  return (
    <div className="form-container" aria-expanded={formState.isOpen}>
      <button className="close-btn" onClick={() => handleClose()}>
        <IoClose size={30} />
      </button>
      <div className="form-content">
        {formState.form_data !== null && formState.form_data === ADD_STUDENT ? (
          <AddStudentForm />
        ) : (
          "teacher"
        )}
      </div>
    </div>
  );
}

export default SliderForm;
