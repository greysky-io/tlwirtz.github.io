import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
  font-size: 50px;
  text-align:center;
`;

const Container = styled.div`
  background: orange;
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const ContainerItem = styled.div`
  flex: auto;
`;

export default () => (
  <Container>
    <ContainerItem>
      <Title>Hello World</Title>
    </ContainerItem>
  </Container>
);
