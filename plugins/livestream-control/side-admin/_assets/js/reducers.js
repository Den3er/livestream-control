import { combineReducers } from 'redux-immutable';
import counterReducer from './containers/Counter/reducer';

export default combineReducers({
  counter: counterReducer
});
