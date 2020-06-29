import React, { Component } from 'react';
import StartGame from '../Components/StartGame';
import Player from '../Components/Player';
import Dealer from '../Components/Dealer';
import PlaceBets from './PlaceBets';
class Board extends Component {
  state = {
    startGame: false,
    items: [
      {
        value: 10,
        name: 'blue',
      },
      {
        value: 5,
        name: 'red',
      },
      {
        value: 1,
        name: 'green',
      },
    ],
    playersHand: [],
    playerScore: 0,
    playerCardsDealt: false,
    stick: false,
    won: false,
  };

  render() {
    const {
      betPlaced,
      handleBet,
      updateBet,
      newGame,
      updateBalance,
      betValue,
    } = this.props;

    const {
      startGame,
      items,
      playersHand,
      playerScore,
      playerCardsDealt,
      stick,
    } = this.state;

    return (
      <div className="board">
        {startGame === false && betPlaced === false && (
          <PlaceBets
            handleBet={handleBet}
            updateBet={updateBet}
            items={items}
          />
        )}
        {startGame === false && betPlaced === true && (
          <StartGame
            dealCards={this.dealCards}
            beginGame={this.beginGame}
            betValue={betValue}
          />
        )}
        {startGame === true && (
          <Dealer
            stick={stick}
            playerScore={playerScore}
            playerHand={playersHand}
            startGame={startGame}
            newGame={newGame}
            updateBalance={updateBalance}
            setWinner={this.setWinner}
          />
        )}

        {startGame === true && (
          <Player
            hand={playersHand}
            dealCards={this.dealCards}
            stickPressed={this.stickPressed}
            value={playerScore}
            playerCardsDealt={playerCardsDealt}
            playerScore={playerScore}
            stick={stick}
          />
        )}
      </div>
    );
  }

  setWinner = () => {
    this.setState({ won: true });
  };

  beginGame = () => {
    this.setState({
      startGame: true,
    });
  };

  dealCards = () => {
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
    const selectedCardOne = cards[Math.floor(Math.random() * cards.length)];
    const selectedCardTwo = cards[Math.floor(Math.random() * cards.length)];

    if (this.state.playersHand.length >= 2) {
      const newPlayersHand = [...this.state.playersHand, selectedCardOne];
      const playerScore = this.state.playerScore + selectedCardOne.value;
      this.setState({
        playersHand: newPlayersHand,
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
        playerScore: firstScore,
        playerCardsDealt: true,
      });
    }
  };

  stickPressed = () => {
    this.setState({ stick: true });
  };
}

export default Board;
