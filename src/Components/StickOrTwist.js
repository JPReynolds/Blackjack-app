import React from 'react';

const StickOrTwist = (props) => {
  return (
    <div>
      <button className="btn" onClick={() => props.stick()}>
        STICK
      </button>
      <button className="btn" onClick={props.dealCards}>
        TWIST
      </button>
    </div>
  );
};

export default StickOrTwist;
