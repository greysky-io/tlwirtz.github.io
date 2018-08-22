import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { PURPLE, WHITE, GREEN, RED, GREY } from './constants';
import validator from 'validator';
import Input from './Input';

const FormSubmit = styled.button`
  display: flex;
  padding: 1rem;
  font-size: 1rem;
  width: 100%;
  text-align: center;
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  border: none;
  outline: none;
  border-radius: 0px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  &:hover:enabled {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const FormContainer = styled.div`
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const Form = styled.form`
  flex: 1;
  width: 100%;
`;

const validate = (value, validatorList) => {
  const isEmail = (value = '') => (validator.isEmail(value) ? [] : ['Proper email is required']);
  const isEmpty = (value = '') => (validator.isEmpty(value) ? ['This field is required'] : []);

  const validators = { isEmail, isEmpty };

  return validatorList.reduce((memo, validator) => [...memo, ...validators[validator](value)], []);
};

class ContactForm extends Component {
  state = {
    inputs: {
      email: {
        value: '',
        validators: ['isEmpty', 'isEmail'],
        errors: [],
      },
    },
    submitted: false,
  };

  clearInputs = () => {
    const { inputs } = this.state;
    Object.keys(inputs).map(key => (inputs[key].value = ''));

    return this.setState({ inputs });
  };

  validateAll = () => {
    const { inputs } = this.state;
    console.log('validating', inputs);
    Object.keys(inputs).map(key => {
      const field = inputs[key];
      const errors = validate(field.value, field.validators);
      return (inputs[key] = { ...field, errors });
    });

    return this.setState({ inputs });
  };

  isInvalid = errors => errors.length > 0;

  anyInvalid = () => {
    const { inputs } = this.state;
    return Object.keys(inputs)
      .map(key => inputs[key].errors)
      .reduce((prev, curr) => prev || this.isInvalid(curr), false);
  };

  validateIfBlurred = blurred => {
    if (blurred) {
      this.validateAll();
    }
  };

  onChange = e => {
    const { name, value } = e.target;
    const field = this.state.inputs[name];
    this.setState();
    this.setState(
      {
        inputs: {
          ...this.state.inputs,
          [name]: { ...field, value },
        },
      },
      () => this.validateIfBlurred(field.blurred)
    );
  };

  onBlur = e => {
    const { name } = e.target;
    const field = this.state.inputs[name];
    const errors = validate(field.value, field.validators);
    this.setState({
      inputs: {
        ...this.state.inputs,
        [name]: { ...field, errors, blurred: true },
      },
    });
  };

  onSubmit = e => {
    e.preventDefault();

    this.validateAll();
    if (this.anyInvalid()) return;

    const { email } = this.state.inputs;
    const subject = 'New Greysky.io Email Submission';
    const text = `Email: ${email.value}`;

    axios
      .post('https://us-central1-greysky-io.cloudfunctions.net/sendMail', {
        subject,
        text,
      })
      .then(res => {
        this.clearInputs();
        this.setState({ submitted: true });
      })
      .catch(err => console.log('err', err));
  };

  getButtonColor = () => {
    if (this.isInvalid(this.state.inputs.email.errors)) {
      return RED;
    }

    if (this.state.submitted) {
      return GREEN;
    }

    return PURPLE;
  };

  getButtonText = () => {
    if (this.state.submitted) {
      return 'Thank you! We will be in touch shortly.';
    }

    if (this.isInvalid(this.state.inputs.email.errors)) {
      return this.state.inputs.email.errors[0];
    }

    return 'Submit';
  };

  getButtonTextColor = () => {
    if (this.state.submitted) {
      return GREY;
    }

    return WHITE;
  };

  render() {
    const bgColor = this.getButtonColor();
    const buttonText = this.getButtonText();
    const buttonTextColor = this.getButtonTextColor();
    const isDisabled = this.isInvalid(this.state.inputs.email.errors) || this.state.submitted;

    return (
      <FormContainer>
        <Form>
            <Input
              displayName="Email"
              inputId="email"
              type="text"
              name="email"
              value={this.state.inputs.email.value}
              onChange={this.onChange}
              onBlur={this.onBlur}
            />
          <FormSubmit
            textColor={buttonTextColor}
            disabled={isDisabled}
            bgColor={bgColor}
            onClick={e => this.onSubmit(e)}
          >
            {buttonText}
          </FormSubmit>
        </Form>
      </FormContainer>
    );
  }
}

export default ContactForm;
