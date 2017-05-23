import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';

const App = props => {
  return (
    <div className="app-container">
      <div className="app-container-item main-background">
        <NavBar />
        <h1 className="text-title text-reg text-white">
          <span className="text-reg">greysky </span>
          <span className="text-hairline">studios</span>
        </h1>
        <h2 className="text-headline text-hairline text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat ultrices orci eu dapibus.
        </h2>
      </div>
    </div>
  );
};

App.propTypes = {};

export default App;
