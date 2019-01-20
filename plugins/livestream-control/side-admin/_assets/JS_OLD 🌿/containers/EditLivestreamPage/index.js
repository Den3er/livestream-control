import some from 'lodash/some';
import includes from 'lodash/includes';
import initSortableList from './sortableList';
import initVodsForm from './vodsForm';
import initStoreListeners from './storeListeners';
import { createStore } from '../../utils';
import template from './template.hbs';

function widgetTrigger() {
  const $icon = $(this).find('.dashicons');
  const $content = $(this).next('.lc-widget__content');

  if ($icon.attr('class') === 'dashicons dashicons-arrow-down') {
    $icon.attr('class', 'dashicons dashicons-arrow-up');
  } else {
    $icon.attr('class', 'dashicons dashicons-arrow-down');
  }

  $content.slideToggle('fast');
}

function getRandomRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function setRandomViewsCounter() {
  const element = $('#lc-views-counter input[type="range"]');
  const result = getRandomRange(element.prop('min'), element.prop('max'));

  if (element.val() == 0) {
    // prettier-ignore
    element.val(result).next('input[type=number]').val(result);
  }
}

export default jQuery($ => {
  const urls = ['/wp-admin/post.php', '/wp-admin/post-new.php'];
  if (!some(urls, el => includes(window.location.pathname, el))) {
    return false;
  }

  const store = createStore();
  setTimeout(() => console.log('Store', window.lc_store), 300);

  $('#lc-vods-container .acf-input')
    .html(template({ data: store.vods }))
    .find('.lc-widget__header')
    .click(widgetTrigger);

  // set views to random number
  $('#lc-start-time input[type="text"]').attr('placeholder', 'date & time');
  setRandomViewsCounter();

  // set shortcode id
  const params = new URLSearchParams(window.location.search);
  $('#shortcode-text').text(`[livestream id="${params.get('post')}"]`);

  initSortableList();
  initVodsForm(widgetTrigger);
  initStoreListeners();
});
