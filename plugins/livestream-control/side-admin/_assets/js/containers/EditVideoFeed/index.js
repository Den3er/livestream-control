/* eslint-disable */

import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increment = event => {
    event.preventDefault();
    this.props.dispatch({ type: 'INCREMENT' });
  };

  decrement = event => {
    event.preventDefault();
    this.props.dispatch({ type: 'DECREMENT' });
  };

  render() {
    console.log('_', this.props);

    return (
      <div>
        <h2>Counter</h2>

        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return {
    ola: 'asfasfasfasf',
    count: state.EditVideoFeed.count
  };
}

export default connect(mapStateToProps)(Counter);
