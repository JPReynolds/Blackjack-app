import React, { useEffect } from 'react';
import Winner from './Winner';

const DealerHand = (props) => {
  useEffect(() => {
    props.deal();
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      if (
        (props.stick === true || props.playerScore > 21) &&
        props.dealerScore < 17
      ) {
        return props.deal();
      }
    }, 2000);
    return () => clearInterval(t);
  });

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

      <Winner
        dealerScore={props.dealerScore}
        playerScore={props.playerScore}
        stick={props.stick}
      />
    </div>
  );
};

export default DealerHand;
