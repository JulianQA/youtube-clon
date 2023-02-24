import moment from "moment";
import React from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./SingleComment.css";

const SingleComment = ({ comment }) => {
  return (
    <div className="SingleComment">
      <LazyLoadImage
        src={comment?.snippet.authorProfileImageUrl}
        alt={comment?.snippet.authorDisplayName}
      />
      <div className="SingleComment__comment">
        <div className="comment__data">
          <p className="comment__user-name">
            {comment?.snippet.authorDisplayName}{" "}
            <span>{moment(comment?.snippet.publishedAt).fromNow()}</span>
          </p>
          <p
            className="comment__text"
            dangerouslySetInnerHTML={{ __html: comment?.snippet.textDisplay }}
          ></p>
        </div>
        <div className="comment__likes">
          <div>
            <BiLike />
            <span>{comment?.snippet.likeCount}</span>
            <BiDislike />
          </div>
          <span>Responder</span>
        </div>
      </div>
    </div>
  );
};

export { SingleComment };
