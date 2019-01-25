import { createSelector } from 'reselect';

const selectStreamFeed = state => state.streamFeed;

const countSelector = createSelector(
  selectStreamFeed,
  state => state.get('count')
);

export {
  selectStreamFeed,
  countSelector
};
