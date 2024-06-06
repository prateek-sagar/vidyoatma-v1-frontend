import { configureStore } from "@reduxjs/toolkit";
import teacherReducer from "./teacherReducer";

const teacherStore = configureStore({ reducer: teacherReducer });

export default teacherStore;
