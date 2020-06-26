import React from 'react';
import './App.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Header from './Components/Header';
import Board from './Components/Board';

class App extends React.Component {
  state = {
    betPlaced: false,
    balance: 20,
    betValue: 0,
  };

  render() {
    const { balance, betValue, betPlaced } = this.state;
    return (
      <div className="App">
        <Header />
        <DndProvider backend={HTML5Backend}>
          <Board
            betPlaced={betPlaced}
            handleBet={this.handleBet}
            updateBet={this.updateBet}
            updateBalance={this.updateBalance}
            betValue={betValue}
            newGame={this.newGame}
          />
        </DndProvider>
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

  updateBet = (value) => {
    const betValue = this.state.betValue + value;
    this.setState({ betValue });
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
