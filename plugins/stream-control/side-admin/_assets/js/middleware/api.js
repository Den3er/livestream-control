/**
 * Async Action Creators Middleware
 * @see https://redux.js.org/recipes/reducing-boilerplate#async-action-creators
 */

import invariant from 'invariant';

export default function({ dispatch }) {
  return next => action => {
    const { types, request, payload = {} } = action;

    if (!types) {
      return next(action);
    }

    invariant(
      !(
        !Array.isArray(types) ||
        types.length !== 3 ||
        !types.every(type => typeof type === 'string')
      ),
      'Expected an array of three string types.'
    );

    invariant(typeof request === 'function', 'Expected request to be a function.');

    const [REQUEST_SENT, REQUEST_FAILED, REQUEST_SUCCESS] = types;

    dispatch(
      Object.assign({}, payload, {
        type: REQUEST_SENT
      })
    );

    return request().then(
      response =>
        dispatch(
          Object.assign({}, payload, {
            response: response.data,
            type: REQUEST_FAILED
          })
        ),
      error =>
        dispatch(
          Object.assign({}, payload, {
            error,
            type: REQUEST_SUCCESS
          })
        )
    );
  };
}
