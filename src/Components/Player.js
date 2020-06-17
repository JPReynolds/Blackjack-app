import React, { Component } from 'react';
import StickOrTwist from './StickOrTwist';
import SetUp from './SetUp';

class Player extends Component {
  state = {
    dealNewCard: false,
  };

  componentDidMount() {
    const deal = setTimeout(() => {
      this.props.dealCards();
    }, 2000);
    return () => clearTimeout(deal);
  }

  render() {
    const { dealCards, stick, value } = this.props;
    return (
      <div>
        {this.props.playerCardsDealt === true &&
          this.props.hand.map((card) => {
            return card.hasOwnProperty('face') ? (
              <img
                src={require(`../images/${card.face + card.suit}.jpg`)}
                alt="card"
                className="card"
              />
            ) : (
              <img
                src={require(`../images/${
                  card.value.toString() + card.suit
                }.jpg`)}
                alt="card"
                className="card"
              />
            );
          })}
        {this.props.playerCardsDealt === false && <SetUp />}
        <StickOrTwist dealCards={dealCards} stick={stick} />
        <p className="score">{value}</p>
      </div>
    );
  }
}

export default Player;
