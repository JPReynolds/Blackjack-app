import React, { Component } from 'react';
import Winner from './Winner';
import SetUp from './SetUp';
import { cards } from '../cards';

export default class Dealer extends Component {
  state = {
    dealersHand: [],
    dealerScore: 0,
    cardsDealt: false,
  };

  componentDidMount() {
    const interval = setTimeout(() => {
      this.dealCardsDealer();
    }, 4000);
    return () => clearTimeout(interval);
  }

  componentDidUpdate() {
    const t = setInterval(() => {
      if (
        (this.props.stick === true || this.props.playerScore > 21) &&
        this.state.dealerScore < 17
      ) {
        this.dealCardsDealer();
      }
    }, 8000);
    return () => clearInterval(t);
  }

  render() {
    const {
      stick,
      playerScore,
      updateBalance,
      resetBetValue,
      resetPlayer,
    } = this.props;
    const { dealersHand, dealerScore, cardsDealt } = this.state;
    return (
      <div className="dealer">
        <div className="score">{dealerScore}</div>
        <div className="dealerCards">
          {cardsDealt === true &&
            dealersHand.map((card, index) => {
              return card.hasOwnProperty('face') ? (
                <img
                  src={require(`../images/${card.face + card.suit}.jpg`)}
                  alt="card"
                  className="card"
                  key={index}
                />
              ) : (
                <img
                  src={require(`../images/${
                    card.value.toString() + card.suit
                  }.jpg`)}
                  alt="card"
                  className="card"
                  key={index}
                />
              );
            })}
          {cardsDealt === false && <SetUp />}
        </div>
        <Winner
          dealerScore={dealerScore}
          playerScore={playerScore}
          stick={stick}
          updateBalance={updateBalance}
          resetBetValue={resetBetValue}
          resetDealer={this.resetDealer}
          resetPlayer={resetPlayer}
        />
      </div>
    );
  }

  resetDealer = () => {
    this.setState({ dealersHand: [], dealerScore: 0, cardsDealt: false });
  };

  dealCardsDealer = () => {
    const dealerCardOne = cards[Math.floor(Math.random() * cards.length)];
    const dealerCardTwo = cards[Math.floor(Math.random() * cards.length)];

    if (this.props.playerHand.length === 2 && this.props.stick === true) {
      const dealerScore = this.state.dealerScore + dealerCardOne.value;
      return this.setState({
        dealersHand: [...this.state.dealersHand, dealerCardOne],
        dealerScore,
      });
    }

    if (this.props.playerHand.length === 2) {
      const dealersHand = [dealerCardOne, dealerCardTwo];
      const dealerScore = dealerCardOne.value + dealerCardTwo.value;
      this.setState({ dealersHand, dealerScore, cardsDealt: true });
    } else {
      const dealerScore = this.state.dealerScore + dealerCardOne.value;
      this.setState({
        dealersHand: [...this.state.dealersHand, dealerCardOne],
        dealerScore,
      });
    }
  };
}
