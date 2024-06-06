import * as actions from "./actionTypes";

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

export default function teacherReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_PARTICIPANT:
      return {
        ...state,
        name: actions.payload.name,
        establishment: actions.payload.establishment,
        abreviate: actions.payload.abreviate,
        building_no: actions.payload.building_no,
        locality: actions.payload.locality,
        city: actions.payload.city,
        district: actions.payload.district,
        state: actions.payload.state,
        country: actions.payload.country,
        lowerStandard: actions.payload.lowerStandard,
        higherStandard: actions.payload.higherStandard,
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
