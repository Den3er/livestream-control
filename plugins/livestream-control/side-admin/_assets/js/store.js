import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

const preloadedState = {
  count: 0
};

export default createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));
