import React, { Component } from 'react';

class Wallet extends Component {
  render() {
    return (
      <div>
        <img
          src={require('../images/blue-chip.png')}
          alt="blue chip"
          className="chip"
          onClick={this.props.blue}
        />
        <img
          src={require('../images/red-chip.png')}
          alt="red chip"
          className="chip"
          onClick={this.props.red}
        />
        <img
          src={require('../images/green-chip.png')}
          alt="green chip"
          className="chip"
          onClick={this.props.green}
        />
        <div>
          <p className="score">{this.props.betValue}</p>
          <button className="bet" onClick={this.props.bet}>
            PLACE BET
          </button>
        </div>
      </div>
    );
  }
}

export default Wallet;
