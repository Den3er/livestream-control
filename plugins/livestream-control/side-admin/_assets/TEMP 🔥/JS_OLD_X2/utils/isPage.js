/* eslint-disable import/no-extraneous-dependencies */

import some from 'lodash/some';
import includes from 'lodash/includes';

export default function(collection = []) {
  const currentLink = window.location.pathname;
  return some(collection, path => includes(currentLink, path));
}
