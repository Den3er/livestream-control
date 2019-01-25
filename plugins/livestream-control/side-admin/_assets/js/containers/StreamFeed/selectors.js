/* eslint-disable import/prefer-default-export */

import { createSelector } from 'reselect';

const selectStreamFeed = state => state.streamFeed;

const countSelector = createSelector(
  selectStreamFeed,
  state => state.get('count')
);

export { countSelector };
