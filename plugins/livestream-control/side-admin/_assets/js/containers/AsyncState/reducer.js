/* eslint-disable */

import { fromJS } from 'immutable';
import { FETCH_STATE_SENT, FETCH_STATE_SUCCESS, FETCH_STATE_FAILED } from './constants';

const initialState = fromJS({
  isFetching: false,
  error: false
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STATE_SENT:
      return state.set('isFetching', true);
    case FETCH_STATE_SUCCESS:
    case FETCH_STATE_FAILED:
      return state.set('isFetching', false);
    default:
      return state;
  }
}

export default reducer;
