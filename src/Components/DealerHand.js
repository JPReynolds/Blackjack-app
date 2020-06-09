import React, { Component } from 'react';

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
        {this.props.dealerScore > 17 &&
          this.props.dealerScore > this.props.playerScore && <p>Dealer wins</p>}
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
      </div>
    );
  }
}

export default DealerHand;
