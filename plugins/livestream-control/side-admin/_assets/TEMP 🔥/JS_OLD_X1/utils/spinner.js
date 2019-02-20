function start(target) {
  $(target).addClass('ui-spinner ui-spinner--is-loading ui-spinner--is-loading-in');
  $('<div class="ui-spinner__element"></div>').appendTo(target).fadeIn('fast'); // prettier-ignore
}

function stop(target) {
  $(target).toggleClass('ui-spinner--is-loading-in ui-spinner--is-loading-out');

  setTimeout(() => {
    $(target).removeClass(`ui-spinner ui-spinner--is-loading-in ui-spinner--is-loading-out`);

    const elementSpinner = $(target).find('.ui-spinner__element');
    elementSpinner.fadeOut('fast', () => elementSpinner.remove());
  }, 300);
}

export default {
  start,
  stop
};
