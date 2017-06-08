import React from 'react';
import PropTypes from 'prop-types';
import '../styles/InfoCard.css';

const InfoCard = props => {
  return (
    <div className="info-card">
      {props.children}
    </div>
  );
};

InfoCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

export default InfoCard;
