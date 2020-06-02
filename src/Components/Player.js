import React, { Component } from 'react';
import StickOrTwist from './StickOrTwist';

class Player extends Component {
  state = {
    dealNewCard: false,
  };
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
        <StickOrTwist
          dealCards={this.props.dealCards}
          stick={this.props.stick}
        />
        <p>{this.props.value}</p>
      </div>
    );
  }
}

export default Player;
