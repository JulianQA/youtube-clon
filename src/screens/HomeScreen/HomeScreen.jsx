import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMostPopularVideos } from "../../api/api";
import { VideoPreview } from "../../components/VideoPreview/VideoPreview";
import {
  homeVideosFail,
  homeVideosRequest,
  homeVideosSuccess,
} from "../../redux/slices/homeVideosSlice";
import "./HomeScreen.css";

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchHomeVideos() {
      try {
        dispatch(homeVideosRequest());
        const res = await getMostPopularVideos();
        dispatch(
          homeVideosSuccess({
            videos: res?.items,
            nextPageToken: res?.nextPageToken,
          })
        );
      } catch (error) {
        dispatch(homeVideosFail(error));
      }
    }
    fetchHomeVideos();
  }, []);

  const { videos } = useSelector((state) => state.homeVideos);
  return (
    <div className="HomeScreen">
      <div className="HomeScreen__videos">
        {videos.map((video) => (
          <VideoPreview video={video} key={video.id} />
        ))}
      </div>
    </div>
  );
};

export { HomeScreen };
