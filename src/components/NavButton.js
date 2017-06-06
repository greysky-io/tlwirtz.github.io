import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';

const NavButton = props => {
  return (
    <div onClick={e => props.handleClick(e)}>
      <Text color="white" weight="hairline" heading nav>
        <i className="fa fa-angle-down" aria-hidden="true" />
      </Text>
    </div>
  );
};

NavButton.propTypes = {};

export default NavButton;
