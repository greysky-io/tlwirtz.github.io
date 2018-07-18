import React, { Component } from 'react';
import axios from 'axios';
import validator from 'validator';
import Input from './Input';
import FlexRow from '../src/FlexRow';

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

  onChange = e => {
    const { name, value } = e.target;
    const field = this.state.inputs[name];
    this.setState({
      inputs: {
        ...this.state.inputs,
        [name]: { ...field, value },
      },
    });
  };

  onBlur = e => {
    const { name } = e.target;
    const field = this.state.inputs[name];
    const errors = validate(field.value, field.validators);
    this.setState({
      inputs: {
        ...this.state.inputs,
        [name]: { ...field, errors },
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
      })
      .catch(err => console.log('err', err));
  };

  render() {
    return (
      <form>
        <p>This could use some work</p>
        <Input
          displayName="Email"
          inputId="email"
          type="text"
          name="email"
          value={this.state.inputs.email.value}
          onChange={this.onChange}
          onBlur={this.onBlur}
          isInvalid={this.isInvalid(this.state.inputs.email.errors)}
          invalidMsg={
            this.isInvalid(this.state.inputs.email.errors) ? this.state.inputs.email.errors[0] : ''
          }
        />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}

export default ContactForm;
