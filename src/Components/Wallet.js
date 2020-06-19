import React, { Component } from 'react';

class Wallet extends Component {
  render() {
    return (
      <div>
        <div>
          <h3>Place your bets...</h3>
          <button className="bet" onClick={this.props.bet}>
            BET
          </button>
        </div>
        <div className="chips">
          <figure>
            <img
              src={require('../images/greenchip.png')}
              alt="green chip"
              className="chip"
              onClick={this.props.green}
            />
          </figure>
          <figure>
            <img
              src={require('../images/redchip.png')}
              alt="red chip"
              className="chip"
              onClick={this.props.red}
            />
          </figure>
          <figure>
            <img
              src={require('../images/bluechip.png')}
              alt="blue chip"
              className="chip"
              onClick={this.props.blue}
            />
          </figure>
        </div>
      </div>
    );
  }
}

export default Wallet;
