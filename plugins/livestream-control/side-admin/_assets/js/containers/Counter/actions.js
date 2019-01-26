import { INCREMENT, DECREMENT } from './constants';

export function increment() {
  return {
    type: INCREMENT
  };
}

export function incrementAsync() {
  return dispatch => {
    dispatch({
      type: `${INCREMENT}_REQUESTED`
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
      type: `${DECREMENT}_REQUESTED`
    });

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      });
    }, 3000);
  };
}
