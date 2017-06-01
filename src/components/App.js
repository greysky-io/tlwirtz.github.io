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

const App = props => {
  return (
    <div className="app-container">
      <div className="app-container-item main-background full-height">
        <NavBar />
        <SectionContent fullWidth>
          <SectionContentItem padding>
            <h1 className="text-title text-reg text-white text-margin-bottom">
              <span className="text-reg">greysky </span>
              <span className="text-hairline">studios</span>
            </h1>
            <h2 className="text-subheading text-hairline text-white">
              Mind-blowing e-commerce for your business
            </h2>
          </SectionContentItem>
        </SectionContent>
      </div>
      <div className="app-container-item">
        <SectionContent fullWidth>
          <SectionContentItem>
            <img src={mainIMG} className="img-class" />
          </SectionContentItem>
          <SectionContentItem padding>
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
        </SectionContent>
      </div>
      <div className="app-container-item main-background">
        <SectionContent fullWidth>
          <SectionContentItem padding>
            <h2 className="text-headline text-white text-light left">
              Ecommerce done right.
            </h2>
            <img src={shopifyLogo} className="shopify-logo" />
            <p className="text-body text-white text-hairline left">
              Shopify is what e-commerce was meant to be. The all-in-one platform has everything you need to help you run your business.
            </p>
            <h2 className="text-subheading text-white text-light left"> Manage your business with ease.</h2>
            <p className="text-body text-white text-hairline left">
              Manage orders & payments, track sales trends, run marketing campaigns all from within the Shopify system. Join the 350,000+ merchants who run their business on Shopify.
            </p>
            <h2 className="text-subheading text-white text-light left">Beautiful storefronts. Mobile ready. No hassle.</h2>
            <p className="text-body text-white text-hairline left">
              Duis suscipit, mauris a fringilla sollicitudin, massa erat fringilla lacus, id fringilla diam eros eu felis.
            </p>
          </SectionContentItem>
        </SectionContent>
      </div>
      <div className="app-container-item">
        <SectionContent>
          <SectionContentItem>
            <InfoCard>
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
        <SectionContent fullWidth>
          <SectionContentItem padding>
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
