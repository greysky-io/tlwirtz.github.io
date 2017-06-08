import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';

const NavLink = props => {
  return (
    <div className="app-nav-group-item">
      <a href={`#${props.id}`}>
        <Text subheading position="center" color="white" nav>
          {props.name}
        </Text>
      </a>
    </div>
  );
};

NavLink.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  name: PropTypes.string.isRequired,
};

export default NavLink;
