import React from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import "./SingleComment.css";

const SingleComment = () => {
  return (
    <div className="SingleComment">
      <img
        src="https://yt3.ggpht.com/ytc/AL5GRJVTUFvK5cXVwvZcR27YDzHd-655HRXTSmE7n07CTg=s48-c-k-c0x00ffffff-no-rj"
        alt=""
      />
      <div className="SingleComment__comment">
        <div className="comment__data">
          <p className="comment__user-name">
            Nombre <span>hace 1 año</span>
          </p>
          <p className="comment__text">
            great tutorial. redux's summary is like ultimate level.
            Authetication part is amazing. Thank You.
          </p>
        </div>
        <div className="comment__likes">
          <div>
            <BiLike />
            <span>23</span>
            <BiDislike />
          </div>
          <span>Responder</span>
        </div>
      </div>
    </div>
  );
};

export { SingleComment };
