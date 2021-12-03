import React, { Component } from 'react';
import Button from './button';
import calculate from '../logic/calculate';
import '../index.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    const handler = (buttoName) => {
      const name = buttoName.target.innerText;
      const { total, next, operation } = calculate(this.state, name);
      this.setState({ total, next, operation });
    };
    const { total, next, operation } = this.state;

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
    );
  }
}

export default Calculator;
