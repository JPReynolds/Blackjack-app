import React from 'react';
import { ItemTypes } from '../Constants';
import { useDrag } from 'react-dnd';

function Wallet() {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CHIP },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      ♘
    </div>
  );
}

export default Wallet;

// <div>
//   <h3>Place your bets...</h3>
//   <button className="bet" onClick={this.props.bet}>
//     BET
//   </button>
// </div>
// <div className="chips">
//   <figure>
//     <img
//       src={require('../images/greenchip.png')}
//       alt="green chip"
//       className="chip"
//       onClick={this.props.green}
//     />
//   </figure>
//   <figure>
//     <img
//       src={require('../images/redchip.png')}
//       alt="red chip"
//       className="chip"
//       onClick={this.props.red}
//     />
//   </figure>
//   <figure>
//     <img
//       src={require('../images/bluechip.png')}
//       alt="blue chip"
//       className="chip"
//       onClick={this.props.blue}
//     />
//   </figure>
// </div>
// export default Wallet;
