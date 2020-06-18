import React, { Component } from 'react';

class StartGame extends Component {
  render() {
    return (
      <div>
        <p>£{this.props.betValue} bet placed!</p>
        <button onClick={this.onClick}>START GAME</button>
      </div>
    );
  }
  onClick = () => {
    this.props.startGame();
  };
}

export default StartGame;
