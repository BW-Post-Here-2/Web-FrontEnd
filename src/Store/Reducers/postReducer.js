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
  FETCH_SAVED_POST_START,
  FETCH_SAVED_POST_SUCCESS,
  FETCH_SAVED_POST_FAILURE,
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  LOGOUT,
  FETCH_USER_FAILURE,
  POST_USER_SUCCESS,
  POST_USER_FAILURE,
} from "../Actions/postActions";

const initState = {
  posts: [],
  favorite: [],
  user: [],
  error: "",
  loading: false,
  chosen: false,
};

export const postReducer = (state = initState, action) => {
  switch (action.type) {
    //CREATING POSTS
    //*********************************** */
    case CREATE_POST_START:
      return {
        ...state,
        loading: true,
      };

    case CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [...action.payload],
      };

    case CREATE_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    //FETCHING POSTS
    //*********************************** */
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

    //DELETING POSTS
    //*********************************** */
    case DELETE_POST_START:
      return {
        ...state,
        loading: true,
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        favorite: [...state.favorite, action.payload],
      };

    case DELETE_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    //SAVING POSTS
    //*********************************** */
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
        favorite: [...action.payload],
      };

    case SAVE_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    //SAVED POSTS
    //*********************************** */
    case FETCH_SAVED_POST_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SAVED_POST_SUCCESS:
      console.log("saved_post_sucss:", action.payload);
      return {
        ...state,
        loading: false,
        favorite: [...action.payload],
      };

    case FETCH_SAVED_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    //USERS
    //*********************************** */
    case FETCH_USER_START:
      return {
        ...state,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        error: "",
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        err: action.payload,
      };
    case POST_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case POST_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    //LOGOUT
    //*********************************** */
    case LOGOUT:
      localStorage.clear();
      window.location.href = "/sigup";
      return {
        loading: false,
      };

    default:
      return state;
  }
};
