import { createLogger } from 'redux-logger';
import Immutable from 'immutable';

export default createLogger({
  stateTransformer: state =>
    Object.keys(state).reduce((result, value) => {
      if (Immutable.Iterable.isIterable(state[value])) {
        // eslint-disable-next-line no-param-reassign
        result[value] = state[value].toJS();
      } else {
        // eslint-disable-next-line no-param-reassign
        result[value] = state[value];
      }

      return result;
    }, {})
});
