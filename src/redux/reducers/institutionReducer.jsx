const initialState = {
  name: null,
  establishment: null,
  abreviate: null,
  building_no: null,
  locality: null,
  city: null,
  district: null,
  state: null,
  country: null,
  lowerStandard: null,
  higherStandard: null,
};
import * as actions from "../actionTypes";

export default function institutionReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_PARTICIPANT:
      return {
        ...state,
        name: action.payload.institutionName,
        establishment: action.payload.establishment,
        abreviate: action.payload.abreviate,
        building_no: action.payload.building_no,
        locality: action.payload.locality,
        city: action.payload.city,
        district: action.payload.district,
        state: action.payload.state,
        country: action.payload.country,
        lowerStandard: action.payload.lowerStandard,
        higherStandard: action.payload.higherStandard,
      };

    case actions.REMOVE_PARTICIPANT:
      return {
        ...state,
        name: null,
        establishment: null,
        abreviate: null,
        building_no: null,
        locality: null,
        city: null,
        district: null,
        state: null,
        country: null,
        lowerStandard: null,
        higherStandard: null,
      };

    default:
      return state;
  }
}
