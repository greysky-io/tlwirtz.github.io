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
  height: 58px;
  &:hover:enabled {
    opacity: 0.8;
    cursor: pointer;
  }

  transition: background-color 0.5s;
  -webkit-transition: background-color 0.5s;
`;

const SubmitSuccessText = styled.div`
  animation: fade-in-background 0.5s ease-in-out;

  @keyframes fade-in-background {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const LoadingContainer = styled.div`
  margin: 0 auto 0;
  width: 150px;
  text-align: center;
`;

const Bounce = styled.div`
  width: 13px;
  height: 13px;
  background-color: #fff;
  border-radius: 100%;
  display: inline-block;
  margin: 5px;

  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;

  &.bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  &.bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 0.7;
    }
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
    isSubmitting: false,
  };

  clearInputs = () => {
    const { inputs } = this.state;
    Object.keys(inputs).map(key => (inputs[key].value = ''));

    return this.setState({ inputs });
  };

  validateAll = () => {
    const { inputs } = this.state;
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

    this.setState({ isSubmitting: true });

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
        this.setState({ submitted: true, isSubmitting: false });
      })
      .catch(err => {
        this.setState({ isSubmitting: false });
        console.log('err', err);
      });
  };

  getButtonColor = () => {
    if (this.isInvalid(this.state.inputs.email.errors) && !this.state.submitted) {
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
            {this.state.isSubmitting ? (
              <LoadingContainer>
                <Bounce className="bounce1" />
                <Bounce className="bounce2" />
                <Bounce className="bounce3" />
              </LoadingContainer>
            ) : (
              <SubmitSuccessText className={this.state.submitted ? 'submitted' : undefined}>
                {buttonText}
              </SubmitSuccessText>
            )}
          </FormSubmit>
        </Form>
      </FormContainer>
    );
  }
}

export default ContactForm;
