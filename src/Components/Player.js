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
    const {
      dealCards,
      stick,
      playerCardsDealt,
      hand,
      playerScore,
    } = this.props;
    return (
      <div className="player">
        <div>
          {playerCardsDealt === true &&
            hand.map((card) => {
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
        </div>
        {playerCardsDealt === false && <SetUp />}
        <p className="score">{playerScore}</p>
        <StickOrTwist dealCards={dealCards} stick={stick} />
      </div>
    );
  }
}

export default Player;
