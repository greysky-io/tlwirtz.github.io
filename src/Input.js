import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { WHITE, GREY } from './constants';

const Text = styled.p`
  letter-spacing: 1.25px;
  color: ${props => (props.error ? 'red' : 'gray')};
  display: ${props => (props.inline ? 'inline' : 'block')};
`;

const FormInputContainer = styled.div`
  padding: 1rem;
  border-radius: 5px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  background-color: ${WHITE};
  flex-grow: 1;
`;

const FormInput = styled.input`
  width: 100%;
  height: 3rem;
  border: 0;
  color: ${GREY};
  background-color: ${WHITE};
  font-size: 1.25rem;
  outline: none;
  ::placeholder {
    color: ${GREY};
  }
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
    <FormInputContainer>
      <FormInput
        placeholder="Enter your email to learn more"
        id={inputId}
        type={type}
        name={name}
        value={value}
        onChange={e => onChange(e)}
        onBlur={e => onBlur(e)}
        className={isInvalid ? 'input-error' : ''}
      />
      {isInvalid ? <Text error>{invalidMsg}</Text> : null}
    </FormInputContainer>
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
