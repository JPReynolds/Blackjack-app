import React, { Component } from 'react';

class StartGame extends Component {
  render() {
    return (
      <div>
        <h2 className="title--start">£{this.props.betValue} bet placed!</h2>
        <button className="btn" onClick={this.onClick}>
          START GAME
        </button>
      </div>
    );
  }
  onClick = () => {
    this.props.beginGame();
  };
}

export default StartGame;
