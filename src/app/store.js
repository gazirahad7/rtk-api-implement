import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/postSlice";

export const store = configureStore({
  reducer: {
    app: postReducer,
  },
});
