import React, { Component } from 'react';

class DealerHand extends Component {
  componentDidMount() {
    this.props.deal();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.dealerScore < 17) {
      this.props.deal();
    }
  }
  render() {
    console.log(this.props.dealerScore);
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
