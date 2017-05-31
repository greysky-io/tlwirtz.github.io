import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import axios from 'axios';
import '../styles/ContactForm.css';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      projectType: 'Store Setup',
      budget: '',
      projectDetails: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
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

    console.log('trying to send an email');
  }

  render() {
    return (
      <div>
        <h2 className="text-dark text-hairline text-headline"> Get in touch</h2>
        <form>
          <div className="form-container">
            <div className="form-item">
              <p className="text-body text-dark text-hairline">First Name</p>
              <input
                id="first-name"
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={e => this.onChange(e)}
              />
            </div>
            <div className="form-item">
              <p className="text-body text-dark text-hairline">Last Name</p>
              <input
                onChange={e => this.onChange(e)}
                value={this.state.lastName}
                id="last-name"
                name="lastName"
                type="text"
              />
            </div>
            <div className="form-item">
              <p className="text-body text-dark text-hairline">Company</p>
              <input
                onChange={e => this.onChange(e)}
                value={this.state.company}
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
                value={this.state.email}
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
                value={this.state.projectType}
                onChange={e => this.onChange(e)}
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
                value={this.state.budget}
                onChange={e => this.onChange(e)}
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
                value={this.state.projectDetails}
                onChange={e => this.onChange(e)}
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
