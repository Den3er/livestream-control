/**
 * Async Action Creators Middleware
 * @see https://redux.js.org/recipes/reducing-boilerplate#async-action-creators
 */

const validateActionTypes = types =>
  !Array.isArray(types) || types.length !== 3 || !types.every(type => typeof type === 'string');

export default function({ dispatch }) {
  return next => action => {
    const { types, request, payload = {} } = action;

    if (!types) {
      return next(action);
    }

    if (validateActionTypes(types)) {
      throw new Error('Expected an array of three string types.');
    }

    if (typeof request !== 'function') {
      throw new Error('Expected request to be a function.');
    }

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
