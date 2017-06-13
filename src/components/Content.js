import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

const Content = props => {
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

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  fullWidth: PropTypes.bool,
  noPadding: PropTypes.bool,
  tall: PropTypes.bool
};

export default Content;
