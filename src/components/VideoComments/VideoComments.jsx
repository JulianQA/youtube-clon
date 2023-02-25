import React from "react";
import { MdOutlineSort } from "react-icons/md";
import { BiHappyBeaming } from "react-icons/bi";
import { SingleComment } from "../SingleComment/SingleComment";
import "./VideoComments.css";
import numeral from "numeral";
import { useSelector } from "react-redux";

const VideoComments = ({ comments, video }) => {
  const handleAddComment = (event) => {
    event.preventDefault();
  };
  const newComments = comments?.map(
    (comment) => comment?.snippet.topLevelComment
  );
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="VideoComments">
      <div className="VideoComments__top">
        <div className="top__total-comments">
          {video?.statistics?.commentCount.length > 6
            ? numeral(video?.statistics.commentCount).format("0.0a")
            : numeral(video?.statistics.commentCount).format("0,0")}
          {" comments"}
          <div>
            <MdOutlineSort />
            <span>Sort by</span>
          </div>
        </div>
        <form className="VideoComments__form" onSubmit={handleAddComment}>
          <img src={user?.photo} alt="" />
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
