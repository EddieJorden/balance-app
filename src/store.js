import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./components/userSlice/userSlice";

export const store = configureStore({
  reducer: {
    userSlice: userSlice,
  },
});
