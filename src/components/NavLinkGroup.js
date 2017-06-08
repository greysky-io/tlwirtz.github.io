import React from 'react';
import PropTypes from 'prop-types';
import NavLink from './NavLink';

const NavLinkGroup = props => {
  return (
    <div className="app-nav-group">
      {props.values.map((value, idx) => (
        <NavLink key={idx} name={value.name} id={value.id} />
      ))}
    </div>
  );
};

NavLinkGroup.propTypes = {
  values: PropTypes.array.isRequired,
};

export default NavLinkGroup;
