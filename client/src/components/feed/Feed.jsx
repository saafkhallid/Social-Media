import React from "react";
import { useState } from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";

const Feed = () => {
    const [posts, setPosts] = useState([]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />

        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}

      </div>
    </div>
  );
};

export default Feed;
