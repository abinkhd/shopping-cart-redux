import reducer from "./shoppingReducer";
import { configureStore } from "@reduxjs/toolkit";

const store=configureStore({reducer});
export default store