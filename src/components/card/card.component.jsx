import React from 'react';
import './card.styles.css';
export const Card = ({ logo, head, text }) => {
  return (
    <div className="card1">
      <div className="img">
        <img src={logo} alt="logo"  />
      </div>
      <h4>{head}</h4>
      <p>{text}</p>
    </div>
  );
};
