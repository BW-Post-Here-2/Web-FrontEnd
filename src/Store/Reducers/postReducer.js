import {
  CREATE_POST_START,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
} from "../Actions/postActions";

const initState = {
  posts: [],
  error: "",
  loading: false,
};

export const postReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_POST_START:
      return {
        ...state,
        loading: true,
      };

    case CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, action.payload],
      };

    case CREATE_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
