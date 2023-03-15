import React, { useEffect, useState } from "react";
import moment from "moment";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getASingleVideoDetails } from "../../api/api";
import "./RelatedVideoPreview.css";
import numeral from "numeral";
import { useNavigate } from "react-router-dom";

const RelatedVideoPreview = ({ relatedVideo, searchScreen }) => {
  const {
    id: { kind, videoId },
    snippet: {
      channelId,
      channelTitle,
      publishedAt,
      title,
      thumbnails,
      description,
    },
  } = relatedVideo;
  const navigate = useNavigate();
  const [videoStats, setVideoStats] = useState();
  useEffect(() => {
    getVideoDetails();
  }, [videoId]);
  const getVideoDetails = async () => {
    try {
      const res = await getASingleVideoDetails(videoId);
      setVideoStats({
        duration: res?.items[0]?.contentDetails.duration,
        views: res?.items[0]?.statistics.viewCount,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const parseDuration = () =>
    moment
      .utc(moment.duration(videoStats?.duration).asSeconds() * 1000)
      .format("mm:ss");

  const isVideo = kind === "youtube#video";
  const handleClick = () => {
    isVideo && navigate(`/watch/${videoId}`);
  };
  return (
    <div
      className={
        searchScreen
          ? "RelatedVideoPreview searchScreen"
          : "RelatedVideoPreview"
      }
      onClick={handleClick}
    >
      <div
        className={
          searchScreen
            ? "RelatedVideoPreview__video searchScreen"
            : "RelatedVideoPreview__video"
        }
      >
        <figure className="RelatedVideoPreview__figure">
          <LazyLoadImage
            src={thumbnails?.medium.url}
            alt={title}
            className={!isVideo && "SearchScreen__channel-img"}
          />
        </figure>

        {isVideo && (
          <div className="RelatedVideoPreview__duration">{parseDuration()}</div>
        )}
      </div>
      <div className="RelatedVideoPreview__data">
        <div
          className={
            searchScreen
              ? "data__video-title searchScreen"
              : "data__video-title"
          }
        >
          {title}
        </div>
        <div className="data__channel-name">{channelTitle}</div>
        <div className="data__statistics">
          {isVideo && (
            <span>
              {videoStats?.views?.length > 6
                ? numeral(videoStats?.views).format("0.a")
                : numeral(videoStats?.views).format("0,0")}
            </span>
          )}
          {isVideo && <span>{moment(publishedAt).fromNow()}</span>}
        </div>
        {isVideo && searchScreen && (
          <p className="SearchScreen-video__description">{description}</p>
        )}
      </div>
    </div>
  );
};

export { RelatedVideoPreview };
