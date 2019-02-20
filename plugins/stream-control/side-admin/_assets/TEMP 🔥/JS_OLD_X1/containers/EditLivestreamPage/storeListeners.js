import { updateStore } from '../../utils';

function getImageLink(ID, callback) {
  // prettier-ignore
  wp.media.attachment(ID).fetch().then(response => {
    callback(wp.media.attachment(ID).get('url'), response)
  });
}

export default function() {
  const $custom_thumbnail = $('#lc-custom-thumbnail input');
  const $start_time = $('#lc-start-time .input');
  const $views_counter = $('#lc-views-counter input[type="range"]');

  $custom_thumbnail.change(() => {
    getImageLink($custom_thumbnail.val(), url => {
      updateStore({ custom_thumbnail: url });
    });
  });

  $start_time.change(() => {
    updateStore({ start_time: $start_time.val() });
  });

  $views_counter.change(() => {
    updateStore({ views_counter: $views_counter.val() });
  });

  $custom_thumbnail.triggerHandler('change');
  $start_time.triggerHandler('change');
  $views_counter.triggerHandler('change');
}
