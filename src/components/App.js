import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import SectionContent from './SectionContent';
import SectionContentItem from './SectionContentItem';
import InfoCard from './InfoCard';
import Button from './Button';
import Footer from './Footer';

import mainIMG from '../assets/felix-russell-saw-112140.jpg';
import shopifyLogo from '../assets/shopify_monotone_white.svg';

const App = props => {
  return (
    <div className="app-container">
      <div className="app-container-item main-background full-height">
        <NavBar />
        <SectionContent>
          <SectionContentItem>
            <h1 className="text-title text-reg text-white center">
              <span className="text-reg">greysky </span>
              <span className="text-hairline">studios</span>
            </h1>
            <h2 className="text-subheading text-hairline text-white center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat ultrices orci eu dapibus.
            </h2>
          </SectionContentItem>
        </SectionContent>
      </div>
      <div className="app-container-item">
        <SectionContent fullWidth>
          <img src={mainIMG} className="full-width-img" />
        </SectionContent>
      </div>
      <div className="app-container-item">
        <SectionContent>
          <SectionContentItem>
            <h2 className="text-headline text-dark text-light left">
              Another small heading goes here
            </h2>
          </SectionContentItem>
          <SectionContentItem>
            <p className="text-body text-dark text-hairline left">
              Duis suscipit, mauris a fringilla sollicitudin, massa erat fringilla lacus, id fringilla diam eros eu felis.
            </p>
          </SectionContentItem>
        </SectionContent>
      </div>
      <div className="app-container-item blue-background">
        <SectionContent>
          <SectionContentItem>
            <h2 className="text-headline text-white text-light left">
              Ecommerce done right.
            </h2>
          </SectionContentItem>
          <SectionContentItem>
            <img src={shopifyLogo} className="shopify-logo" />
          </SectionContentItem>
          <SectionContentItem>
            <p className="text-body text-white text-hairline left">
              Duis suscipit, mauris a fringilla sollicitudin, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat ultrices orci eu dapibus. massa erat fringilla lacus, id fringilla diam eros eu felis.
            </p>
          </SectionContentItem>
          <SectionContentItem>
            <p className="text-body text-white text-hairline left">
              Duis suscipit, mauris a fringilla sollicitudin, massa erat fringilla lacus, id fringilla diam eros eu felis.
            </p>
          </SectionContentItem>
          <SectionContentItem>
            <p className="text-body text-white text-hairline left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat ultrices orci eu dapibus. Duis suscipit, mauris a fringilla sollicitudin, massa erat fringilla lacus, id fringilla diam eros eu felis.
            </p>
          </SectionContentItem>
        </SectionContent>
      </div>
      <div className="app-container-item">
        <SectionContent>
          <SectionContentItem>
            <InfoCard>
              <h2 className="text-headline text-hairline center info-card-item">
                Service One
              </h2>
              <p className="text-body text-dark text-hairline center info-card-item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat ultrices orci eu dapibus. Duis suscipit, mauris a fringilla sollicitudin, massa erat fringilla lacus, id fringilla diam eros eu felis.
              </p>
              <p className="text-body text-dark text-hairline center info-card-item">
                Start at $2.5K
              </p>
              <Button>
                <p className="text-body text-white text-hairline center">
                  Learn More
                </p>
              </Button>
            </InfoCard>
          </SectionContentItem>
          <SectionContentItem>
            <InfoCard>
              <h2 className="text-headline text-hairline center  info-card-item">
                Service Two
              </h2>
              <p className="text-body text-dark text-hairline center info-card-item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat ultrices orci eu dapibus. Duis suscipit, mauris a fringilla sollicitudin, massa erat fringilla lacus, id fringilla diam eros eu felis.
              </p>
              <p className="text-body text-dark text-hairline center info-card-item">
                Start at $2.5K
              </p>
              <Button>
                <p className="text-body text-white text-hairline center">
                  Learn More
                </p>
              </Button>
            </InfoCard>
          </SectionContentItem>
          <SectionContentItem>
            <InfoCard>
              <h2 className="text-headline text-hairline center  info-card-item">
                Service Three
              </h2>
              <p className="text-body text-dark text-hairline center info-card-item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat ultrices orci eu dapibus. Duis suscipit, mauris a fringilla sollicitudin, massa erat fringilla lacus, id fringilla diam eros eu felis.
              </p>
              <p className="text-body text-dark text-hairline center info-card-item">
                Start at $2.5K
              </p>
              <Button>
                <p className="text-body text-white text-hairline center">
                  Learn More
                </p>
              </Button>
            </InfoCard>
          </SectionContentItem>
        </SectionContent>
      </div>
      <Footer />
    </div>
  );
};

App.propTypes = {};

export default App;
