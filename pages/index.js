import React, { Fragment } from 'react';
import styled from 'styled-components';
import PageContainer from '../src/PageContainer';
import PageContainerItem from '../src/PageContainerItem';
import HeaderBar from '../src/HeaderBar';
import ContactForm from '../src/ContactForm';
import FlexRow from '../src/FlexRow';

const Title = styled.h1`
  color: white;
  font-size: 50px;
  text-align: center;
`;

export default () => (
  <Fragment>
    <HeaderBar />
    <PageContainer>
      <FlexRow>
        <PageContainerItem>
          <Title>This is our first Page.</Title>
          <ContactForm />
        </PageContainerItem>
      </FlexRow>
    </PageContainer>
    <PageContainer background="orange">
      <FlexRow>
        <PageContainerItem>
          <Title>This is our second Page.</Title>
        </PageContainerItem>
      </FlexRow>
    </PageContainer>
  </Fragment>
);
