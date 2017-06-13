import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToAnchor from './ScrollToAnchor';
import NavBar from './NavBar';
import Content from './Content';
import Item from './Item';
import InfoCard from './InfoCard';
import ContactForm from './ContactForm';
import Footer from './Footer';
import Text from './Text';

import shopifyLogo from '../assets/shopify_monotone_white.svg';
import editIcon from '../assets/edit-icon.svg';
import openSign from '../assets/open-sign.svg';
import customIcon from '../assets/computer-gear.svg';
import rocket from '../assets/rocket-ship.svg';

const App = props => {
  return (
    <Router>
      <ScrollToAnchor>
        <div className="app-container">
          <div className="app-container-item main-background full-height">
            <NavBar />
            <Content fullWidth tall>
              <Item padding>
                <Text title color="white">
                  <span className="text-reg">greysky </span>
                  <span className="text-hairline">studios</span>
                </Text>
                <Text subheading color="white">
                  Mind-blowing e-commerce for your business
                </Text>
              </Item>
            </Content>
          </div>
          <div id="about" className="app-container-item">
            <Content>
              <Item>
                <Text heading position="left" bottomMargin>
                  Let us help accelerate your business
                </Text>
                <Text body position="left" bottomMargin>
                  We're here to help. Whether you're looking to launch your first online store, or need help fine-tuning your back-office processing we can craft the right solution for your business.
                </Text>
                <Text body position="left">
                  We specialize in creating brand new Shopify stores, off the shelf app integrations and custom app development.
                </Text>
              </Item>
              <Item>
                <Content noPadding>
                  <Item>
                    <img
                      src={rocket}
                      className="service-icon service-icon-large"
                      alt=""
                    />
                  </Item>
                </Content>
              </Item>
            </Content>
          </div>
          <div className="app-container-item main-background">
            <Content>
              <Item>
                <Text title position="center" weight="reg" color="white">
                  we
                </Text>
              </Item>
              <Item>
                <Text title position="center" weight="reg" color="white">
                  <i className="fa fa-heart" />
                </Text>
              </Item>
              <Item>
                <Content noPadding>
                  <img src={shopifyLogo} alt=""/>
                </Content>
              </Item>
            </Content>
            <Content>
              <Item padding flexStart>
                <Text heading color="white" position="center">
                  Ecommerce done right.
                </Text>
                <Text body color="white" position="center" bottomMargin>
                  Shopify is what e-commerce was meant to be.
                  <br />
                  The all-in-one platform has everything you need to help you run your business.
                </Text>
              </Item>
              <Item padding flexStart>
                <Text heading color="white" position="center" bottomMargin>
                  Manage your business with ease.
                </Text>
                <Text body color="white" position="center" bottomMargin>
                  Manage orders & payments, track sales trends, run marketing campaigns all from within the Shopify system.
                  <br />
                  Join the 350,000+ merchants who run their business on Shopify.
                </Text>
              </Item>
              <Item padding flexStart>
                <Text heading color="white" position="center" bottomMargin>
                  Beautiful storefronts. Mobile ready.
                </Text>
                <Text body color="white" position="center" bottomMargin>
                  With hundreds of robust themes, your products will look beautiful whether on mobile, tablet or desktop.
                  <br />
                  All themes are fully customizable, no coding required.
                </Text>
              </Item>
            </Content>
          </div>
          <div id="services" className="app-container-item">
            <Content>
              <Item flexStart>
                <InfoCard>
                  <img src={editIcon} className="service-icon" alt=""/>
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
              </Item>
              <Item flexStart>
                <InfoCard>
                  <img src={openSign} className="service-icon" alt=""/>
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
              </Item>
              <Item flexStart>
                <InfoCard>
                  <img src={customIcon} className="service-icon" alt=""/>
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
              </Item>
            </Content>
          </div>
          <div id="get-in-touch" className="app-container-item">
            <Content>
              <Item>
                <ContactForm />
              </Item>
            </Content>
          </div>
          <Footer />
        </div>
      </ScrollToAnchor>
    </Router>
  );
};

export default App;
