import React from 'react';

const StickOrTwist = (props) => {
  return (
    <div>
      <button onClick={props.dealCards}>STICK</button>
      <button onClick={props.twist}>TWIST</button>
    </div>
  );
};

export default StickOrTwist;
