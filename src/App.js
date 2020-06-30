import React from 'react';
import './App.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Header from './Components/Header';
import Board from './Components/Board';
import PlaceBets from './Components/PlaceBets';
import StartGame from './Components/StartGame';
import { Router } from '@reach/router';

class App extends React.Component {
  state = {
    balance: 20,
    betValue: 0,
    betPlaced: false,
  };

  render() {
    const { betValue, balance } = this.state;

    return (
      <div className="App">
        <Header />
        <div className="game">
          <DndProvider backend={HTML5Backend}>
            <Router>
              <PlaceBets
                path="/"
                handleBet={this.handleBet}
                updateBet={this.updateBet}
              />
              <StartGame path="/startgame" betValue={betValue} />
              <Board
                path="/game"
                updateBalance={this.updateBalance}
                resetBetValue={this.resetBetValue}
              />
            </Router>
          </DndProvider>
        </div>
        <div className="bank">
          <div className="bank__balance">
            <p className="bank--header">YOUR BALANCE</p>
            <p className="bank--money">£{balance}</p>
          </div>
          <div className="bank__totalBet">
            <p className="bank--header">TOTAL BET</p>
            <p className="bank--money">£{betValue}</p>
          </div>
        </div>
        <footer>created by jordan</footer>
      </div>
    );
  }
  updateBet = (value) => {
    const betValue = this.state.betValue + value;
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

  resetBetValue = () => {
    this.setState({ betValue: 0, betPlaced: false });
  };
}

export default App;
