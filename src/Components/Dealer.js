import React, { Component } from 'react';
import DealerHand from '../Components/DealerHand';
import SetUp from '../Components/SetUp';

export default class Dealer extends Component {
  render() {
    return (
      <div>
        <p>{this.props.dealerScore}</p>
        {this.props.playerScore >= 21 || this.props.stick === true ? (
          <DealerHand
            hand={this.props.hand}
            stick={this.props.stick}
            deal={this.props.dealCardsDealer}
            dealerScore={this.props.dealerScore}
            playerScore={this.props.playerScore}
          />
        ) : (
          <SetUp />
        )}
      </div>
    );
  }
}
