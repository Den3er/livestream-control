import { combineReducers } from 'redux';
import counterReducer from './containers/Counter/reducer';

export default combineReducers({
  counter: counterReducer
});
