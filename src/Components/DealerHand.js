import React, { useEffect } from 'react';
import Winner from './Winner';

const DealerHand = (props) => {
  useEffect(() => {
    props.deal();
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      if (
        (props.stick === true || props.playerScore > 21) &&
        props.dealerScore < 17
      ) {
        return props.deal();
      }
    }, 2000);
    return () => clearInterval(t);
  });

  // componentDidUpdate(prevProps) {
  //   if (
  //     (this.props.stick === true || this.props.playerScore > 21) &&
  //     this.props.dealerScore < 17
  //   ) {
  //     return this.props.deal();
  //   }
  // }

  // useEffect(() => {
  //   const interval = () => {
  //     if (
  //       (this.props.stick === true || this.props.playerScore > 21) &&
  //       this.props.dealerScore < 17
  //     ) {
  //       setInterval(() => {
  //         this.props.deal();
  //       }, 2000);
  //       return clearInterval(interval)
  //     }
  //   }
  // })

  return (
    <div>
      {props.hand.map((card) => {
        return (
          <img
            src={require(`../images/${card.value.toString() + card.suit}.jpg`)}
            alt="card"
            className="card"
          />
        );
      })}

      <Winner dealerScore={props.dealerScore} playerScore={props.playerScore} />
    </div>
  );
};

export default DealerHand;
