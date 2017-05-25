import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

const SectionContent = props => {
  const containerClass = className({
    'section-container': true,
    'section-full-width': props.fullWidth,
  });

  const top = props.fullWidth ? null : <div className="section-item top" />;
  const bottom = props.fullWidth
    ? null
    : <div className="section-item bottom" />;
  return (
    <div className={containerClass}>
      {top}
      <div className="section-item">{props.children}</div>
      {bottom}
    </div>
  );
};

SectionContent.propTypes = {};

export default SectionContent;
