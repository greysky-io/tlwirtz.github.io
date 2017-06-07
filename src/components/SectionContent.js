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

SectionContent.propTypes = {};

export default SectionContent;
