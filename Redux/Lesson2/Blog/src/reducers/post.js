import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  GET_POST_LIST_REQUEST,
  GET_POST_LIST_SUCCESS,
  GET_POST_LIST_FAILURE
}
from '../actions/actionTypes';

const initState = {
  posts: [],
  isLoading: true
};

const postReducer = (state = initState, action) => {
  switch (action.type) {

    // case ADD_POST_REQUEST:
    //   return {
    //     ...state,
    //     isLoading: true
    //   };
    // case ADD_POST_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false
    //   };
    // case DELETE_POST_REQUEST:
    //   return {
    //     ...state,
    //     isLoading: true
    //   };
    // case DELETE_POST_SUCCESS:
    //   return {
    //     ...state,
    //     posts: [...state.posts].filter(post => post.id === action.payload.id),
    //     isLoading: false
    //   };
    case GET_POST_LIST_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_POST_LIST_SUCCESS:
      return {
        ...state,
        posts: [ ...action.payload ],
        isLoading: false
      };
    default:
      return state;
  }
};

export default postReducer;