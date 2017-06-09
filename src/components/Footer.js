import React from 'react';
import SectionContent from './SectionContent';
import SectionContentItem from './SectionContentItem';
import Text from './Text';

const Footer = props => {
  return (
    <div className="app-container-item main-background">
      <SectionContent>
        <SectionContentItem>
          <Text small  color="white" bottomMargin>
            Greysky Studios - Seattle, WA
          </Text>
          <Text small  color="white">
            Copyright © 2017 - All rights reserved
          </Text>
        </SectionContentItem>
        <SectionContentItem>
          <Text small nav color="white" bottomMargin footerRight>
            <a className="text-white" href="https://twitter.com/greyskyio">
              <i className="fa fa-twitter fa-lg" />
            </a>
          </Text>
          <a href="mailto:contact@greysky.io">
            <Text small  color="white" footerRight>contact@greysky.io</Text>
          </a>
        </SectionContentItem>
      </SectionContent>
    </div>
  );
};

export default Footer;
