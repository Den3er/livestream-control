import React, { Component } from 'react';
// import { Provider } from 'react-redux';
// import store from '../../store/configureStore';
import Loader from '../../components/Loader';

export default class AsyncState extends Component {
  componentDidMount() {
    const { onFetchState } = this.props;
    onFetchState();
  }

  render() {
    const { isFetching, children } = this.props;
    const LoaderComponent = <Loader width={40} height={40} />;

    return isFetching ? LoaderComponent : children;
  }
}
