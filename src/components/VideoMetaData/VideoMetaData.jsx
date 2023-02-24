import React, { useEffect, useState } from "react";
import "./VideoMetaData.css";
import {
  BiLike,
  BiDislike,
  BiShare,
  BiDotsHorizontalRounded,
} from "react-icons/bi";
import { RiDownloadLine } from "react-icons/ri";
import { FaDonate } from "react-icons/fa";
import ShowMoreText from "react-show-more-text";
import numeral from "numeral";
import moment from "moment";
import { getChannelDetails } from "../../api/api";
import { LazyLoadImage } from "react-lazy-load-image-component";

const VideoMetaData = ({ video }) => {
  const [channelDetails, setChannelDetails] = useState(null);
  const numeralNumber = (n) => {
    const res =
      n.length > 6 ? numeral(n).format("0.0a") : numeral(n).format("0,0");
    return res;
  };
  useEffect(() => {
    getChannel();
  }, []);
  const getChannel = async () => {
    const res = await getChannelDetails(video?.snippet?.channelId);
    console.log(res);
    setChannelDetails(res);
  };

  return (
    <div className="VideoMetaData">
      <div className="VideoMetaData__top">
        <p>{video?.snippet?.title}</p>
        <div className="top__channel-details">
          <div className="channel-details__channel-info">
            <div className="channel-info__channel-data">
              {channelDetails && (
                <LazyLoadImage
                  src={channelDetails?.snippet?.thumbnails?.default.url}
                  alt={video?.snippet?.channelTitle}
                  className="channel-data__logo"
                />
              )}
              <div>
                <span className="channel-data__name">
                  {video?.snippet?.channelTitle}
                </span>
                <span className="channel_data__subscribers">
                  {channelDetails &&
                    `${numeralNumber(
                      channelDetails?.statistics?.subscriberCount
                    )} subscribers`}
                </span>
              </div>
            </div>
            <div className="channel-info__buttons">
              <div className="buttons_join">Join</div>
              <div className="buttons_suscribe">Suscribe</div>
            </div>
          </div>
          <div className="channel-details__stuff">
            <div className="stuff__likes">
              <div className="likes__like">
                <BiLike className="stuff__icon" />
                <span>{numeralNumber(video?.statistics?.likeCount)}</span>
              </div>
              <BiDislike className="stuff__icon" />
            </div>
            <div className="stuff__share">
              <BiShare className="stuff__icon" />
              <span>Share</span>
            </div>
            <div className="stuff__download">
              <RiDownloadLine className="stuff__icon" />
              <span>Download</span>
            </div>
            <div className="stuff__thanks">
              <FaDonate className="stuff__icon" />
              <span>Thanks</span>
            </div>
            <div className="stuff__more">
              <BiDotsHorizontalRounded className="stuff__icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="VideoMetaData__description">
        <p className="description__time">
          {`${numeralNumber(video?.statistics?.viewCount)} views ${moment(
            video?.snippet?.publishedAt
          ).fromNow()}`}
        </p>
        <div className="description__data">
          <ShowMoreText
            lines={2}
            more="SHOW MORE"
            less="SHOW LESS"
            anchorClass="description__ShowMoreText"
            expanded={false}
          >
            {video?.snippet?.description}
          </ShowMoreText>
        </div>
      </div>
    </div>
  );
};

export { VideoMetaData };
