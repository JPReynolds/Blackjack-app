import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

const itemSource = {
  beginDrag(props) {
    console.log('dragging');
    return props.item;
  },
  endDrag(props, monitor, component) {
    // if (!monitor.didDrop()) {
    //   return;
    // }
    return props.handleDrop(props.item.value);
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    collectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
}

class Chip extends Component {
  render() {
    const { isDragging, connectDragSource, item } = this.props;
    const opacity = isDragging ? 0 : 1;
    return connectDragSource(
      <div className="chip" style={{ opacity }}>
        <img
          src={require(`../images/${item.name}chip.png`)}
          alt="blue chip"
          className="chip"
        />
      </div>
    );
  }
}

export default DragSource('chip', itemSource, collect)(Chip);
