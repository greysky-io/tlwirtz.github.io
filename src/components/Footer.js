import React from 'react';
import Content from './Content';
import Item from './Item';
import Text from './Text';

const Footer = props => {
  return (
    <div className="app-container-item main-background">
      <Content>
        <Item>
          <Text small  color="white" bottomMargin>
            Greysky Studios - Seattle, WA
          </Text>
          <Text small  color="white">
            Copyright © 2017 - All rights reserved
          </Text>
        </Item>
        <Item>
          <Text small nav color="white" bottomMargin footerRight>
            <a className="text-white" href="https://twitter.com/greyskyio">
              <i className="fa fa-twitter fa-lg" />
            </a>
          </Text>
          <a href="mailto:contact@greysky.io">
            <Text small  color="white" footerRight>contact@greysky.io</Text>
          </a>
        </Item>
      </Content>
    </div>
  );
};

export default Footer;
