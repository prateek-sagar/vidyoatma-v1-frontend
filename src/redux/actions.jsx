import * as actions from "./actionTypes";

export const setUser = (id, role, features) => ({
  type: actions.SET_USER,
  payload: {
    id: id,
    role: role,
    features: features,
  },
});

export const removeUser = () => ({
  type: actions.REMOVE_USER,
  payload: {
    id: null,
    role: null,
    features: null,
  },
});

export const setInstitution = (
  name,
  establishment,
  abreviate,
  building_no,
  locality,
  city,
  district,
  state,
  country,
  lowerStandard,
  higherStandard
) => ({
  type: actions.SET_PARTICIPANT,
  payload: {
    institutionName: name,
    establishment: establishment,
    abreviate: abreviate,
    building_no: building_no,
    locality: locality,
    city: city,
    district: district,
    state: state,
    country: country,
    lowerStandard: lowerStandard,
    higherStandard: higherStandard,
  },
});
