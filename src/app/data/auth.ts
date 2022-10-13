import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTokenFromLocalStorage } from "@utils/session";
import UserModel from "src/models/UserModel";

export interface AuthState {
  token: string | null | undefined
  user: UserModel | null
}

const initialState: AuthState = {
  token: undefined,
  user: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getAuthToken: (state) => {
      const token = getTokenFromLocalStorage();
      state.token = token;
      if (token == null) {
        state.user = null;
      }
    },
    getAuthUser: (state, action: PayloadAction<UserModel>) => {
      state.user = action.payload;
    }
  }
});

export const { getAuthToken, getAuthUser } = authSlice.actions;

export default authSlice.reducer;
