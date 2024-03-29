import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: sessionStorage.getItem("yt-accessToken")
    ? sessionStorage.getItem("yt-accessToken")
    : null,
  user: sessionStorage.getItem("yt-userData")
    ? JSON.parse(sessionStorage.getItem("yt-userData"))
    : null,
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
    signOut(state) {
      state.accessToken = null;
      state.user = null;
    },
  },
});

export const { loginFail, loginRequest, loginSuccess, signOut } =
  authSlice.actions;
export default authSlice.reducer;
