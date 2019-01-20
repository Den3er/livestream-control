import React, { Component } from 'react';
import { arrayMove } from 'react-sortable-hoc';
import SortableList from '../components/SortableList';
import LivePlayer from '../components/LivePlayer';
import { store } from '../utils';

class EditVods extends Component {
  state = {
    items: store.get('vods')
  };

  componentDidUpdate() {
    store.set('vods', this.state.items);
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(prevState => ({
      items: arrayMove(prevState.items, oldIndex, newIndex)
    }));
  };

  createWidget = props => (
    <div>
      <LivePlayer video_id={props.video_id} />
    </div>
  );

  render() {
    return (
      <SortableList
        items={this.state.items}
        onSortEnd={this.onSortEnd}
        createWidget={this.createWidget}
      />
    );
  }
}

export default EditVods;
