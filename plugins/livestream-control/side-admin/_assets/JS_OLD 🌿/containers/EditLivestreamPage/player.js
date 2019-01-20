import axios from 'axios';
import { constants } from '../../utils';

export function createPlayer(container, video_id) {
  return renderReactPlayer(container, {
    url: `https://www.youtube.com/watch?v=${video_id}`,
    playing: false,
    width: '100%',
    height: 'auto'
  });
}

export function getYouTubeAPI(id) {
  return axios.get('https://www.googleapis.com/youtube/v3/videos', {
    params: { id, part: 'snippet,contentDetails,statistics', key: constants.YOUTUBE_API_KEY }
  });
}

function toHHMMSS(duration) {
  const sec_num = parseInt(duration, 10); // don't forget the second param

  let hours = Math.floor(sec_num / 3600);
  let minutes = Math.floor((sec_num - hours * 3600) / 60);
  let seconds = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = '0' + hours;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  return hours + ':' + minutes + ':' + seconds;
}

export function formatYouTubeDuration(string) {
  let match = string.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  match = match.slice(1).map(x => {
    if (x != null) return x.replace(/\D/, '');
  });

  const hours = parseInt(match[0]) || 0;
  const minutes = parseInt(match[1]) || 0;
  const seconds = parseInt(match[2]) || 0;

  return toHHMMSS(hours * 3600 + minutes * 60 + seconds);
}
