import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  user: null,
  loading: false,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest(state) {
      state.loading = true;
    },
    loginSuccess(state, action) {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.loading = false;
    },
    loginFail(state, action) {
      state.accessToken = null;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loginFail, loginRequest, loginSuccess } = authSlice.actions;
export default authSlice.reducer;
