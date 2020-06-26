import React from 'react';
import PlayerWins from './PlayerWins';
import DealerWins from './DealerWins';

const Winner = (props) => {
  const { playerScore, dealerScore, stick, newGame, resetDealer } = props;

  const resetGame = () => {
    newGame();
    resetDealer();
  };

  if (
    (stick === true && dealerScore > 21 && playerScore <= 21) ||
    (stick === true && dealerScore >= 17 && playerScore > dealerScore)
  ) {
    return (
      <PlayerWins
        resetGame={resetGame}
        updateBalance={props.updateBalance}
        setWinner={props.setWinner}
      />
    );
  }
  if (
    (stick === true && dealerScore >= 17 && dealerScore > playerScore) ||
    (dealerScore >= 17 && dealerScore <= 21 && playerScore > 21)
  ) {
    return <DealerWins />;
  }
  if (
    (playerScore > 21 && dealerScore > 21) ||
    (stick === true && dealerScore >= 17 && playerScore === dealerScore)
  ) {
    return (
      <div>
        <p>DRAW</p>
        <button className="btn" onClick={resetGame}>
          PLACE BETS
        </button>
      </div>
    );
  }
  return <div></div>;
};

export default Winner;
