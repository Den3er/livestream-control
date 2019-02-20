/* eslint-disable import/prefer-default-export */

import axios from 'axios';
import { FETCH_STATE_SENT, FETCH_STATE_SUCCESS, FETCH_STATE_FAILED } from './constants';

export function fetchState() {
  const delay = 'http://slowwly.robertomurray.co.uk/delay/2000/url';

  return {
    types: [FETCH_STATE_SENT, FETCH_STATE_SUCCESS, FETCH_STATE_FAILED],
    request: () => axios.get(`${delay}/https://jsonplaceholder.typicode.com/posts`)
  };
}
