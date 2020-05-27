import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../Store/Actions/postActions";
import { deletePost } from "../../Store/Actions/postActions";
import { savePost } from "../../Store/Actions/postActions";
import { createPost } from "../../Store/Actions/postActions";

const PostDetails = (props) => {
  const [posts, setPosts] = useState(null);
  // const [savedList, setSavedList] = useState([]);

  // const addToSavedList = (post) => {
  //   setSavedList([...savedList, post]);

  // const savePost = () => {
  //   addToSavedList(posts);
  // };

  const postState = useSelector((state) => {
    return state.post.posts;
  });

  //   console.log({ postState });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  useEffect(() => {
    dispatch(deletePost());
  }, []);

  useEffect(() => {
    dispatch(savePost());
  }, []);

  useEffect(() => {
    dispatch(createPost());
  }, []);

  // const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          {postState
            .filter((item, idx) => idx < 20)
            .map((post) => {
              return (
                <div className="card-action  grelighten-4 y-text">
                  <div key={post.id}>
                    <span className="card-title">{post.post_title}</span>
                    <p>{post.post_content}</p>
                    <h4>{post.subreddits}</h4>

                    <div className="card-action grey lighten-4 grey-text">
                      <div>Pulled from Reddit</div>
                      <div>May 27 2020</div>
                      <button className="save-button" onClick={savePost}>
                        Save
                      </button>
                      <button
                        key={post.id}
                        onClick={() => this.props.post.posts.deletePost(post)}
                      >
                        Delete
                      </button>
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
