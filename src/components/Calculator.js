import React, { useState } from 'react';
import '../index.css';

const Calculator = () => {
  const count = useState(0);

  return (
    <div className="calculator-flex">
      <div className="output">{count}</div>
      <div className="buttons">
        <button type="button" className="button">AC</button>
        <button type="button" className="button">+/-</button>
        <button type="button" className="button">%</button>
        <button type="button" className="button highlight">&divide;</button>
        <button type="button" className="button">7</button>
        <button type="button" className="button">8</button>
        <button type="button" className="button">9</button>
        <button type="button" className="button highlight">&times;</button>
        <button type="button" className="button">4</button>
        <button type="button" className="button">5</button>
        <button type="button" className="button">6</button>
        <button type="button" className="button highlight">-</button>
        <button type="button" className="button">1</button>
        <button type="button" className="button">2</button>
        <button type="button" className="button">3</button>
        <button type="button" className="button highlight">+</button>
        <button type="button" className="button span-two">0</button>
        <button type="button" className="button">.</button>
        <button type="button" className="button highlight">=</button>
      </div>
    </div>
  );
};

export default Calculator;
