import React from 'react';
import PropTypes from 'prop-types';

const SectionContentItem = props => {
  return (
    <div className="section-item">
      {props.children}
    </div>
  );
};

SectionContentItem.propTypes = {
  
};

export default SectionContentItem;