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
  font-family: Oswald ;
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
`

const Text = styled.p`
  color: ${WHITE};
  font-size: 1.75rem;
  font-family: Raleway;
  font-weight: 300;
  text-align: center;
  margin-bottom: 5rem;
`

export default () => (
  <Fragment>
    {/* We don't have a header bar yet */}
    {/* <HeaderBar /> */}
    <PageContainer>
      <FlexRow>
        <PageContainerItem>
          <Title>Greysky Studios</Title>
          <Text>Building amazing web applications that transform your business.</Text>
          <SubHeading>You're ready, we're waiting. Let's do this.</SubHeading>
          <ContactForm />
        </PageContainerItem>
      </FlexRow>
    </PageContainer>
    {/* don't need a second page */}
    {/* <PageContainer background="orange">
      <FlexRow>
        <PageContainerItem>
          <Title>This is our second Page.</Title>
        </PageContainerItem>
      </FlexRow>
    </PageContainer> */}
  </Fragment>
);
