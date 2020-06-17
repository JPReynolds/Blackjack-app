import React, { useEffect } from 'react';
import Winner from './Winner';
import SetUp from './SetUp';

const DealerHand = (props) => {
  useEffect(() => {
    const interval = setTimeout(() => {
      props.deal();
    }, 2000);
    return () => clearTimeout(interval);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      if (
        (props.stick === true || props.playerScore > 21) &&
        props.dealerScore < 17
      ) {
        return props.deal();
      }
    }, 8000);
    return () => clearInterval(t);
  });

  return (
    <div>
      {props.cardsDealt === true &&
        props.hand.map((card) => {
          return (
            <img
              src={require(`../images/${
                card.value.toString() + card.suit
              }.jpg`)}
              alt="card"
              className="card"
            />
          );
        })}
      {props.cardsDealt === false && <SetUp />}

      <Winner
        dealerScore={props.dealerScore}
        playerScore={props.playerScore}
        stick={props.stick}
        newGame={props.newGame}
        resetDealer={props.resetDealer}
      />
    </div>
  );
};

export default DealerHand;
