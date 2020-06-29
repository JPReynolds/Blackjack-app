import React, { Component } from 'react';
import Target from '../Components/Target';
import Chip from '../Components/Chip';
import { Link } from '@reach/router';

class PlaceBets extends Component {
  state = {
    items: [
      {
        value: 10,
        name: 'blue',
      },
      {
        value: 5,
        name: 'red',
      },
      {
        value: 1,
        name: 'green',
      },
    ],
  };

  render() {
    return (
      <div className="place-bet">
        <h3 className="place-bet--title">Place your bets...</h3>
        <ul className="rules">
          <li>You must be 18 or over to play</li>
          <li>Drag the chips into the bucket to increase your bet</li>
          <li>Happy betting!</li>
        </ul>
        <Link to="/startgame">
          <button className="bet" onClick={this.props.handleBet}>
            BET
          </button>
        </Link>
        <Target />
        <div className="chips">
          {this.state.items.map((item) => {
            return (
              <Chip
                name={item.name}
                value={item.value}
                key={item.value}
                handleDrop={(value) => {
                  this.props.updateBet(value);
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default PlaceBets;
