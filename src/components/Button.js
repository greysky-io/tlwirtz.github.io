import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css'

const Button = props => {
  return (
    <div className="primary-button info-card-item">
      {props.children}
    </div>
  );
};

Button.propTypes = {
  
};

export default Button;