import React, { Component } from 'react';

class PlayerWins extends Component {
  componentDidMount() {
    this.props.updateBalance();
    this.props.setWinner();
  }

  render() {
    return (
      <div>
        <p>PLAYER WINS</p>
        <button className="btn" onClick={this.props.resetGame}>
          PLACE BETS
        </button>
      </div>
    );
  }
}

export default PlayerWins;
