import * as actions from "../actionTypes";

export default function studentReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_STUDENT:
      return [
        ...state,
        {
          id: action.payload.data.id,
        },
      ];
    case actions.REMOVE_STUDENT:
      return state.filter((student) => student.id !== action.payload.id);
    case actions.EDIT_STUDENT:
      return;
    default:
      return state;
  }
}
