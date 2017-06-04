import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import validator from 'validator';
import Button from './Button';

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
    this.setErrorClass = this.setErrorClass.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  setErrorClass(errors) {
    return errors.length > 0 ? 'input-error' : '';
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
            <div className="form-item">
              {/*extract this out into a form item component*/}
              <p className="text-body text-dark text-hairline">First Name</p>
              <input
                id="first-name"
                type="text"
                name="firstName"
                value={this.state.firstName.value}
                onChange={e => this.onChange(e)}
                onBlur={e => this.onBlur(e)}
                className={this.setErrorClass(this.state.firstName.errors)}
              />
              {this.state.firstName.errors.length > 0
                ? <p className="text-body text-dark text-light">
                    {this.state.firstName.errors[0]}
                  </p>
                : null}
            </div>
            <div className="form-item">
              <p className="text-body text-dark text-hairline">Last Name</p>
              <input
                onChange={e => this.onChange(e)}
                onBlur={e => this.onBlur(e)}
                value={this.state.lastName.value}
                id="last-name"
                name="lastName"
                type="text"
              />
            </div>
            <div className="form-item">
              <p className="text-body text-dark text-hairline">Company</p>
              <input
                onChange={e => this.onChange(e)}
                onBlur={e => this.onBlur(e)}
                value={this.state.company.value}
                id="company"
                name="company"
                type="text"
              />
            </div>
          </div>
          <div className="form-container">
            <div className="form-item">
              <p className="text-body text-dark text-hairline">Email</p>
              <input
                id="email"
                name="email"
                type="text"
                value={this.state.email.value}
                onBlur={e => this.onBlur(e)}
                onChange={e => this.onChange(e)}
              />
            </div>
          </div>
          <div className="form-container">
            <div className="form-item">
              <p className="text-body text-dark text-hairline">Project Type</p>
              <select
                id="project-type"
                name="projectType"
                value={this.state.projectType.value}
                onChange={e => this.onChange(e)}
                onBlur={e => this.onBlur(e)}
                type="text"
              >
                <option id="store-setup">Store Setup</option>
                <option id="app-setup">App Integration</option>
                <option id="custom-app">Custom App Development</option>
              </select>
            </div>
            <div className="form-item">
              <p className="text-body text-dark text-hairline">Budget</p>
              <input
                id="budget"
                name="budget"
                value={this.state.budget.value}
                onChange={e => this.onChange(e)}
                onBlur={e => this.onBlur(e)}
                type="text"
              />
            </div>
          </div>
          <div className="form-container">
            <div className="form-item">
              <p className="text-body text-dark text-hairline">
                Project Details
              </p>
              <input
                id="project-details"
                name="projectDetails"
                value={this.state.projectDetails.value}
                onChange={e => this.onChange(e)}
                onBlur={e => this.onBlur(e)}
                type="text"
              />
            </div>
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
