import React from 'react';
import './burguer.css';

function BurguerButtom({ clicked, handleClick }) {
  return (
    <div onClick={handleClick} className={`icon nav-icon-5 ${clicked ? 'open' : ''}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default BurguerButtom;