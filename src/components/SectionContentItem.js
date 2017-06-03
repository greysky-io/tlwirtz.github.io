import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames'

const SectionContentItem = props => {

  const itemClass = className({
    'section-item': true,
    'section-padding': props.padding,
    'flex-start': props.flexStart
  });

  return (
    <div className={itemClass}>
      {props.children}
    </div>
  );
};

SectionContentItem.propTypes = {
  
};

export default SectionContentItem;