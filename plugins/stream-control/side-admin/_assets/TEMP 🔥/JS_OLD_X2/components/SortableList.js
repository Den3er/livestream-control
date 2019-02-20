import preact from 'preact';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { uid } from 'react-uid';
import Widget from './Widget';

const SortableItem = SortableElement(props => (
  <Widget title={props.title} meta={props.duration}>
    {props.createWidget(props)}
  </Widget>
));

const SortableList = SortableContainer(props => (
  <ul className="lc-sortable">
    {props.items.map((value, index) => (
      <SortableItem
        createWidget={props.createWidget}
        key={uid(value, index)}
        index={index}
        {...value}
      />
    ))}
  </ul>
));

class Sortable extends preact.Component {
  render() {
    return <SortableList {...this.props} />;
  }
}

export default Sortable;
