import React from 'react';
import './App.css';
import StartGame from './Components/StartGame';
import Player from './Components/Player';
import Dealer from './Components/Dealer';

class App extends React.Component {
  state = {
    dealersHand: [],
    playersHand: [],
    playerScore: 0,
    dealerScore: 0,
    cardsDealt: false,
    stick: false,
  };

  render() {
    const {
      stick,
      playerScore,
      dealersHand,
      playersHand,
      cardsDealt,
      dealerScore,
    } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>BLACKJACK</h1>
        </header>
        <Dealer
          stick={stick}
          hand={dealersHand}
          dealCardsDealer={this.dealCardsDealer}
          playerScore={playerScore}
          dealerScore={dealerScore}
        />
        <StartGame
          dealersHand={dealersHand}
          playersHand={playersHand}
          dealCards={this.dealCards}
        />
        {cardsDealt === true && (
          <Player
            hand={playersHand}
            dealCards={this.dealCards}
            stick={this.stick}
            value={playerScore}
          />
        )}
      </div>
    );
  }
  dealCards = () => {
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
    const selectedCardOne = cards[Math.floor(Math.random() * cards.length)];
    const selectedCardTwo = cards[Math.floor(Math.random() * cards.length)];

    if (this.state.playersHand.length >= 2) {
      const newPlayersHand = [...this.state.playersHand, selectedCardOne];
      const playerScore = this.state.playerScore + selectedCardOne.value;
      this.setState({
        playersHand: newPlayersHand,
        cardsDealt: true,
        playerScore,
      });
    } else {
      const newPlayersHand = [
        ...this.state.playersHand,
        selectedCardOne,
        selectedCardTwo,
      ];
      const firstScore = selectedCardOne.value + selectedCardTwo.value;
      this.setState({
        playersHand: newPlayersHand,
        cardsDealt: true,
        playerScore: firstScore,
      });
    }
  };

  stick = () => {
    this.setState({ stick: true });
  };

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

    if (this.state.dealersHand.length === 0) {
      const dealerCardOne = cards[Math.floor(Math.random() * cards.length)];
      const dealerCardTwo = cards[Math.floor(Math.random() * cards.length)];
      const dealersHand = [dealerCardOne, dealerCardTwo];
      const dealerScore = dealerCardOne.value + dealerCardTwo.value;
      this.setState({ dealersHand, dealerScore });
    }

    if (this.state.dealerScore < 17 && this.state.dealersHand.length > 0) {
      const dealerCardOne = cards[Math.floor(Math.random() * cards.length)];
      const dealerScore = this.state.dealerScore + dealerCardOne.value;
      setTimeout(() => {
        this.setState({
          dealersHand: [...this.state.dealersHand, dealerCardOne],
          dealerScore,
        });
      }, 3000);
    }
    // if (this.state.dealerScore > 17) {
    //   this.setState({ stick: false });
    // }
  };
}

export default App;
