import React from 'react';

const StickOrTwist = (props) => {
  return (
    <div>
      <button onClick={props.stick}>STICK</button>
      <button onClick={props.dealCards}>TWIST</button>
    </div>
  );
};

export default StickOrTwist;
