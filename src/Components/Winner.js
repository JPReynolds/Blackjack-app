import React from 'react';

const Winner = (props) => {
  const { playerScore, dealerScore, stick } = props;
  if (
    playerScore > dealerScore &&
    playerScore <= 21 &&
    dealerScore >= 17 &&
    stick === true
  ) {
    return (
      <div>
        <p>player wins</p>
      </div>
    );
  }
  if (
    (dealerScore > playerScore || playerScore > 21) &&
    dealerScore <= 21 &&
    dealerScore >= 17 &&
    (stick === true || playerScore > 21)
  ) {
    return (
      <div>
        <p>dealer wins</p>
      </div>
    );
  }
  return <div>£5</div>;
};

export default Winner;
