import { createLogger } from 'redux-logger';
import Immutable from 'immutable';

export default createLogger({
  stateTransformer: state => {
    const newState = {};

    Object.keys(state).forEach(key => {
      if (Immutable.Iterable.isIterable(state[key])) {
        newState[key] = state[key].toJS();
      } else {
        newState[key] = state[key];
      }
    });

    return newState;
  }
});
