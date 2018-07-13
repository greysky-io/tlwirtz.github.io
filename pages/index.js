import React, { Fragment } from 'react';
import styled from 'styled-components';
import PageContainer from '../src/PageContainer';
import PageContainerItem from '../src/PageContainerItem';
import HeaderBar from '../src/HeaderBar';

const Title = styled.h1`
  color: white;
  font-size: 50px;
  text-align: center;
`;

export default () => (
  <Fragment>
    <HeaderBar />
    <PageContainer>
      <PageContainerItem>
        <Title>This is our first Page.</Title>
      </PageContainerItem>
    </PageContainer>
    <PageContainer background="orange">
      <PageContainerItem>
        <Title>This is our second Page.</Title>
      </PageContainerItem>
    </PageContainer>
  </Fragment>
);
