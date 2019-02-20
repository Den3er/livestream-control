import { Sortable } from '@shopify/draggable';
import { updateStore } from '../../utils';

export default function() {
  const element = document.getElementById('lc-video-feed');
  const sortable = new Sortable(element, {
    draggable: '.lc-video-feed__draggable',
    delay: 200,
    mirror: {
      appendTo: element,
      constrainDimensions: true
    }
  });

  sortable.on('sortable:stop', event => {
    const store = window.lc_store;
    const temporary = store.vods[event.data.oldIndex];

    store.vods.splice(event.data.oldIndex, 1);
    store.vods.splice(event.data.newIndex, 0, temporary);

    updateStore({
      vods: store.vods
    });
  });
}
