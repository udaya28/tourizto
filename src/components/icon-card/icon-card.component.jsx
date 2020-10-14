import React from 'react';
import './icon-card.styles.css';

export const IconCard = ({ logo, count, text }) => {
  return (
    <div className="icon-card">
      <img src={logo} alt="logo" />
      <h2>{count}</h2>
      <p>{text}</p>
    </div>
  );
};
