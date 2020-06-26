import React from 'react';
import Target from '../Components/Target';
import Chip from '../Components/Chip';

const PlaceBets = (props) => {
  return (
    <div className="place-bet">
      <h3>Place your bets...</h3>
      <ul className="rules">
        <li>You must be 18 or over to play</li>
        <li>Drag the chips into the bucket to increase your bet</li>
        <li>Happy betting!</li>
      </ul>
      <button className="bet" onClick={props.handleBet}>
        BET
      </button>
      <Target />
      <div className="chips">
        {props.items.map((item) => {
          return (
            <Chip
              name={item.name}
              value={item.value}
              key={item.vale}
              handleDrop={(value) => {
                props.updateBet(value);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PlaceBets;
