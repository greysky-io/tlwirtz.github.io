import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

const SectionContent = props => {
  const containerClass = className({
    'section-container': true,
    'section-full-width': props.fullWidth,
    'section-no-padding': props.noPadding,
    'tall': props.tall
  });

  return (
    <div className={containerClass}>
      {props.children}
    </div>
  );
};

SectionContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  fullWidth: PropTypes.bool,
  noPadding: PropTypes.bool,
  tall: PropTypes.bool
};

export default SectionContent;
