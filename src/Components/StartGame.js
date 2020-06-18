import React, { Component } from 'react';

class StartGame extends Component {
  render() {
    return (
      <div>
        <p className="betPlaced">£{this.props.betValue} bet placed!</p>
        <button className="bet" onClick={this.onClick}>
          START GAME
        </button>
      </div>
    );
  }
  onClick = () => {
    this.props.startGame();
  };
}

export default StartGame;
