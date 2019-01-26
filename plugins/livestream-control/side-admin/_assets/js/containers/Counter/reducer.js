import { fromJS } from 'immutable';
import { INCREMENT, DECREMENT } from './constants';

const initialState = fromJS({
  count: 0
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state.update('count', value => value + 1);
    case DECREMENT:
      return state.update('count', value => value - 1);
    default:
      return state;
  }
}

export default reducer;
