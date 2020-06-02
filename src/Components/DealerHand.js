import React from 'react';

const DealerHand = (props) => {
  return (
    <div>
      {props.hand.map((card) => {
        return (
          <img
            src={require(`../images/${card.value.toString() + card.suit}.jpg`)}
            alt="card"
            className="card"
          />
        );
      })}
    </div>
  );
};

export default DealerHand;
