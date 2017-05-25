import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import SectionContent from './SectionContent';

const App = props => {
  return (
    <div className="app-container">
      <div className="app-container-item main-background full-height">
        <NavBar />
        <SectionContent>
          <h1 className="text-title text-reg text-white center">
            <span className="text-reg">greysky </span>
            <span className="text-hairline">studios</span>
          </h1>
          <h2 className="text-subheading text-hairline text-white center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat ultrices orci eu dapibus.
          </h2>
        </SectionContent>
      </div>
      <div className="app-container-item">
        <SectionContent>
          <h2 className="text-headline text-dark text-light text-left">
            Another small heading goes here
          </h2>
          <p className="text-body text-dark text-hairline text-left">
            Duis suscipit, mauris a fringilla sollicitudin, massa erat fringilla lacus, id fringilla diam eros eu felis.
          </p>
        </SectionContent>
      </div>
      <div className="app-container-item">
        <SectionContent>
          <h2 className="text-headline text-dark text-light text-left">
            Another small heading goes here
          </h2>
          <p className="text-body text-dark text-hairline text-left">
            Duis suscipit, mauris a fringilla sollicitudin, massa erat fringilla lacus, id fringilla diam eros eu felis.
          </p>
        </SectionContent>
      </div>
    </div>
  );
};

App.propTypes = {};

export default App;
