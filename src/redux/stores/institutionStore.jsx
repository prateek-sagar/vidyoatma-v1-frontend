import { configureStore } from "@reduxjs/toolkit";
import institutionReducer from "../reducers/institutionReducer";

const institutionStore = configureStore({ reducer: institutionReducer });

export default institutionStore;
