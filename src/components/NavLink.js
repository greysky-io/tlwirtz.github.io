import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text'

const NavLink = props => {
  return (
    <div className="app-nav-group-item">
      <Text subheading position="center" color="white" nav>
        {props.name}
      </Text>
    </div>
  );
};

NavLink.propTypes = {};

export default NavLink;
