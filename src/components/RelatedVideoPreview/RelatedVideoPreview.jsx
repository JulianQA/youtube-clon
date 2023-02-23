import React from "react";
import "./RelatedVideoPreview.css";

const RelatedVideoPreview = () => {
  return (
    <div className="RelatedVideoPreview">
      <div className="RelatedVideoPreview__video">
        <img
          src="https://i.ytimg.com/vi/Hv2EsagAgQo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDy-GBdNNrWEaeF1Ls1smEwqtGog"
          alt=""
        />
        <div className="RelatedVideoPreview__duration"> 20:45</div>
      </div>
      <div className="RelatedVideoPreview__data">
        <div className="data__video-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          perferendis, nisi quas corrupti eaque aspernatur non dicta aut ut sit
          placeat, eius dolore voluptas eligendi dolorum facere ex magnam
          deserunt.
        </div>
        <div className="data__channel-name">Programming Techie</div>
        <div className="data__statistics">
          <span>26000 views</span>
          <span>10 months ago</span>
        </div>
      </div>
    </div>
  );
};

export { RelatedVideoPreview };
