import axios from 'axios';
import {
  INCREMENT,
  INCREMENT_REQUESTED,
  DECREMENT,
  DECREMENT_REQUESTED,
  LOAD_POSTS_SENT,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILED
} from './constants';

export function increment() {
  return {
    type: INCREMENT
  };
}

export function incrementAsync() {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      });
    }, 3000);
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}

export function decrementAsync() {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      });
    }, 3000);
  };
}

export function getFakePosts() {
  return {
    types: [LOAD_POSTS_SENT, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILED],
    request: () => axios.get('https://jsonplaceholder.typicode.com/posts')
  };
}
