import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

const SectionContentItem = props => {
  const itemClass = className({
    'section-item': true,
    'section-padding': props.padding,
    'flex-start': props.flexStart,
  });

  return (
    <div className={itemClass}>
      {props.children}
    </div>
  );
};

SectionContentItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  padding: PropTypes.bool,
  flexStart: PropTypes.bool,
};

export default SectionContentItem;
