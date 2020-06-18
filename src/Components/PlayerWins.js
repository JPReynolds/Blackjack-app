import React, { Component } from 'react';

class PlayerWins extends Component {
  componentDidMount() {
    this.props.updateBalance();
  }

  render() {
    return (
      <div>
        <p>PLAYER WINS</p>
        <button onClick={this.props.resetGame}>PLACE BETS</button>
      </div>
    );
  }
}

export default PlayerWins;
