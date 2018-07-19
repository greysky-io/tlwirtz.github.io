import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.p`
  color: ${props => (props.error ? 'red' : 'gray')};
  display: ${props => (props.inline ? 'inline' : 'block')};
`;

const FormInput = styled.input`
  width: 100%;
  height: 3rem;
  border: 0;
  color: #333 !important;
  background-color: white !important;
  font-size: 1.25rem;
  outline: none;
`;

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
    <div style={{padding: 0, marginRight: '0.5rem', flexGrow: 1}}>
      <FormInput
        // placeholder={displayName}
        placeholder="Enter your email to learn more"
        id={inputId}
        type={type}
        name={name}
        value={value}
        onChange={e => onChange(e)}
        onBlur={e => onBlur(e)}
        className={isInvalid ? 'input-error' : ''}
      />
      {isInvalid ? (
        <Text error>
          {invalidMsg}
        </Text>
      ) : null}
    </div>
  );
};

Input.propTypes = {
  inputId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  isInvalid: PropTypes.bool,
  invalidMsg: PropTypes.string,
  displayName: PropTypes.string,
};

export default Input;
