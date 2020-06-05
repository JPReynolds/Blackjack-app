import React, { Component } from 'react';
import DealerHand from '../Components/DealerHand';
import SetUp from '../Components/SetUp';

export default class Dealer extends Component {
  render() {
    return (
      <div>
        {this.props.playerScore >= 21 ? (
          <DealerHand
            hand={this.props.hand}
            stick={this.props.stick}
            deal={this.props.dealCardsDealer}
            dealerScore={this.props.dealerScore}
          />
        ) : (
          <SetUp />
        )}
      </div>
    );
  }
}
