import React, { Component } from 'react';

class StartGame extends Component {
  render() {
    return (
      <div>
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
