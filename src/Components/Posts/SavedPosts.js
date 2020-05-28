import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";

function SavedPosts({ post }) {
  const postState = useSelector((state) => {
    return state.post.posts;
  });
  const favoriteState = useSelector((state) => {
    return state.post.favorite;
  });
  console.log("alskefowenciw", favoriteState);
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
