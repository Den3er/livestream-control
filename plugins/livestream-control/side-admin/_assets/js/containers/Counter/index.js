import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { increment, incrementAsync, decrement, decrementAsync, getFakePosts } from './actions';
import { countSelector } from './selectors';

function Counter({
  count,
  onIncrement,
  onIncrementAsync,
  onDecrement,
  onDecrementAsync,
  onGetFakePosts
}) {
  return (
    <div>
      <h3>
        <span style={{ marginRight: '5px' }}>Counter</span>
        <code style={{ fontSize: '24px' }}>{count}</code>
      </h3>

      <div>
        <button type="button" onClick={onDecrement}>
          -
        </button>

        <button type="button" onClick={onIncrement} style={{ marginLeft: '5px' }}>
          +
        </button>
      </div>

      <h3>Async</h3>

      <div>
        <button type="button" onClick={onDecrementAsync}>
          -
        </button>

        <button type="button" onClick={onIncrementAsync} style={{ marginLeft: '5px' }}>
          +
        </button>
      </div>

      <h3>Async Request</h3>

      <div>
        <button type="button" onClick={onGetFakePosts}>
          Get Fake Posts
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
  onIncrementAsync: incrementAsync,
  onDecrement: decrement,
  onDecrementAsync: decrementAsync,
  onGetFakePosts: getFakePosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
