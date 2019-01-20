import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import EditVideoFeed from './containers/EditVideoFeed';

const renderDOM = () => {
  const MOUNT_NODE = {
    editVideoFeed: document.querySelector('#lc-vods-container .acf-input')
  };

  if (MOUNT_NODE.editVideoFeed) {
    ReactDOM.render(
      <Provider store={store}>
        <EditVideoFeed />
      </Provider>,
      MOUNT_NODE.editVideoFeed
    );
  }
};

renderDOM();
