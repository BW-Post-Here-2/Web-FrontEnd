import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPost,
  deletePost,
  savePost,
  createPost,
} from "../../Store/Actions/postActions";

const PostDetails = (props) => {
  const [posts, setPosts] = useState(null);

  const postState = useSelector((state) => {
    return state.post.posts;
  });
  const favoriteState = useSelector((state) => {
    return state.post.favorite;
  });
  console.log({ favoriteState });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          {postState
            .filter((item, idx) => idx < 100)
            .map((post) => {
              return (
                <div key={post.id} className="card-action  grelighten-4 y-text">
                  <div key={post.id}>
                    <span className="card-title">TITLE:{post.post_title}</span>
                    <p>CONTENT:{post.post_content}</p>
                    <h4>r/{post.subreddits}</h4>

                    <div className="card-action grey lighten-4 grey-text">
                      <div>Pulled from Reddit</div>
                      <div>May 27 2020</div>
                      <button
                        className="save-button"
                        onClick={() => {
                          console.log(post.id);
                          dispatch(savePost(post.id));
                          console.log({ favoriteState });
                        }}
                      >
                        Save
                      </button>
                      {/* <button
                        key={post.id}
                        onClick={() => this.props.post.posts.deletePost(post)}
                      >
                        Delete
                      </button> */}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default PostDetails;
