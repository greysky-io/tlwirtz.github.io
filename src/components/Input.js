import React from 'react';
import PropTypes from 'prop-types';

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
      <p className="text-body text-dark text-hairline">{displayName}</p>
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
        ? <p className="text-body text-dark text-light text-error">
            {invalidMsg}
          </p>
        : null}
    </div>
  );
};

Input.propTypes = {};

export default Input;
