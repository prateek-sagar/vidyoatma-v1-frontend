import { openForm } from "../redux/actions";
import formStore from "../redux/stores/FormStore";

export function formController(e) {
  formStore.dispatch(openForm(e.target.value));
}
