import React, { Component } from 'react';
import Winner from './Winner';

class DealerHand extends Component {
  componentDidMount() {
    this.props.deal();
  }
  componentDidUpdate() {
    if (this.props.dealerScore < 17) {
      this.props.deal();
    }
  }
  render() {
    return (
      <div>
        {this.props.hand.map((card) => {
          return (
            <img
              src={require(`../images/${
                card.value.toString() + card.suit
              }.jpg`)}
              alt="card"
              className="card"
            />
          );
        })}
        <Winner
          dealerScore={this.props.dealerScore}
          playerScore={this.props.playerScore}
        />
      </div>
    );
  }
}

export default DealerHand;
