import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import Counter from './containers/Counter';

const renderDOM = () => {
  const MOUNT_NODE = {
    streamFeed: document.querySelector('#lc-vods-container .acf-input')
  };

  if (MOUNT_NODE.streamFeed) {
    ReactDOM.render(
      <Provider store={store}>
        <Counter />
      </Provider>,
      MOUNT_NODE.streamFeed
    );
  }
};

renderDOM();
