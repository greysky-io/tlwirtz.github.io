import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import validator from 'validator';
import Button from './Button';
import Input from './Input';
import Select from './Select';

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
    };
    this.isInvalid = this.isInvalid.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  isInvalid(errors) {
    return errors.length > 0;
  }

  onChange(e) {
    const { name, value } = e.target;
    const field = this.state[name];
    this.setState({ [name]: { ...field, value } });
  }

  onBlur(e) {
    const { name } = e.target;
    const field = this.state[name];
    const errors = validate(field.value, field.validators);
    this.setState({ [name]: { ...field, errors } });
  }

  onSubmit(e) {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      company,
      projectType,
      budget,
      projectDetails,
    } = this.state;

    const subject = 'New Greysky.io Contact Request';
    const text = `Name: ${firstName.value} ${lastName.value}\nEmail: ${email.value}\nCompany: ${company.value}\nProject Type: ${projectType.value}\nBudget: ${budget.value}\nProject Details: ${projectDetails.value}`;

    axios
      .post('https://us-central1-greysky-io.cloudfunctions.net/sendMail', {
        subject,
        text,
      })
      .then(res => console.log('res', res))
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
              value={this.state.firstName.value}
              onChange={this.onChange}
              onBlur={this.onBlur}
              isInvalid={this.isInvalid(this.state.firstName.errors)}
              invalidMsg={
                this.isInvalid(this.state.firstName.errors)
                  ? this.state.firstName.errors[0]
                  : ''
              }
            />
            <Input
              displayName="Last Name"
              inputId="last-name"
              type="text"
              name="lastName"
              value={this.state.lastName.value}
              onChange={this.onChange}
              onBlur={this.onBlur}
              isInvalid={this.isInvalid(this.state.lastName.errors)}
              invalidMsg={
                this.isInvalid(this.state.lastName.errors)
                  ? this.state.lastName.errors[0]
                  : ''
              }
            />
            <Input
              displayName="Company"
              inputId="company"
              type="text"
              name="company"
              value={this.state.company.value}
              onChange={this.onChange}
              onBlur={this.onBlur}
              isInvalid={this.isInvalid(this.state.company.errors)}
              invalidMsg={
                this.isInvalid(this.state.company.errors)
                  ? this.state.company.errors[0]
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
              value={this.state.email.value}
              onChange={this.onChange}
              onBlur={this.onBlur}
              isInvalid={this.isInvalid(this.state.email.errors)}
              invalidMsg={
                this.isInvalid(this.state.email.errors)
                  ? this.state.email.errors[0]
                  : ''
              }
            />
          </div>
          <div className="form-container">
            <Select
              displayName="Project Type"
              itemId="project-type"
              name="projectType"
              value={this.state.projectType.value}
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
              value={this.state.budget.value}
              onChange={this.onChange}
              onBlur={this.onBlur}
              isInvalid={this.isInvalid(this.state.budget.errors)}
              invalidMsg={
                this.isInvalid(this.state.budget.errors)
                  ? this.state.budget.errors[0]
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
              value={this.state.projectDetails.value}
              onChange={this.onChange}
              onBlur={this.onBlur}
              isInvalid={this.isInvalid(this.state.projectDetails.errors)}
              invalidMsg={
                this.isInvalid(this.state.projectDetails.errors)
                  ? this.state.projectDetails.errors[0]
                  : ''
              }
            />
          </div>
          <Button onClick={e => this.onSubmit(e)}>
            <p className="text-body text-hairline text-white center">Submit</p>
          </Button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {};

export default ContactForm;
