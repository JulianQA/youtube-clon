import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import homeVideosSlice from "./slices/homeVideosSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    homeVideos: homeVideosSlice,
  },
});
