import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({ onClick = e => null, ...props }) => {
  return (
    <div onClick={e => onClick(e)} className="primary-button info-card-item">
      {props.children}
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

export default Button;
