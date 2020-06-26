import React, { useEffect } from 'react';
import Winner from './Winner';
import SetUp from './SetUp';

const DealerHand = (props) => {
  const {
    playerScore,
    dealerScore,
    cardsDealt,
    deal,
    stick,
    resetDealer,
    hand,
    newGame,
  } = props;

  useEffect(() => {
    const interval = setTimeout(() => {
      return deal();
    }, 4000);
    return () => clearTimeout(interval);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      if ((stick === true || playerScore > 21) && dealerScore < 17) {
        return deal();
      }
    }, 2000);
    return () => clearInterval(t);
  });

  return (
    <div className="dealerHand">
      {cardsDealt === true &&
        hand.map((card, index) => {
          return card.hasOwnProperty('face') ? (
            <img
              src={require(`../images/${card.face + card.suit}.jpg`)}
              alt="card"
              className="card"
              key={index}
            />
          ) : (
            <img
              src={require(`../images/${
                card.value.toString() + card.suit
              }.jpg`)}
              alt="card"
              className="card"
              key={index}
            />
          );
        })}
      {cardsDealt === false && <SetUp />}

      <Winner
        dealerScore={dealerScore}
        playerScore={playerScore}
        stick={stick}
        newGame={newGame}
        resetDealer={resetDealer}
        updateBalance={props.updateBalance}
        setWinner={props.setWinner}
      />
    </div>
  );
};

export default DealerHand;
