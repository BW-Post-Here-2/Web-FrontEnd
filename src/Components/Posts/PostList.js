import React from "react";
import PostSummary from "./PostSummary";

const PostList = ({ posts }) => {
  return (
    <div className="project-list section">
      {posts &&
        posts.map((post) => {
          return <PostSummary post={post} key={post.id} />;
        })}
    </div>
  );
};

export default PostList;
