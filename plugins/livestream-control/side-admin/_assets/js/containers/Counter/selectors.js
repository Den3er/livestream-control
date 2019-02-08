import { createSelector } from 'reselect';

const selectCounter = state => state.get('counter');

const countSelector = createSelector(
  selectCounter,
  state => state.get('count')
);

export {
  selectCounter,
  countSelector
};
