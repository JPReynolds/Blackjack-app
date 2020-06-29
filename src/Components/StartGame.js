import React, { Component } from 'react';
import { Link } from '@reach/router';

class StartGame extends Component {
  render() {
    return (
      <div className="startGame">
        <h2 className="title--start">£{this.props.betValue} bet placed!</h2>
        <Link to="/game" className="btn">
          START GAME
        </Link>
      </div>
    );
  }
}

export default StartGame;
