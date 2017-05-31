import React from 'react';
import PropTypes from 'prop-types';

const NavLink = props => {
  return (
    <div className="app-nav-group-item">
      <h2 className="center text-subheading text-white text-hairline nav">
        {props.name}
      </h2>
    </div>
  );
};

NavLink.propTypes = {};

export default NavLink;
