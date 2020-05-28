import {
  CREATE_POST_START,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  FETCH_POST_START,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  DELETE_POST_START,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  SAVE_POST_START,
  SAVE_POST_SUCCESS,
  SAVE_POST_FAILURE,
} from "../Actions/postActions";

const initState = {
  posts: [],
  error: "",
  loading: false,
  favorite: [],
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
    case FETCH_POST_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POST_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };

    case FETCH_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_POST_START:
      return {
        ...state,
        loading: true,
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, action.payload],
      };

    case DELETE_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case SAVE_POST_START:
      return {
        ...state,
        loading: true,
      };
    case SAVE_POST_SUCCESS:
      console.log("save_post_sucss:", action.payload);
      return {
        ...state,
        loading: false,
        favorite: [...state.favorite, action.payload],
      };

    case SAVE_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
