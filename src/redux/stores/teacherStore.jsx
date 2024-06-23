import { configureStore } from "@reduxjs/toolkit";
import teacherReducer from "../reducers/teacherReducer";

const teacherStore = configureStore({ reducer: teacherReducer });

export default teacherStore;
