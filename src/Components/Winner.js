import React, { Component } from 'react';

class Winner extends Component {
  render() {
    return <div></div>;
  }

  winnerDecider = () => {
    //player wins
    //playerScore > DealerScore && playerScore <= 21
    //dealer wins
    //dealerScore > playerScore && dealerScore <= 21
    //draw
    //dealerScore > 21 && playerScore > 21
  };
}

export default Winner;
