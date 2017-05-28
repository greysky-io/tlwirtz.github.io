import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

const SectionContent = props => {
  const containerClass = className({
    'section-container': true,
    'section-full-width': props.fullWidth,
  });

  return (
    <div className={containerClass}>
      {props.children}
    </div>
  );
};

SectionContent.propTypes = {};

export default SectionContent;
