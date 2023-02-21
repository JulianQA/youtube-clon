import React, { useEffect, useState } from "react";
import moment from "moment/moment";
import numeral from "numeral";
import "./VideoPreview.css";
import { API_URL } from "../../api/api";
import { LazyLoadImage } from "react-lazy-load-image-component";
const VideoPreview = ({ video }) => {
  const {
    contentDetails: { duration },
    snippet: {
      channelTitle,
      publishedAt,
      channelId,
      thumbnails: { medium },
      title,
    },
    statistics: { viewCount },
  } = video;
  const [channelIcon, setChannelIcon] = useState(null);
  useEffect(() => {
    const getChannelIcon = async () => {
      const response = await fetch(
        `${API_URL}channels?part=snippet&id=${channelId}&key=${process.env.REACT_APP_API_KEY}`
      );
      const { items } = await response.json();
      setChannelIcon(items[0].snippet.thumbnails.default.url);
    };
    getChannelIcon();
  }, []);
  const parseDuration = () =>
    moment.utc(moment.duration(duration).asSeconds() * 1000).format("mm:ss");

  return (
    <div className="VideoPreview">
      <figure className="VideoPreview__image">
        <LazyLoadImage src={medium.url} alt={title} title={title} />
      </figure>
      <span className="VideoPreview__duration">{parseDuration()}</span>
      <div className="VideoPreview__info">
        <figure className="info__channel-logo">
          <LazyLoadImage
            src={channelIcon}
            alt={channelTitle}
            title={channelTitle}
          />
        </figure>
        <div className="info__video-title">
          <span>{title}</span>
        </div>
        <div className="info__data">
          <span className="data__name-channel">{channelTitle}</span>
          <p>
            <span className="data__views">
              {`${numeral(viewCount).format("0.a")}`}
            </span>
            <span className="data__time-ago">
              {moment(publishedAt).fromNow()}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export { VideoPreview };
