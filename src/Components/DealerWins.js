import React, { Component } from 'react';

class DealerWins extends Component {
  componentDidMount() {
    this.props.setWinner();
  }

  render() {
    return (
      <div>
        <p>DEALER WINS</p>
        <button className="btn" onClick={this.props.resetGame}>
          PLACE BETS
        </button>
      </div>
    );
  }
}

export default DealerWins;
