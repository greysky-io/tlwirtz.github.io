import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import AlertContainer from 'react-alert';
import validator from 'validator';
import Button from './Button';
import Input from './Input';
import Select from './Select';
import Text from './Text';

import '../styles/ContactForm.css';

const validate = (value, validatorList) => {
  const isEmail = (value = '') =>
    validator.isEmail(value) ? [] : ['Proper email is required'];
  const isEmpty = (value = '') =>
    validator.isEmpty(value) ? ['This field is required'] : [];

  const validators = {
    isEmail,
    isEmpty,
  };

  return validatorList.reduce(
    (memo, validator) => [...memo, ...validators[validator](value)],
    []
  );
};

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      inputs: {
        firstName: {
          value: '',
          validators: ['isEmpty'],
          errors: [],
        },
        lastName: {
          value: '',
          validators: ['isEmpty'],
          errors: [],
        },
        email: {
          value: '',
          validators: ['isEmpty', 'isEmail'],
          errors: [],
        },
        company: {
          value: '',
          validators: [],
          errors: [],
        },
        projectType: {
          value: 'Store Setup',
          validators: [],
          errors: [],
        },
        budget: {
          value: '',
          validators: ['isEmpty'],
          errors: [],
        },
        projectDetails: {
          value: '',
          validators: ['isEmpty'],
          errors: [],
        },
      },
    };
    this.isInvalid = this.isInvalid.bind(this);
    this.anyInvalid = this.anyInvalid.bind(this);
    this.validateAll = this.validateAll.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
    this.showAlert = this.showAlert.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  showAlert = () => {
    this.msg.show(this.state.alertMsg, {
      type: 'success',
    });
  };

  clearInputs() {
    const { inputs } = this.state;
    Object.keys(inputs).map(key => {
      if (key === 'projectType') {
        inputs[key].value = 'Store Setup';
      } else {
        inputs[key].value = '';
      }
    });

    this.setState({ inputs });
  }

  validateAll() {
    const state = this.state.inputs;
    Object.keys(state).map(key => {
      const field = state[key];
      const errors = validate(field.value, field.validators);
      state[key] = { ...field, errors };
    });

    this.setState({ inputs: state });
  }

  isInvalid(errors) {
    return errors.length > 0;
  }

  anyInvalid() {
    return Object.keys(this.state.inputs)
      .map(key => this.state.inputs[key].errors)
      .reduce((prev, curr) => prev || this.isInvalid(curr), false);
  }

  onChange(e) {
    const { name, value } = e.target;
    const field = this.state.inputs[name];
    this.setState({
      inputs: {
        ...this.state.inputs,
        [name]: { ...field, value },
      },
    });
  }

  onBlur(e) {
    const { name } = e.target;
    const field = this.state.inputs[name];
    const errors = validate(field.value, field.validators);
    this.setState({
      inputs: {
        ...this.state.inputs,
        [name]: { ...field, errors },
      },
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.validateAll();
    if (this.anyInvalid()) return;

    const {
      firstName,
      lastName,
      email,
      company,
      projectType,
      budget,
      projectDetails,
    } = this.state.inputs;

    const subject = 'New Greysky.io Contact Request';
    const text = `Name: ${firstName.value} ${lastName.value}\nEmail: ${email.value}\nCompany: ${company.value}\nProject Type: ${projectType.value}\nBudget: ${budget.value}\nProject Details: ${projectDetails.value}`;

    axios
      .post('https://us-central1-greysky-io.cloudfunctions.net/sendMail', {
        subject,
        text,
      })
      .then(res => {
        this.clearInputs();
        this.setState({
          alertMsg: 'Thank you for contacting us. We will be in touch shortly.',
        });
        this.showAlert();
      })
      .catch(err => console.log('err', err));
  }

  render() {
    return (
      <div>
        <h2 className="text-dark text-light text-headline"> Get in touch</h2>
        <form>
          <div className="form-container">
            <Input
              displayName="First Name"
              inputId="first-name"
              type="text"
              name="firstName"
              value={this.state.inputs.firstName.value}
              onChange={this.onChange}
              onBlur={this.onBlur}
              isInvalid={this.isInvalid(this.state.inputs.firstName.errors)}
              invalidMsg={
                this.isInvalid(this.state.inputs.firstName.errors)
                  ? this.state.inputs.firstName.errors[0]
                  : ''
              }
            />
            <Input
              displayName="Last Name"
              inputId="last-name"
              type="text"
              name="lastName"
              value={this.state.inputs.lastName.value}
              onChange={this.onChange}
              onBlur={this.onBlur}
              isInvalid={this.isInvalid(this.state.inputs.lastName.errors)}
              invalidMsg={
                this.isInvalid(this.state.inputs.lastName.errors)
                  ? this.state.inputs.lastName.errors[0]
                  : ''
              }
            />
            <Input
              displayName="Company"
              inputId="company"
              type="text"
              name="company"
              value={this.state.inputs.company.value}
              onChange={this.onChange}
              onBlur={this.onBlur}
              isInvalid={this.isInvalid(this.state.inputs.company.errors)}
              invalidMsg={
                this.isInvalid(this.state.inputs.company.errors)
                  ? this.state.inputs.company.errors[0]
                  : ''
              }
            />
          </div>
          <div className="form-container">
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
                this.isInvalid(this.state.inputs.email.errors)
                  ? this.state.inputs.email.errors[0]
                  : ''
              }
            />
          </div>
          <div className="form-container">
            <Select
              displayName="Project Type"
              itemId="project-type"
              name="projectType"
              value={this.state.inputs.projectType.value}
              onChange={this.onChange}
              onBlur={this.onBlur}
              options={[
                { id: 'store-setup', value: 'Store Setup' },
                { id: 'app-setup', value: 'App Integration' },
                { id: 'custom-app', value: 'Custom App Development' },
              ]}
            />
            <Input
              displayName="Budget"
              inputId="budget"
              type="text"
              name="budget"
              value={this.state.inputs.budget.value}
              onChange={this.onChange}
              onBlur={this.onBlur}
              isInvalid={this.isInvalid(this.state.inputs.budget.errors)}
              invalidMsg={
                this.isInvalid(this.state.inputs.budget.errors)
                  ? this.state.inputs.budget.errors[0]
                  : ''
              }
            />
          </div>
          <div className="form-container">
            <Input
              displayName="Project Details"
              inputId="project-details"
              type="text"
              name="projectDetails"
              value={this.state.inputs.projectDetails.value}
              onChange={this.onChange}
              onBlur={this.onBlur}
              isInvalid={this.isInvalid(
                this.state.inputs.projectDetails.errors
              )}
              invalidMsg={
                this.isInvalid(this.state.inputs.projectDetails.errors)
                  ? this.state.inputs.projectDetails.errors[0]
                  : ''
              }
            />
          </div>
          <div className="form-container">
            <Button onClick={e => this.onSubmit(e)}>
              <Text body color="white" position="center">
                Submit
              </Text>
            </Button>
            <AlertContainer
              ref={a => (this.msg = a)}
              offset={14}
              position="bottom right"
              theme="light"
              time={5000}
              transition="scale"
            />
          </div>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {};

export default ContactForm;
