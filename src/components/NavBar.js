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
        <div className="app-nav-item">
          <h2 className="text-headline text-white text-hairline">services</h2>
        </div>
        <div className="app-nav-item">
          <h2 className="text-headline text-white text-hairline">about</h2>
        </div>
        <div className="app-nav-item">
          <h2 className="text-headline text-white text-hairline">
            get in touch
          </h2>
        </div>
      </div>
    </div>
  );
};

NavBar.propTypes = {};

export default NavBar;
