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
    <PageContainer background="rgba(227, 53, 62, 1)">
      <FlexRow>
        <PageContainerItem >
          <Title>This is our first Page.</Title>
          <p>
            <a href="https://medium.muz.li/form-design-inspiration-6bb9a350f2d8">
              Check this out for inspiration
            </a>
          </p>
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
