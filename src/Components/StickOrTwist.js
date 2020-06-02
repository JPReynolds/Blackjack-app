import React from 'react';

const StickOrTwist = (props) => {
  const onClickStick = () => {
    return props.stick();
  };

  return (
    <div>
      <button onClick={onClickStick}>STICK</button>
      <button onClick={props.dealCards}>TWIST</button>
    </div>
  );
};

export default StickOrTwist;
