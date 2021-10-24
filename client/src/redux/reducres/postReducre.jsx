const { CREATE_POST, POST_ERROR, LIST_POST, CURRENT_POST, ONEPOST, EDITONEPOST } = require("../types/post_types");
const initialstate = {
  msg: null,
  errors: null,
  posts: [],
  currentpost: [],
  post: null,
  newPost: null,
};
const postReducer = (state = initialstate, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        newPost: action.payload.newPost,
      };
    case EDITONEPOST:
      return {
        ...state,
        currentpost: action.payload,
      };
    case POST_ERROR:
      return {
        ...state,
        errors: action.payload.errors,
      };
    case LIST_POST:
      return {
        ...state,
        posts: action.payload,
      };
    case CURRENT_POST:
      return {
        ...state,
        currentpost: action.payload,
      };
    case ONEPOST:
      return {
        ...state,
        post: action.payload.OnePost,
      };
    default:
      return state;
  }
};
export default postReducer;
