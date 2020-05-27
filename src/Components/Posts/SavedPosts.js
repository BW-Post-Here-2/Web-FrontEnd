import React from "react";
// import { NavLink } from "react-router-dom";

function SavedPosts({ post }) {
  return (
    <div className="saved-list">
      {/* <h3>Saved Posts</h3>
      {post.map((post) => {
        return (
          <NavLink to={`/savedposts/${post.id}`} key={post.id}>
            <span className="saved-posts">{post.title}</span>
          </NavLink>
        );
      })} */}
    </div>
  );
}

export default SavedPosts;
