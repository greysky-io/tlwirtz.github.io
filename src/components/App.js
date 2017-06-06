import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import SectionContent from './SectionContent';
import SectionContentItem from './SectionContentItem';
import InfoCard from './InfoCard';
import Button from './Button';
import ContactForm from './ContactForm';
import Footer from './Footer';
import Text from './Text';

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
        <SectionContent fullWidth tall>
          <SectionContentItem padding>
            <Text title color="white">
              <span className="text-reg">greysky </span>
              <span className="text-hairline">studios</span>
            </Text>
            <Text subheading color="white">
              Mind-blowing e-commerce for your business
            </Text>
          </SectionContentItem>
        </SectionContent>
      </div>
      <div className="app-container-item">
        <SectionContent>
          <SectionContentItem>
            <Text heading position="left" bottomMargin>
              Let us help accelerate your business
            </Text>
            <Text body position="left" bottomMargin>
              We're here to help. Whether you're looking to launch your first online store, or need help fine-tuning your back-office processing we can craft the right solution for your business.
            </Text>
            <Text body position="left">
              We specialize in creating brand new Shopify stores, off the shelf app integrations and custom app development.
            </Text>
          </SectionContentItem>
          <SectionContentItem>
            <SectionContent noPadding>
              <SectionContentItem>
                <img src={rocket} className="service-icon service-icon-large" />
              </SectionContentItem>
            </SectionContent>
          </SectionContentItem>
        </SectionContent>
      </div>
      <div className="app-container-item main-background">
        <SectionContent>
          <SectionContentItem>
            <Text title position="center" weight="reg" color="white">
              we
            </Text>
          </SectionContentItem>
          <SectionContentItem>
            <Text title position="center" weight="reg" color="white">
              <i className="fa fa-heart" />
            </Text>
          </SectionContentItem>
          <SectionContentItem>
            <SectionContent noPadding>
              <img src={shopifyLogo} />
            </SectionContent>
          </SectionContentItem>
        </SectionContent>
        <SectionContent>
          <SectionContentItem padding flexStart>
            <Text heading color="white" position="center">
              Ecommerce done right.
            </Text>
            <Text body color="white" position="center" bottomMargin>
              Shopify is what e-commerce was meant to be.
              <br />
              The all-in-one platform has everything you need to help you run your business.
            </Text>
          </SectionContentItem>
          <SectionContentItem padding flexStart>
            <Text heading color="white" position="center" bottomMargin>
              Manage your business with ease.
            </Text>
            <Text body color="white" position="center" bottomMargin>
              Manage orders & payments, track sales trends, run marketing campaigns all from within the Shopify system.
              <br />
              Join the 350,000+ merchants who run their business on Shopify.
            </Text>
          </SectionContentItem>
          <SectionContentItem padding flexStart>
            <Text heading color="white" position="center" bottomMargin>
              Beautiful storefronts. Mobile ready.
            </Text>
            <Text body color="white" position="center" bottomMargin>
              With hundreds of robust themes, your products will look beautiful whether on mobile, tablet or desktop.
              <br />
              All themes are fully customizable, no coding required.
            </Text>
          </SectionContentItem>
        </SectionContent>
      </div>
      <div className="app-container-item">
        <SectionContent>
          <SectionContentItem flexStart>
            <InfoCard>
              <img src={editIcon} className="service-icon" />
              <Text heading position="center" infoCard>
                Store Modification
              </Text>
              <Text body position="center" infoCard>
                Already have a Shopify store, but need help making modifications? This package is for you.
              </Text>
              <Text body color="purple" position="center">
                Starts at $500
              </Text>
            </InfoCard>
          </SectionContentItem>
          <SectionContentItem flexStart>
            <InfoCard>
              <img src={openSign} className="service-icon" />
              <Text heading position="center" infoCard>
                Store Setup
              </Text>
              <Text body position="center" infoCard>
                Everything you need to get your business selling online.
              </Text>
              <Text body color="purple" position="center">
                Starts at $2,500
              </Text>
            </InfoCard>
          </SectionContentItem>
          <SectionContentItem flexStart>
            <InfoCard>
              <img src={customIcon} className="service-icon" />
              <Text heading position="center" infoCard>
                Custom App Development
              </Text>
              <Text body position="center" infoCard>
                Need a custom app tailored specifically to your business needs? We're here to help.
              </Text>
              <Text body color="purple" position="center">
                Starts at $5,000
              </Text>
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
