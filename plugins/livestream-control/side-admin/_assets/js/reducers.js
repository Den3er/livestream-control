import { combineReducers } from 'redux-immutable';
import counterReducer from './containers/Counter/reducer';
import asyncStateReducer from './containers/AsyncState/reducer';

export default combineReducers({
  counter: counterReducer,
  asyncState: asyncStateReducer
});
