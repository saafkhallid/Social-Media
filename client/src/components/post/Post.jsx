import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/person/1.jpeg"
              alt=""
            />
            <span className="postUsername"> khalid saaf</span>
            <span className="postDate">5 min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">hay !its my first post</span>
          <img className="postImg" src="/assets/post/2.jpeg" alt="" />
              </div>
              
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />
            <span className="postLikeCounter"> people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
