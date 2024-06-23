import { StandardsModel } from "../../model/StandardsModel";
import * as actions from "../actionTypes";

export default function standardReducer(state = StandardsModel, action) {
  switch (action.type) {
    case actions.SET_STANDARDS:
      return {
        ...state,
        isLoading: false,
        data: [
          ...state.data,
          {
            id: action.payload.object.id,
            standardTitle: action.payload.object.name,
            sections: action.payload.object.sections,
          },
        ],
      };
    case actions.ADD_SECTION:
      const updatedData = state.data.slice();
      updatedData[action.payload.index] = {
        ...updatedData[action.payload.index],
        sections: [
          ...updatedData[action.payload.index].sections,
          action.payload.section,
        ],
      };
      return { ...state, data: updatedData };
    case actions.REMOVE_STANDARDS:
      return state.filter((standard) => standard.data.id !== action.payload.id);
    case actions.REMOVE_ALL_STANDARDS:
      return { isLoading: true, data: [] };
    default:
      return state;
  }
}
