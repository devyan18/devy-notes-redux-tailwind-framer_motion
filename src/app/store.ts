import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./data/auth";
import themeReducer from "./data/theme";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
