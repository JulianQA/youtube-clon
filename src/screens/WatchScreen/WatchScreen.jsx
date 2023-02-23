import React from "react";
import { RelatedVideoPreview } from "../../components/RelatedVideoPreview/RelatedVideoPreview";
import { VideoComments } from "../../components/VideoComments/VideoComments";
import { VideoMetaData } from "../../components/VideoMetaData/VideoMetaData";
import "./WatchScreen.css";

const WatchScreen = () => {
  return (
    <div className="WatchScreen">
      <div className="WatchScreen__left">
        <iframe
          // src="https://www.youtube.com/embed/tgbNymZ7vqY"
          src=""
          // frameBorder={0}
          className="left__video"
          title="titulo del video"
        ></iframe>
        <VideoMetaData />
        <VideoComments />
      </div>
      <div className="WatchScreen__right">
        {[...Array(10)].map(() => (
          <RelatedVideoPreview />
        ))}
      </div>
    </div>
  );
};

export { WatchScreen };
