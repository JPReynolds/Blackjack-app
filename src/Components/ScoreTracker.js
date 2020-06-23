import React from 'react';

const ScoreTracker = (props) => {
  return (
    <div>
      <p className="score">{playerScore}</p>
      <p className="score">{dealerScore}</p>
    </div>
  );
};

export default ScoreTracker;
