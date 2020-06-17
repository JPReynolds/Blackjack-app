import React from 'react';

const Winner = (props) => {
  const { playerScore, dealerScore, stick } = props;

  const resetGame = () => {
    props.newGame();
    props.resetDealer();
  };

  if (
    (stick === true && dealerScore > 21 && playerScore <= 21) ||
    (stick === true && dealerScore >= 17 && playerScore > dealerScore)
  ) {
    return (
      <div>
        <p>PLAYER WINS</p>
        <button onClick={resetGame}>START GAME</button>
      </div>
    );
  }
  if (
    (stick === true && dealerScore >= 17 && dealerScore > playerScore) ||
    (dealerScore >= 17 && dealerScore <= 21 && playerScore > 21)
  ) {
    return (
      <div>
        <p>DEALER WINS</p>
        <button onClick={resetGame}>START GAME</button>
      </div>
    );
  }
  if (
    (playerScore > 21 && dealerScore > 21) ||
    (stick === true && dealerScore >= 17 && playerScore === dealerScore)
  ) {
    return (
      <div>
        <p>DRAW</p>
        <button onClick={resetGame}>START GAME</button>
      </div>
    );
  }
  return <div>£5</div>;
};

export default Winner;
