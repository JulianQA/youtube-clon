import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: [],
  loading: false,
  nextPageToken: null,
};

export const homeVideosSlice = createSlice({
  name: "homeVideos",
  initialState,
  reducers: {
    homeVideosRequest(state) {
      state.loading = true;
    },
    homeVideosSuccess(state, action) {
      state.videos = [...state.videos, ...action.payload.videos];
      state.nextPageToken = action.payload.nextPageToken;
      state.loading = false;
    },
    homeVideosFail(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { homeVideosRequest, homeVideosSuccess, homeVideosFail } =
  homeVideosSlice.actions;
export default homeVideosSlice.reducer;
