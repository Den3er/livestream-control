import assign from 'lodash/assign';
import uniqWith from 'lodash/uniqWith';
import isEqual from 'lodash/isEqual';

const $element = $('#lc-store input');

const initState = JSON.stringify({
  custom_thumbnail: null,
  start_time: null,
  views_counter: null,
  vods: []
});

export function createStore() {
  const store = JSON.parse($element.val() || initState);

  window.lc_store = store;
  $element.val(JSON.stringify(store));

  return store;
}

export function updateStore(source) {
  const store = JSON.parse($element.val() || initState);
  const cache = assign({}, store, source);

  for (const prop in cache) {
    if (Array.isArray(cache[prop])) {
      cache[prop] = uniqWith(cache[prop], isEqual);
    }
  }

  window.lc_store = cache;
  $element.val(JSON.stringify(cache));
}
