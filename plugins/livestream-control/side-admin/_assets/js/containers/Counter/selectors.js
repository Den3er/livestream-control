import { createSelector } from 'reselect';

const selectCounter = state => state.counter;

const countSelector = createSelector(
  selectCounter,
  state => state.get('count')
);

export {
  selectCounter,
  countSelector
};
