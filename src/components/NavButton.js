import React from 'react';
import PropTypes from 'prop-types';

const NavButton = props => {
  return (
    <div onClick={e => props.handleClick(e)}>
      <p className="text-white text-hairline text-headline nav">
        <i className="fa fa-angle-down" aria-hidden="true" />
      </p>
    </div>
  );
};

NavButton.propTypes = {};

export default NavButton;
