/* eslint-disable no-underscore-dangle */

import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from '../middleware/logger';
import rootReducer from '../reducers';

const middleware = applyMiddleware(thunk, logger);
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, reduxDevTools(middleware));
