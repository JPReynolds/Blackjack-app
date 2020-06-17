import React from 'react';

const Winner = (props) => {
  const { playerScore, dealerScore, stick } = props;
  if (
    (stick === true && dealerScore > 21 && playerScore <= 21) ||
    (stick === true && dealerScore >= 17 && playerScore > dealerScore)
  ) {
    return (
      <div>
        <p>PLAYER WINS</p>
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
      </div>
    );
  }
  return <div>£5</div>;
};

//player sticks , dealer score >= 17, dealer score > player score DEALER WINS
//dealer score >= 17 AND dealer score <= 21, player score > 21 DEALER WINS

// player sticks AND dealer score > 21 AND player score <= 21 PLAYER WINS
// player sticks AND dealer score >= 17 AND dealer score <= 21 AND player score > dealer score PLAYER WINS

// player score > 21 AND dealer score > 21 DRAW
// stick true && dealer score >= 17 && player score = dealer score

export default Winner;
