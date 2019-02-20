import { createSelector } from 'reselect';

const selectAsyncState = state => state.get('asyncState');

const isFetchingSelector = createSelector(
  selectAsyncState,
  state => state.get('isFetching')
);

export {
  selectAsyncState,
  isFetchingSelector
};
