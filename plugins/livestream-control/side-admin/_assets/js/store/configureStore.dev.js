import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from '../middleware/logger';
import rootReducer from '../reducers';

export default function configureStore(preloadedState) {
  const middlewares = [thunk, logger];
  const enhancer = applyMiddleware(...middlewares);

  // eslint-disable-next-line no-underscore-dangle
  const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(rootReducer, preloadedState, reduxDevTools(enhancer));
}
