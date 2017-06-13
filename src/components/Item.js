import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

const Item = props => {
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

Item.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  padding: PropTypes.bool,
  flexStart: PropTypes.bool,
};

export default Item;
