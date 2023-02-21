import React, { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
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
    fetchHomeVideos();
  }, []);

  const fetchHomeVideos = async () => {
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
  };

  const { videos, nextPageToken } = useSelector((state) => state.homeVideos);

  const fetchNextPage = async () => {
    try {
      const res = await getMostPopularVideos(nextPageToken);
      dispatch(
        homeVideosSuccess({
          videos: res?.items,
          nextPageToken: res?.nextPageToken,
        })
      );
    } catch (error) {
      dispatch(homeVideosFail(error));
    }
  };
  return (
    <div className="HomeScreen">
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchNextPage}
        hasMore={nextPageToken ? true : false}
        endMessage={<div style={{ marginTop: "50px" }}></div>}
      >
        <div className="HomeScreen__videos">
          {videos.map((video) => (
            <VideoPreview video={video} key={video.id} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export { HomeScreen };
