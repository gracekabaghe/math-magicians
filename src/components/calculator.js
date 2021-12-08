import React, { useState } from 'react';
import Button from './button';
import calculate from '../logic/calculate';
import '../index.css';

const Calculator = () => {
  const [value, setValue] = useState({
    total: '',
    next: '',
    operation: '',
  });

  const handler = (buttonName) => {
    const name = buttonName.target.innerText;
    setValue(calculate(value, name));
  };
  const { total, next, operation } = value;

  // pages;
  const display = () => {
    if (next) {
      return next;
    }
    if (operation) {
      return operation;
    }
    if (total) {
      return total;
    }
    return 0;
  };
  return (
    <div className="container">
      <div className="cal-p">
        <p>Solve some Maths</p>
      </div>
      <div className="calculator-flex">
        <div className="output">{display()}</div>
        <div className="buttons">
          <Button value="AC" click={handler} />
          <Button value="+/-" click={handler} />
          <Button value="%" click={handler} />
          <Button value="÷" click={handler} />
          <Button value="7" click={handler} />
          <Button value="8" click={handler} />
          <Button value="9" click={handler} />
          <Button value="x" click={handler} />
          <Button value="4" click={handler} />
          <Button value="5" click={handler} />
          <Button value="6" click={handler} />
          <Button value="-" click={handler} />
          <Button value="1" click={handler} />
          <Button value="2" click={handler} />
          <Button value="3" click={handler} />
          <Button value="-" click={handler} />
          <Button value="+" click={handler} />
          <Button value="0" click={handler} />
          <Button value="." click={handler} />
          <Button value="=" click={handler} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
