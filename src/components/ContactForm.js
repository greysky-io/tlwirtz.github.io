import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/ContactForm.css';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      projectType: '',
      budget: '',
      projectDetails: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-container">
            <div className="form-item">
              <p className="text-body text-dark text-hairline">First Name</p>
              <input
                id="first-name"
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={(e => this.onChange(e))}
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
              <input
                id="project-type"
                name="projectType"
                value={this.state.projectType}
                onChange={e => this.onChange(e)}
                type="text"
              />
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
          <Button>
            <p className="text-body text-hairline text-white center">Submit</p>
          </Button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {};

export default ContactForm;
