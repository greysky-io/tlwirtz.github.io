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
  } = props;

  const fontWeight = weight ? `text-${weight}` : 'text-light';
  const fontColor = color ? `text-${color}` : 'text-dark';
  const extraMargin = bottomMargin ? 'text-margin-bottom' : null;
  const textClasses = classnames(
    {
      'text-body': body,
      'text-headline': heading,
      'text-subheading': subheading,
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

Text.propTypes = {};

export default Text;
