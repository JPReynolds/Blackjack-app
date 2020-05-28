import React, { Component } from 'react';

class StartGame extends Component {
  render() {
    return (
      <div>
        <img src={this.props.dealersHand[0].img} alt="card" className="card" />
        <img src={this.props.dealersHand[0].img} alt="card" className="card" />
        <button onClick={this.onClick}>START GAME</button>
      </div>
    );
  }
  onClick = () => {
    this.props.dealCards();
  };
}

export default StartGame;
