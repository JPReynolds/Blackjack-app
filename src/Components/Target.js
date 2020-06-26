import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../ItemTypes';
const style = {
  height: '12rem',
  width: '12rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
};

const Target = () => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.CHIP,
    drop: () => ({ name: 'Dustbin' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;
  let backgroundColor = '#222';
  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }

  return (
    <div className="target" ref={drop} style={{ ...style, backgroundColor }}>
      {isActive ? 'Release to drop' : 'Drag a box here'}
    </div>
  );
};

export default Target;
