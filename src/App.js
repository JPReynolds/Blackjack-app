import React from 'react';
import './App.css';
import StartGame from './Components/StartGame';
import Player from './Components/Player';
import Dealer from './Components/Dealer';
import Wallet from './Components/Wallet';

class App extends React.Component {
  state = {
    playersHand: [],
    playerScore: 0,
    stick: false,
    startGame: false,
    betPlaced: false,
    playerCardsDealt: false,
    balance: 20,
    betValue: 0,
  };

  render() {
    const {
      stick,
      playerScore,
      playersHand,
      startGame,
      balance,
      betValue,
      betPlaced,
    } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">J.P Casino</h1>
          <h2>BLACKJACK</h2>
        </header>
        <div className="board">
          {startGame === true && (
            <Dealer
              stick={stick}
              playerScore={playerScore}
              playerHand={playersHand}
              startGame={startGame}
              newGame={this.newGame}
              updateBalance={this.updateBalance}
            />
          )}
          {startGame === false && betPlaced === true && (
            <StartGame
              dealCards={this.dealCards}
              startGame={this.startGame}
              betValue={betValue}
            />
          )}

          {startGame === true && (
            <Player
              hand={playersHand}
              dealCards={this.dealCards}
              stick={this.stick}
              value={playerScore}
              playerCardsDealt={this.state.playerCardsDealt}
              score={playerScore}
            />
          )}
          {startGame === false && betPlaced === false && (
            <Wallet
              balance={balance}
              blue={this.handleClickBlue}
              red={this.handleClickRed}
              green={this.handleClickGreen}
              bet={this.handleBet}
              betValue={betValue}
            />
          )}
        </div>

        <div className="balance">
          <p className="money--header">YOUR BALANCE</p>
          <p>£{balance}</p>
        </div>
        <div className="totalBet">
          <p className="money--header">TOTAL BET</p>
          <p>£{betValue}</p>
        </div>
        <footer>created by jordan</footer>
      </div>
    );
  }

  startGame = () => {
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

  stick = () => {
    this.setState({ stick: true });
  };

  newGame = () => {
    this.setState({
      playersHand: [],
      playerScore: 0,
      stick: false,
      startGame: false,
      playerCardsDealt: false,
      betPlaced: false,
      betValue: 0,
    });
  };

  handleClickBlue = () => {
    const betValue = this.state.betValue + 1;
    this.setState({ betValue });
  };

  handleClickRed = () => {
    const betValue = this.state.betValue + 5;
    this.setState({ betValue });
  };

  handleClickGreen = () => {
    const betValue = this.state.betValue + 10;
    this.setState({ betValue });
  };

  handleBet = () => {
    const balance = this.state.balance - this.state.betValue;
    this.setState({ balance, betPlaced: true });
  };

  updateBalance = () => {
    const winnings = this.state.betValue * 2;
    const balance = winnings + this.state.balance;
    this.setState({ balance });
  };
}

export default App;
