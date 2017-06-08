import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Text = props => {
  const {
    title,
    heading,
    subheading,
    body,
    color,
    weight,
    position,
    bottomMargin,
    infoCard,
    nav,
    error,
    children,
    small,
  } = props;

  const fontWeight = weight ? `text-${weight}` : 'text-light';
  const fontColor = color ? `text-${color}` : 'text-dark';
  const extraMargin = bottomMargin ? 'text-margin-bottom' : null;
  const textClasses = classnames(
    {
      'text-body': body,
      'text-headline': heading,
      'text-subheading': subheading,
      'text-small': small,
      'text-title': title,
      'info-card-item': infoCard,
      'text-error': error,
      nav: nav,
    },
    fontWeight,
    fontColor,
    extraMargin,
    position
  );

  const buildComponent = classes => {
    if (heading || title) {
      return <h1 className={classes}>{children}</h1>;
    }

    if (subheading) {
      return <h2 className={classes}>{children}</h2>;
    }

    return <p className={classes}>{children}</p>;
  };

  return buildComponent(textClasses);
};

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  title: PropTypes.bool,
  heading: PropTypes.bool,
  subheading: PropTypes.bool,
  body: PropTypes.bool,
  color: PropTypes.oneOf(['dark', 'white', 'purple']),
  weight: PropTypes.oneOf(['light', 'reg', 'hairline']),
  position: PropTypes.oneOf(['center', 'left', 'right']),
  bottomMargin: PropTypes.bool,
  infoCard: PropTypes.bool,
  nav: PropTypes.bool,
  error: PropTypes.bool,
  small: PropTypes.bool,
};

export default Text;
