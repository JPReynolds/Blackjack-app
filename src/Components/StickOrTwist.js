import React from 'react';

const StickOrTwist = (props) => {
  const onClickStick = () => {
    return props.stick();
  };

  return (
    <div>
      <button className="btn" onClick={onClickStick}>
        STICK
      </button>
      <button className="btn" onClick={props.dealCards}>
        TWIST
      </button>
    </div>
  );
};

export default StickOrTwist;
