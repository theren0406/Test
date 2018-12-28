import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  GET_POST_LIST_REQUEST,
  GET_POST_LIST_SUCCESS,
  GET_POST_LIST_FAILURE,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
}
  from './actionTypes';
import axios from '../axiosURL';
import history from '../history';

export const addPostRequest = payload => ({
  type: ADD_POST_REQUEST,
  payload
});

export const addPostSuccess = payload => {
  return { type: ADD_POST_SUCCESS, payload }
};

export const addPostFailure = payload => {
  return { type: ADD_POST_FAILURE, payload }
};

export const deletePostRequest = payload => {
  return { type: DELETE_POST_REQUEST, payload }
};

export const deletePostSuccess = payload => {
  return { type: DELETE_POST_SUCCESS, payload }
};

export const deletePostFailure = payload => {
  return { type: DELETE_POST_FAILURE, payload }
};

export const getPostListRequest = payload => {
  return { type: GET_POST_LIST_REQUEST, payload }
};

export const getPostListSuccess = payload => {
  return { type: GET_POST_LIST_SUCCESS, payload }
};

export const getPostListFailure = payload => {
  return { type: GET_POST_LIST_FAILURE, payload }
};

export const getPostRequest = payload => {
  return { type: GET_POST_REQUEST, payload }
};

export const getPostSuccess = payload => {
  return { type: GET_POST_SUCCESS, payload }
};

export const getPostFailure = payload => {
  return { type: GET_POST_FAILURE, payload }
};

export const addPost = (payload) => {
  return dispatch => {
    dispatch(addPostRequest(payload));
    axios.post('/posts.json', payload)
      .then(response => {
        dispatch(addPostSuccess(response));
        history.push('/posts');
      })
      .catch(error => {
        dispatch(addPostFailure(error));
      });
  }
};

export const deletePost = payload => (
  (dispatch) => {
    dispatch(deletePostRequest(payload));
    const post_id = payload;
    axios.delete(`/posts/${post_id}.json`)
      .then(response => {
        dispatch(deletePostSuccess(response));
        history.push({
          pathname: '/posts',
          state: { fromDeletePost: true }
        });
      })
      .catch(error => {
        dispatch(deletePostFailure(error));
      });
  }
);

export const getPostList = payload => (
  (dispatch) => {
    dispatch(getPostListRequest(payload));
    axios.get('/posts.json')
      .then(response => {
        const fetchedPosts = [];
        for (let key in response.data) {
          fetchedPosts.push({
            id: key,
            ...response.data[key]
          });
        }
        // 使用reverse 將最新網誌放最上面
        dispatch(getPostListSuccess(fetchedPosts.reverse()));
      })
      .catch(error => {
        dispatch(getPostListFailure(error));
      });
  }
);

export const getPost = payload => (
  (dispatch) => {
    dispatch(getPostRequest(payload));
    const post_id = payload;
    axios.get(`/posts/${post_id}.json`)
      .then(response => {
        dispatch(getPostSuccess({ id: post_id, ...response.data }));
      })
      .catch(error => {
        dispatch(getPostFailure(error));
      });
  }
);