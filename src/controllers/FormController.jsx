import { openForm } from "../redux/actions";
import formStore from "../redux/stores/FormStore";

export function formController(value) {
  formStore.dispatch(openForm(value));
}
