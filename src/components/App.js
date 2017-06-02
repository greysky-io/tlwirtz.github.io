import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import SectionContent from './SectionContent';
import SectionContentItem from './SectionContentItem';
import InfoCard from './InfoCard';
import Button from './Button';
import ContactForm from './ContactForm';
import Footer from './Footer';

import mainIMG from '../assets/felix-russell-saw-112140.jpg';
import shopifyLogo from '../assets/shopify_monotone_white.svg';
import editIcon from '../assets/edit-icon.svg';
import openSign from '../assets/open-sign.svg';
import customIcon from '../assets/computer-gear.svg';

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
            <h2 className="text-subheading text-hairline text-white">
              Mind-blowing e-commerce for your business{' '}
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
            <p className="text-body text-dark text-hairline left text-margin-bottom">
              We're here to help. Whether you're looking to launch your first online store, or need help fine-tuning your back-office processing we can craft the right solution for your business.
            </p>
            <p className="text-body text-dark text-hairline left">
              We specialize in creating brand new stores, off the shelf app integration and custom app development.
            </p>
          </SectionContentItem>
          <SectionContentItem>
            <h2 className="text-headline text-dark text-light center text-margin-bottom">
              Image Here.
            </h2>
            {/*<img src={mainIMG} className="img-class" />*/}
          </SectionContentItem>
        </SectionContent>
      </div>
      <div className="app-container-item main-background">
        <SectionContent>
          <SectionContentItem>
            <img src={shopifyLogo} className="shopify-logo" />
            <h2 className="text-headline text-white text-light left text-margin-bottom">
              Ecommerce done right.
            </h2>
            <p className="text-body text-white text-hairline left text-margin-bottom">
              Shopify is what e-commerce was meant to be.
              <br />
              The all-in-one platform has everything you need to help you run your business.
            </p>
            <h2 className="text-headline text-white text-light left text-margin-bottom">
              Manage your business with ease.
            </h2>
            <p className="text-body text-white text-hairline left text-margin-bottom">
              Manage orders & payments, track sales trends, run marketing campaigns all from within the Shopify system.
              <br />
              Join the 350,000+ merchants who run their business on Shopify.
            </p>
            <h2 className="text-headline text-white text-light left text-margin-bottom">
              Beautiful storefronts. Mobile ready. No hassle.
            </h2>
            <p className="text-body text-white text-hairline left text-margin-bottom">
              Duis suscipit, mauris a fringilla sollicitudin, massa erat fringilla lacus, id fringilla diam eros eu felis.
            </p>
          </SectionContentItem>
        </SectionContent>
      </div>
      <div className="app-container-item">
        <SectionContent>
          <SectionContentItem>
            <InfoCard>
              <img src={editIcon} className="service-icon" />
              <h2 className="text-headline text-light center  info-card-item">
                Store Modification
              </h2>
              <p className="text-body text-dark text-hairline center info-card-item">
                Already have a Shopify store, but need help making modifications? This package is for you.
              </p>
              <p className="text-body text-dark text-hairline center">
                Starts at $500
              </p>
              {/*<Button>
                <p className="text-body text-white text-hairline center">
                  Learn More
                </p>
              </Button>*/}
            </InfoCard>

          </SectionContentItem>
          <SectionContentItem>
            <InfoCard>
              <img src={openSign} className="service-icon" />

              <h2 className="text-headline text-light center info-card-item">
                Store Setup
              </h2>
              <p className="text-body text-dark text-hairline center info-card-item">
                Everything you need to get your business selling online.
              </p>
              <p className="text-body text-dark text-hairline center ">
                Starts at $2,500
              </p>
              {/*<Button>
                <p className="text-body text-white text-hairline center">
                  Learn More
                </p>
              </Button>*/}
            </InfoCard>
          </SectionContentItem>
          <SectionContentItem>
            <InfoCard>
              <img src={customIcon} className="service-icon" />
              <h2 className="text-headline text-light center info-card-item">
                Custom App Development
              </h2>
              <p className="text-body text-dark text-hairline center info-card-item">
                Need a custom app tailored specifically to your business needs? We're here to help.
              </p>
              <p className="text-body text-dark text-hairline center">
                Start at $5,000
              </p>
              {/*<Button>
                <p className="text-body text-white text-hairline center">
                  Learn More
                </p>
              </Button>*/}
            </InfoCard>
          </SectionContentItem>
        </SectionContent>
      </div>
      <div className="app-container-item">
        <SectionContent>
          <SectionContentItem>
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
