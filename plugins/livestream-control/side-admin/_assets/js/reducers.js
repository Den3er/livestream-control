import { combineReducers } from 'redux';
import streamFeedReducer from './containers/StreamFeed/reducer';

export default combineReducers({
  streamFeed: streamFeedReducer
});
