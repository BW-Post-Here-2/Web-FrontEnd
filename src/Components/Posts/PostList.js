import React from "react";
import PostSummary from "./PostSummary";
import { Link } from "react-router-dom";
const PostList = ({ posts }) => {
  return (
    <div className="project-list section">
      {posts &&
        posts.map((post) => {
          return (
            <Link to={("/post", +post.id)}>
              <PostSummary post={post} key={post.id} />
            </Link>
          );
        })}
    </div>
  );
};

export default PostList;
