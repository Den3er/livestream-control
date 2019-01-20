import MicroModal from 'micromodal';
import getYouTubeID from 'get-youtube-id';
import escape from 'lodash/escape';
import filter from 'lodash/filter';
import { getYouTubeAPI, formatYouTubeDuration, createPlayer } from './player';
import { updateStore, spinner } from '../../utils';
import widget from './_widget.hbs';

export default function(widgetTrigger) {
  const $container = $('#lc-video-feed-form .modal__container');
  const $inputVideoLink = $container.find('#lc-video-feed-form__input-video-url');
  const $videoPlayer = $container.find('.video-container');
  const $videoPlayerEmbed = $container.find('#youtube-video-player');
  const $submit = $container.find('#lc-modal__submit');

  let prevResponse = {};

  $inputVideoLink.on('input', event => {
    const video_id = getYouTubeID(event.target.value);

    if (!video_id) {
      $videoPlayer.hide('fast');
      return false;
    }

    spinner.start($container);

    getYouTubeAPI(video_id).then(response => {
      const { snippet, contentDetails } = response.data.items[0];
      prevResponse = {
        video_id,
        type: 'YouTube',
        title: snippet.title,
        duration: formatYouTubeDuration(contentDetails.duration)
      };

      createPlayer($videoPlayerEmbed[0], video_id);
      $videoPlayer.show('fast');
      spinner.stop($container);
    });
  });

  $submit.click(event => {
    event.preventDefault();

    // check if the video exists
    if (filter(window.lc_store.vods, ['video_id', prevResponse.video_id]).length) {
      const $footer = $container.find('.lc-modal__footer');
      $footer.addClass('shake-horizontal shake-constant');
      setTimeout(() => $footer.removeClass('shake-horizontal shake-constant'), 500);
      return false;
    }

    updateStore({
      vods: [
        ...window.lc_store.vods,
        {
          title: escape(prevResponse.title),
          duration: prevResponse.duration,
          video_id: prevResponse.video_id
        }
      ]
    });

    const widgetLayout = widget({
      title: prevResponse.title,
      duration: prevResponse.duration_format,
      video_id: prevResponse.video_id
    });

    $('#lc-video-feed')
      .append(`<li class="lc-video-feed__draggable">${widgetLayout}</li>`)
      .find('.lc-widget__header:last')
      .click(widgetTrigger);

    $inputVideoLink.val('');
    $videoPlayer.hide('fast');
    MicroModal.close('lc-video-feed-form');
  });

  MicroModal.init({
    onShow() {
      // wait until the fadeIn is over
      setTimeout(() => $inputVideoLink.focus(), 100);
    },
    onClose() {
      $inputVideoLink.val('');
      $videoPlayer.hide('fast');
      spinner.stop($container);
    },
    awaitCloseAnimation: true
  });

  $('#lc-video-feed__open-form').click(() => {
    MicroModal.show('lc-video-feed-form', {
      awaitCloseAnimation: true
    });
  });

  $('#lc-video-feed-form button[data-micromodal-close]').click(event => {
    event.preventDefault();
    MicroModal.close('lc-video-feed-form');
  });
}
