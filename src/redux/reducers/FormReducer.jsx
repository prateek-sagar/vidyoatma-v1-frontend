import { formData } from "../../model/FormState";
import * as actions from "../actionTypes";

export default (state = formData, action) => {
  switch (action.type) {
    case actions.OPEN_FORM:
      return { ...state, isOpen: true, form_data: action.payload.form };

    case actions.CLOSE_FORM:
      return { ...state, isOpen: false, form_data: null };
    default:
      return state;
  }
};
