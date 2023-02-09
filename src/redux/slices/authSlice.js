import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: undefined,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
