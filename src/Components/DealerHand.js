import React, { Component } from 'react';

class DealerHand extends Component {
  componentDidMount() {
    this.props.deal();
  }
  componentDidUpdate(prevProps) {
    console.log(this.props.dealerScore);
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
      </div>
    );
  }
}

export default DealerHand;
