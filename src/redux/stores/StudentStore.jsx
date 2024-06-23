import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../reducers/StudentReducer";

export const studentStore = configureStore({ reducer: studentReducer });
