import React from 'react';

const Winner = (props) => {
  const { playerScore, dealerScore } = props;
  if (playerScore > dealerScore && playerScore <= 21) {
    return (
      <div>
        <p>player wins</p>
      </div>
    );
  }
  if (dealerScore > playerScore && dealerScore <= 21) {
    return (
      <div>
        <p>dealer wins</p>
      </div>
    );
  }
  return <div></div>;
};

export default Winner;
