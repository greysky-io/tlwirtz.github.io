import React from 'react';
import PropTypes from 'prop-types';

const SectionContent = props => {
  return (
    <div className="section-container">
      <div className="section-item top" />
      <div className="section-item">{props.children}</div>
      <div className="section-item bottom" />
    </div>
  );
};

SectionContent.propTypes = {};

export default SectionContent;
