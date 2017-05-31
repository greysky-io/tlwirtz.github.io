import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import gssLogo from '../assets/greysky-logo.svg';

const NavBar = props => {
  return (
    <div className="app-nav-container">
      <div className="app-nav-item logo">
        <img src={gssLogo} alt="greysky studios logo" />
      </div>
      <div className="app-nav-group">
        <div className="app-nav-group-item">
          <h2 className="center text-subheading text-white text-hairline nav">services</h2>
        </div>
        <div className="app-nav-group-item">
          <h2 className="center text-subheading text-white text-hairline nav">about</h2>
        </div>
        <div className="app-nav-group-item">
          <h2 className="center text-subheading text-white text-hairline nav">
            get in touch
          </h2>
        </div>
      </div>
    </div>
  );
};

NavBar.propTypes = {};

export default NavBar;
