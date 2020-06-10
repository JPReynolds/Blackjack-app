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
        {this.props.playerHand.length > 2 &&
          this.props.hand.map((card) => {
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
        {this.props.playerHand.length === 2 && (
          <img
            src={require(`../images/${
              this.props.playerHand[0].value.toString() +
              this.props.playerHand[0].suit
            }.jpg`)}
            alt="card"
            className="card"
          />
        )}
        {this.props.playerHand.length === 2 && (
          <img
            src={require(`../images/${
              this.props.playerHand[1].value.toString() +
              this.props.playerHand[1].suit
            }.jpg`)}
            alt="card"
            className="card"
          />
        )}
        <Winner
          dealerScore={this.props.dealerScore}
          playerScore={this.props.playerScore}
        />
      </div>
    );
  }
}

export default DealerHand;
