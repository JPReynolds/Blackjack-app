import React, { Component } from 'react';
import Player from '../Components/Player';
import Dealer from '../Components/Dealer';
import { cards } from '../cards';

class Board extends Component {
  state = {
    playersHand: [],
    playerScore: 0,
    playerCardsDealt: false,
    stick: false,
  };

  render() {
    const {
      startGame,
      playersHand,
      playerScore,
      playerCardsDealt,
      stick,
    } = this.state;

    return (
      <div className="board">
        <Dealer
          stick={stick}
          playerScore={playerScore}
          playerHand={playersHand}
          startGame={startGame}
          updateBalance={this.props.updateBalance}
          resetBetValue={this.props.resetBetValue}
          resetPlayer={this.resetPlayer}
        />
        <Player
          hand={playersHand}
          dealCards={this.dealCards}
          stickPressed={this.stickPressed}
          value={playerScore}
          playerCardsDealt={playerCardsDealt}
          playerScore={playerScore}
          stick={stick}
        />
      </div>
    );
  }

  resetPlayer = () => {
    this.setState({
      playersHand: [],
      playerScore: 0,
      playerCardsDealt: false,
      stick: false,
    });
  };

  dealCards = () => {
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
