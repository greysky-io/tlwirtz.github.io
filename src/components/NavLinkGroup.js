import React from 'react';
import PropTypes from 'prop-types';
import NavLink from './NavLink';

const NavLinkGroup = props => {
  return (
    <div className="app-nav-group">
      {props.values.map(value => <NavLink name={value} />)}
    </div>
  );
};

NavLinkGroup.propTypes = {};

export default NavLinkGroup;
