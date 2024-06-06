const initialState = {
  id: null,
  role: null,
  features: null,
  isLogin: true,
};
import * as actions from "./actionTypes";

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_USER:
      return {
        ...state,
        id: action.payload.id,
        role: action.payload.role,
        features: action.payload.features,
        isLogin: true,
      };
    case actions.REMOVE_USER:
      return {
        ...state,
        id: null,
        role: null,
        features: null,
      };
    default:
      return state;
  }
}
