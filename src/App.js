import React from 'react';
import './App.css';
import StartGame from './Components/StartGame';
import facedowncard from './images/facedowncard.png';
import Player from './Components/Player';

class App extends React.Component {
  state = {
    dealersHand: [{ value: null, img: facedowncard }],
    playersHand: [],
    cardsDealt: false,
  };

  render() {
    console.log(this.state.playersHand);
    return (
      <div className="App">
        <header className="App-header">
          <h1>BLACKJACK</h1>
        </header>
        <StartGame
          dealersHand={this.state.dealersHand}
          playersHand={this.state.playersHand}
          dealCards={this.dealCards}
        />
        {this.state.cardsDealt === true && (
          <Player hand={this.state.playersHand} dealCards={this.dealCards} />
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
      this.setState({ playersHand: newPlayersHand, cardsDealt: true });
    } else {
      const newPlayersHand = [
        ...this.state.playersHand,
        selectedCardOne,
        selectedCardTwo,
      ];
      this.setState({ playersHand: newPlayersHand, cardsDealt: true });
    }
  };
}

export default App;
