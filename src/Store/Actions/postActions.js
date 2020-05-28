import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const CREATE_POST_START = "CREATE_POST_START";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_FAILURE = "CREATE_POST_FAILURE";

export const FETCH_POST_START = "FETCH_POST_START";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_FAILURE = "FETCH_POST_FAILURE";

export const DELETE_POST_START = "DELETE_POST_START";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";

export const SAVE_POST_START = "SAVE_POST_START";
export const SAVE_POST_SUCCESS = "SAVE_POST_SUCCESS";
export const SAVE_POST_FAILURE = "SAVE_POST_FAILURE";

export const createPost = (post_id) => (dispatch) => {
  dispatch({ type: CREATE_POST_START });
  axiosWithAuth()
    .post("/reddit/favorite", post_id)
    .then((res) => {
      console.log({ res });
      return dispatch({ type: CREATE_POST_SUCCESS, payload: res });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: CREATE_POST_FAILURE, payload: err });
    });
};

export const fetchPost = () => (dispatch) => {
  dispatch({ type: FETCH_POST_START });
  axiosWithAuth()
    .get("/reddit/posts")
    .then((res) => {
      // console.log({ res });
      dispatch({ type: FETCH_POST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("failed", err);
      dispatch({ type: FETCH_POST_FAILURE, payload: err });
    });
};

export const deletePost = (post_id) => (dispatch) => {
  dispatch({ type: DELETE_POST_START });
  axiosWithAuth()
    .post("/reddit/favorite", post_id)
    .then((res) => {
      console.log({ res });
      return dispatch({ type: DELETE_POST_SUCCESS, payload: res });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: DELETE_POST_FAILURE, payload: err });
    });
};

export const savePost = (post_id) => (dispatch) => {
  dispatch({ type: SAVE_POST_START });
  axiosWithAuth()
    .post("/reddit/favorite", { post_id })
    .then((res) => {
      axiosWithAuth()
        .get("/reddit/favorite")
        .then((res) => {
          dispatch({ type: SAVE_POST_SUCCESS, payload: res.data });
        })
        .catch((err) => {
          console.log(err);
          dispatch({ type: SAVE_POST_FAILURE, payload: err });
        });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: SAVE_POST_FAILURE, payload: err });
    });
};
