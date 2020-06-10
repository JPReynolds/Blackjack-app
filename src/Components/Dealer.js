import React, { Component } from 'react';
import DealerHand from '../Components/DealerHand';
import SetUp from '../Components/SetUp';

export default class Dealer extends Component {
  render() {
    return (
      <div>
        <p className="score">{this.props.dealerScore}</p>
        {this.props.startGame === true ? (
          <DealerHand
            hand={this.props.hand}
            stick={this.props.stick}
            deal={this.props.dealCardsDealer}
            dealerScore={this.props.dealerScore}
            playerScore={this.props.playerScore}
            playerHand={this.props.playerHand}
          />
        ) : (
          <SetUp />
        )}
      </div>
    );
  }
}
