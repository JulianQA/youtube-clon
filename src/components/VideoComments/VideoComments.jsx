import React from "react";
import { MdOutlineSort } from "react-icons/md";
import { BiHappyBeaming } from "react-icons/bi";
import { SingleComment } from "../SingleComment/SingleComment";
import "./VideoComments.css";

const VideoComments = ({ comments }) => {
  const handleAddComment = (event) => {
    event.preventDefault();
  };
  const newComments = comments?.map(
    (comment) => comment?.snippet.topLevelComment
  );
  return (
    <div className="VideoComments">
      <div className="VideoComments__top">
        <div className="top__total-comments">
          333 comments
          <div>
            <MdOutlineSort />
            <span>Sort by</span>
          </div>
        </div>
        <form className="VideoComments__form" onSubmit={handleAddComment}>
          <img
            src="https://yt3.ggpht.com/ytc/AL5GRJVTUFvK5cXVwvZcR27YDzHd-655HRXTSmE7n07CTg=s48-c-k-c0x00ffffff-no-rj"
            alt=""
          />
          <div className="form__add-comment">
            <input type="text" placeholder="Add a comment" />
            <div className="add-comment__bottom">
              <div>
                <BiHappyBeaming />
              </div>
              <div>
                <div>Cancelar</div>
                <button>Comment</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="VideoComments__all-comments">
        {newComments?.map((comment) => (
          <SingleComment comment={comment} key={comment.id} />
        ))}
      </div>
    </div>
  );
};

export { VideoComments };
