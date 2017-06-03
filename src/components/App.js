import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import SectionContent from './SectionContent';
import SectionContentItem from './SectionContentItem';
import InfoCard from './InfoCard';
import Button from './Button';
import ContactForm from './ContactForm';
import Footer from './Footer';

import greyskyLogo from '../assets/greysky-logo.svg';
import shopifyLogo from '../assets/shopify_monotone_white.svg';
import editIcon from '../assets/edit-icon.svg';
import openSign from '../assets/open-sign.svg';
import customIcon from '../assets/computer-gear.svg';
import rocket from '../assets/rocket-ship.svg';

const App = props => {
  return (
    <div className="app-container">
      <div className="app-container-item main-background full-height">
        <NavBar />
        <SectionContent fullWidth fullHeight>
          <SectionContentItem padding>
            <h1 className="text-title text-reg text-white">
              <span className="text-reg">greysky </span>
              <span className="text-hairline">studios</span>
            </h1>
            <h2 className="text-subheading text-light text-white">
              Mind-blowing e-commerce for your business
            </h2>
          </SectionContentItem>
        </SectionContent>
      </div>
      <div className="app-container-item">
        <SectionContent>
          <SectionContentItem>
            <h2 className="text-headline text-dark text-light left text-margin-bottom">
              Let us help accelerate your business
            </h2>
            <p className="text-body text-dark text-light left text-margin-bottom">
              We're here to help. Whether you're looking to launch your first online store, or need help fine-tuning your back-office processing we can craft the right solution for your business.
            </p>
            <p className="text-body text-dark text-light left">
              We specialize in creating brand new Shopify stores, off the shelf app integrations and custom app development.
            </p>
          </SectionContentItem>
          <SectionContentItem>
            <SectionContent noPadding>
              <SectionContentItem>
                <img
                  src={rocket}
                  className="service-icon service-icon-large"
                />
                </SectionContentItem>
            </SectionContent>
          </SectionContentItem>
        </SectionContent>
      </div>
      <div className="app-container-item main-background">
        <SectionContent>
          <SectionContentItem>
            <h2 className="text-white text-reg text-title center">
              we
            </h2>
          </SectionContentItem>
          <SectionContentItem>
            <h2 className="text-white text-reg text-title center">
              <i className="fa fa-heart" />
            </h2>
          </SectionContentItem>
          <SectionContentItem>
            <SectionContent noPadding>
              <img src={shopifyLogo} />
            </SectionContent>
          </SectionContentItem>
        </SectionContent>
        <SectionContent>
          <SectionContentItem padding flexStart>
            <h2 className="text-headline text-white text-light center text-margin-bottom">
              Ecommerce done right.
            </h2>
            <p className="text-body text-white text-light center text-margin-bottom">
              Shopify is what e-commerce was meant to be.
              <br />
              The all-in-one platform has everything you need to help you run your business.
            </p>
          </SectionContentItem>
          <SectionContentItem padding flexStart>
            <h2 className="text-headline text-white text-light center text-margin-bottom">
              Manage your business with ease.
            </h2>
            <p className="text-body text-white text-light center text-margin-bottom">
              Manage orders & payments, track sales trends, run marketing campaigns all from within the Shopify system.
              <br />
              Join the 350,000+ merchants who run their business on Shopify.
            </p>
          </SectionContentItem>
          <SectionContentItem padding flexStart>
            <h2 className="text-headline text-white text-light center text-margin-bottom">
              Beautiful storefronts. Mobile ready.
            </h2>
            <p className="text-body text-white text-light center text-margin-bottom">
              With hundreds of robust themes, your products will look beautiful whether on mobile, tablet or desktop.
              <br />
              All themes are fully customizable, no coding required.
            </p>
          </SectionContentItem>
        </SectionContent>
      </div>
      <div className="app-container-item">
        <SectionContent>
          <SectionContentItem flexStart>
            <InfoCard>
              <img src={editIcon} className="service-icon" />
              <h2 className="text-headline text-dark text-light center  info-card-item">
                Store Modification
              </h2>
              <p className="text-body text-dark text-light center info-card-item">
                Already have a Shopify store, but need help making modifications? This package is for you.
              </p>
              <p className="text-body text-purple text-light center">
                Starts at $500
              </p>
            </InfoCard>
          </SectionContentItem>
          <SectionContentItem flexStart>
            <InfoCard>
              <img src={openSign} className="service-icon" />
              <h2 className="text-headline text-dark text-light center info-card-item">
                Store Setup
              </h2>
              <p className="text-body text-dark text-light center info-card-item">
                Everything you need to get your business selling online.
              </p>
              <p className="text-body text-purple text-light center ">
                Starts at $2,500
              </p>
            </InfoCard>
          </SectionContentItem>
          <SectionContentItem flexStart>
            <InfoCard>
              <img src={customIcon} className="service-icon" />
              <h2 className="text-headline text-dark text-light center info-card-item">
                Custom App Development
              </h2>
              <p className="text-body text-dark text-light center info-card-item">
                Need a custom app tailored specifically to your business needs? We're here to help.
              </p>
              <p className="text-body text-purple text-light center">
                Starts at $5,000
              </p>
            </InfoCard>
          </SectionContentItem>
        </SectionContent>
      </div>
      <div className="app-container-item">
        <SectionContent>
          <SectionContentItem>
            {/*We are going to try to use cloud functions for this*/}
            <ContactForm />
          </SectionContentItem>
        </SectionContent>
      </div>
      <Footer />
    </div>
  );
};

App.propTypes = {};

export default App;
