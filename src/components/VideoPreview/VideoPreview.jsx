import React from "react";
import "./VideoPreview.css";

const VideoPreview = () => {
  return (
    <div className="VideoPreview">
      <figure className="VideoPreview__image">
        <img
          src="https://i.ytimg.com/vi/MwpMEbgC7DA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDE_qdniId9OIfa6OrZI9ls0Nfg0Q"
          alt=""
        />
      </figure>
      <div className="VideoPreview__info">
        <figure className="info__channel-logo">
          <img
            src="https://yt3.ggpht.com/KC1QFXIOH5NZyeF7HoBXZf2OXp-p-TwhRqvRWQOXBDxQJbM7k06Ru7lDwxbPueUk6An3b2PW=s88-c-k-c0x00ffffff-no-rj"
            alt="channel-logo"
          />
        </figure>
        <div className="info__video-title">
          <span>Another Love</span>
        </div>
        <div className="info__data">
          <span className="data__name-channel">Tom Odell</span>
          <p>
            <span className="data__views">1M vistas</span>
            <span className="data__time-ago">hace 2 semanas</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export { VideoPreview };
