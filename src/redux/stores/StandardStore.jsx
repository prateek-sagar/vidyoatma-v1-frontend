import { configureStore } from "@reduxjs/toolkit";
import standardReducer from "../reducers/StandardReducer";

export const standardStore = configureStore({ reducer: standardReducer });
