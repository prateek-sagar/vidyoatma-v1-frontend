import { configureStore } from "@reduxjs/toolkit";
import FormReducer from "../reducers/FormReducer";

const formStore = configureStore({ reducer: FormReducer });

export default formStore;
