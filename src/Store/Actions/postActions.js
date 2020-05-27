import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const CREATE_POST_START = "CREATE_POST_START";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_FAILURE = "CREATE_POST_FAILURE";

export const createPost = (post_id) => (dispatch) => {
  dispatch({ type: CREATE_POST_START });
  axiosWithAuth()
    .post("", post_id)
    .then((res) => {
      console.log({ res });
      return dispatch({ type: CREATE_POST_SUCCESS, payload: res });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: CREATE_POST_FAILURE, payload: err });
    });
};
