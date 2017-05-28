import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/ContactForm.css';

const ContactForm = props => {
  return (
    <div>
      <form>
        <div className="form-container">
          <div className="form-item">
            <p className="text-body text-dark text-hairline">First Name</p>
            <input id="first-name" type="text" />
          </div>
          <div className="form-item">
            <p className="text-body text-dark text-hairline">Last Name</p>
            <input id="last-name" type="text" />
          </div>
        </div>
        <div className="form-container">
          <div className="form-item">
            <p className="text-body text-dark text-hairline">Email</p>
            <input id="email" type="text" />
          </div>
        </div>
        <div className="form-container">
          <div className="form-item">
            <p className="text-body text-dark text-hairline">Project Type</p>
            <input id="project-type" type="text" />
          </div>
          <div className="form-item">
            <p className="text-body text-dark text-hairline">Budget</p>
            <input id="budget" type="text" />
          </div>
        </div>
        <div className="form-container">
          <div className="form-item">
            <p className="text-body text-dark text-hairline">Project Details</p>
            <input id="project-details" type="text" />
          </div>
        </div>
        <Button>
          <p className="text-body text-hairline text-white center">Submit</p>
        </Button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {};

export default ContactForm;
