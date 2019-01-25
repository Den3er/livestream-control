import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { increment, decrement } from './actions';
import { countSelector } from './selectors';

function Counter({ count, onIncrement, onDecrement }) {
  return (
    <div>
      <h2>Counter</h2>

      <div>
        <button type="button" onClick={onDecrement}>
          -
        </button>
        <span>{count}</span>
        <button type="button" onClick={onIncrement}>
          +
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  count: countSelector
});

const mapDispatchToProps = {
  onIncrement: increment,
  onDecrement: decrement
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
