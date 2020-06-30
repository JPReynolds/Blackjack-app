import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';

const Winner = (props) => {
  const { playerScore, dealerScore, stick } = props;

  const [winner, setWinner] = useState('');

  useEffect(() => {
    if (
      (stick === true && dealerScore > 21 && playerScore <= 21) ||
      (stick === true && dealerScore >= 17 && playerScore > dealerScore)
    ) {
      setWinner('PLAYER');
    }
    if (
      (stick === true &&
        dealerScore >= 17 &&
        dealerScore > playerScore &&
        dealerScore <= 21) ||
      (dealerScore >= 17 && dealerScore <= 21 && playerScore > 21)
    ) {
      setWinner('DEALER');
    }
    if (
      (playerScore > 21 && dealerScore > 21) ||
      (stick === true && dealerScore >= 17 && playerScore === dealerScore)
    ) {
      setWinner('NO ONE');
    }
  }, [stick, dealerScore, playerScore]);

  return (
    <div>
      {winner === '' ? (
        <div></div>
      ) : (
        <div>
          <p>{winner} WINS</p>
          <Link to="/">
            <button
              className="btn"
              onClick={() => {
                props.resetDealer();
                props.resetBetValue();
                props.resetPlayer();
                winner === 'PLAYER' && props.updateBalance();
              }}
            >
              PLACE BETS
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Winner;
