import React, { Component } from 'react';
import Winner from './Winner';
import SetUp from './SetUp';

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
    const { stick, playerScore, newGame } = this.props;
    const { dealersHand, dealerScore, cardsDealt } = this.state;
    return (
      <div className="dealerHand">
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
          newGame={newGame}
          resetDealer={this.props.resetDealer}
          updateBalance={this.props.updateBalance}
          setWinner={this.props.setWinner}
        />
      </div>
    );
  }
  dealCardsDealer = () => {
    const cards = [
      { value: 1, suit: 'H' },
      { value: 2, suit: 'H' },
      { value: 3, suit: 'H' },
      { value: 4, suit: 'H' },
      { value: 5, suit: 'H' },
      { value: 6, suit: 'H' },
      { value: 7, suit: 'H' },
      { value: 8, suit: 'H' },
      { value: 9, suit: 'H' },
      { value: 10, suit: 'H' },
      { value: 10, suit: 'H', face: 'J' },
      { value: 10, suit: 'H', face: 'Q' },
      { value: 10, suit: 'H', face: 'K' },
      { value: 1, suit: 'S' },
      { value: 2, suit: 'S' },
      { value: 3, suit: 'S' },
      { value: 4, suit: 'S' },
      { value: 5, suit: 'S' },
      { value: 6, suit: 'S' },
      { value: 7, suit: 'S' },
      { value: 8, suit: 'S' },
      { value: 9, suit: 'S' },
      { value: 10, suit: 'S' },
      { value: 10, suit: 'S', face: 'J' },
      { value: 10, suit: 'S', face: 'Q' },
      { value: 10, suit: 'S', face: 'K' },
      { value: 1, suit: 'D' },
      { value: 2, suit: 'D' },
      { value: 3, suit: 'D' },
      { value: 4, suit: 'D' },
      { value: 5, suit: 'D' },
      { value: 6, suit: 'D' },
      { value: 7, suit: 'D' },
      { value: 8, suit: 'D' },
      { value: 9, suit: 'D' },
      { value: 10, suit: 'D' },
      { value: 10, suit: 'D', face: 'J' },
      { value: 10, suit: 'D', face: 'Q' },
      { value: 10, suit: 'D', face: 'K' },
      { value: 1, suit: 'C' },
      { value: 2, suit: 'C' },
      { value: 3, suit: 'C' },
      { value: 4, suit: 'C' },
      { value: 5, suit: 'C' },
      { value: 6, suit: 'C' },
      { value: 7, suit: 'C' },
      { value: 8, suit: 'C' },
      { value: 9, suit: 'C' },
      { value: 10, suit: 'C' },
      { value: 10, suit: 'C', face: 'J' },
      { value: 10, suit: 'C', face: 'Q' },
      { value: 10, suit: 'C', face: 'K' },
    ];

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

  resetDealer = () => {
    this.setState({ dealersHand: [], dealerScore: 0, cardsDealt: false });
  };
}
