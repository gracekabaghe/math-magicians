import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../index.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value, click } = this.props;
    if (value === '0') {
      return (
        <button type="button" id="zero" className="button" onClick={click}>
          {value}
        </button>
      );
    }

    return (
      <button type="button" className="button" onClick={click}>
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string,
  click: PropTypes.func.isRequired,
};

Button.defaultProps = {
  value: '',
};
export default Button;
