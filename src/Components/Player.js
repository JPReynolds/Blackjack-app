import React, { Component } from 'react';
import StickOrTwist from './StickOrTwist';

class Player extends Component {
  state = {
    dealNewCard: false,
  };
  render() {
    const { dealCards, stick, value } = this.props;
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
        <StickOrTwist dealCards={dealCards} stick={stick} />
        <p className="score">{value}</p>
      </div>
    );
  }
}

export default Player;
