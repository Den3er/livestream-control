import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchState } from './actions';
import { isFetchingSelector } from './selectors';
import Loader from '../../components/Loader';

class AsyncState extends Component {
  componentDidMount() {
    const { onFetchState } = this.props;
    onFetchState();
  }

  // FetchStore

  render() {
    const { isFetching, children } = this.props;
    const LoaderComponent = <Loader width={40} height={40} />;

    return isFetching ? LoaderComponent : children;
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: isFetchingSelector
});

const mapDispatchToProps = {
  onFetchState: fetchState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AsyncState);
