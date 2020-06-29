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
    return (
      <div className="App">
        <Header />
        <DndProvider backend={HTML5Backend}>
          <Router>
            <PlaceBets
              path="/"
              handleBet={this.handleBet}
              updateBet={this.updateBet}
            />
            <StartGame path="/startgame" betValue={this.state.betValue} />
            <Board path="/game" updateBalance={this.updateBalance} />
          </Router>
        </DndProvider>
        <div className="balance">
          <p className="money--header">YOUR BALANCE</p>
          <p className="money">£{this.state.balance}</p>
        </div>
        <div className="totalBet">
          <p className="money--header">TOTAL BET</p>
          <p className="money">£{this.state.betValue}</p>
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
}

export default App;
