import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';

const Input = props => {
  const {
    inputId,
    type,
    name,
    value,
    onChange,
    onBlur,
    isInvalid,
    invalidMsg,
    displayName,
  } = props;
  return (
    <div className="form-item">
      <Text body>{displayName}</Text>
      <input
        id={inputId}
        type={type}
        name={name}
        value={value}
        onChange={e => onChange(e)}
        onBlur={e => onBlur(e)}
        className={isInvalid ? 'input-error' : ''}
      />
      {isInvalid
        ? <Text body error>
            {invalidMsg}
          </Text>
        : null}
    </div>
  );
};

Input.propTypes = {};

export default Input;
