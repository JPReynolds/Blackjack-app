import React, { Component } from 'react';
import DealerHand from '../Components/DealerHand';

export default class Dealer extends Component {
  state = {
    dealersHand: [],
    dealerScore: 0,
    cardsDealt: false,
  };
  render() {
    const { stick, playerHand, playerScore } = this.props;
    const { dealersHand, dealerScore } = this.state;

    return (
      <div>
        <p className="score">{dealerScore}</p>
        <DealerHand
          hand={dealersHand}
          stick={stick}
          deal={this.dealCardsDealer}
          dealerScore={dealerScore}
          playerScore={playerScore}
          playerHand={playerHand}
          newGame={this.props.newGame}
          resetDealer={this.resetDealer}
          cardsDealt={this.state.cardsDealt}
        />
      </div>
    );
  }
  dealCardsDealer = () => {
    const cards = [
      // { value: 1, suit: 'H' },
      { value: 2, suit: 'H' },
      { value: 3, suit: 'H' },
      { value: 4, suit: 'H' },
      { value: 5, suit: 'H' },
      { value: 6, suit: 'H' },
      { value: 7, suit: 'H' },
      { value: 8, suit: 'H' },
      { value: 9, suit: 'H' },
      { value: 10, suit: 'S' },
      // { value: 1, suit: 'S' },
      { value: 2, suit: 'S' },
      { value: 3, suit: 'S' },
      { value: 4, suit: 'S' },
      { value: 5, suit: 'S' },
      { value: 6, suit: 'S' },
      { value: 7, suit: 'S' },
      { value: 8, suit: 'S' },
      { value: 9, suit: 'S' },
      { value: 10, suit: 'S' },
      // { value: 1, suit: 'D' },
      { value: 2, suit: 'D' },
      { value: 3, suit: 'D' },
      { value: 4, suit: 'D' },
      { value: 5, suit: 'D' },
      { value: 6, suit: 'D' },
      { value: 7, suit: 'D' },
      { value: 8, suit: 'D' },
      { value: 9, suit: 'D' },
      { value: 10, suit: 'D' },
      // { value: 1, suit: 'C' },
      { value: 2, suit: 'C' },
      { value: 3, suit: 'C' },
      { value: 4, suit: 'C' },
      { value: 5, suit: 'C' },
      { value: 6, suit: 'C' },
      { value: 7, suit: 'C' },
      { value: 8, suit: 'C' },
      { value: 9, suit: 'C' },
      { value: 10, suit: 'C' },
    ];

    if (this.props.playerHand.length === 2 && this.props.stick === true) {
      const dealerCard = cards[Math.floor(Math.random() * cards.length)];
      const dealerScore = this.state.dealerScore + dealerCard.value;
      return this.setState({
        dealersHand: [...this.state.dealersHand, dealerCard],
        dealerScore,
      });
    }

    if (this.props.playerHand.length === 2) {
      const dealerCardOne = cards[Math.floor(Math.random() * cards.length)];
      const dealerCardTwo = cards[Math.floor(Math.random() * cards.length)];
      const dealersHand = [dealerCardOne, dealerCardTwo];
      const dealerScore = dealerCardOne.value + dealerCardTwo.value;
      this.setState({ dealersHand, dealerScore, cardsDealt: true });
    } else {
      const dealerCard = cards[Math.floor(Math.random() * cards.length)];
      const dealerScore = this.state.dealerScore + dealerCard.value;
      this.setState({
        dealersHand: [...this.state.dealersHand, dealerCard],
        dealerScore,
      });
    }
  };

  resetDealer = () => {
    this.setState({ dealersHand: [], dealerScore: 0, cardsDealt: false });
  };
}
