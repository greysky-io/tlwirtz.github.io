import React, { Fragment } from 'react';
import styled from 'styled-components';
import { WHITE } from '../src/constants';
import PageContainer from '../src/PageContainer';
import PageContainerItem from '../src/PageContainerItem';
import HeaderBar from '../src/HeaderBar';
import ContactForm from '../src/ContactForm';
import FlexRow from '../src/FlexRow';

const SubHeading = styled.h2`
  color: ${WHITE};
  font-size: 3rem;
  text-align: center;
  font-family: Oswald;
  text-transform: capitalize;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: ${WHITE};
  font-size: 5rem;
  font-family: Raleway;
  font-weight: 300;
  text-align: center;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  color: ${WHITE};
  font-size: 1.75rem;
  font-family: Raleway;
  font-weight: 300;
  text-align: center;
  margin-bottom: 2.5rem;

  @media only screen and (min-width: 768px) {
    width: 50vw;
    margin: auto;
    margin-bottom: 2.5rem;
  }
`;

export default () => (
  <Fragment>
    <PageContainer>
      <FlexRow>
        <PageContainerItem>
          <Title>Greysky Studios</Title>
          <Text>We build amazing web applications that transform your business.</Text>
          <Text>
            We use industry standard technologies like NodeJS, React and Firebase to build immersive
            web and mobile solutions for your business.
          </Text>
          <SubHeading>Send us a message to start your transformation.</SubHeading>
          <ContactForm />
        </PageContainerItem>
      </FlexRow>
    </PageContainer>
  </Fragment>
);
