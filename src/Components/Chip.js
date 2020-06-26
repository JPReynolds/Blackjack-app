import React, { Component } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../ItemTypes';

const Chip = ({ name, value, handleDrop }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: ItemTypes.CHIP },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        return handleDrop(value);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.4 : 1;

  return (
    <img
      src={require(`../images/${name}chip.png`)}
      alt="blue chip"
      className="chip"
      ref={drag}
      style={{ opacity }}
    />
  );
};

export default Chip;
