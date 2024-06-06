import { configureStore } from "@reduxjs/toolkit";
import institutionReducer from "./institutionReducer";

const institutionStore = configureStore({ reducer: institutionReducer });

export default institutionStore;
