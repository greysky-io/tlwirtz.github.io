import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: rgb(196, 44, 118);
  background: linear-gradient(
    45deg,
    rgba(196, 44, 118, 1) 0%,
    rgba(210, 48, 48, 1) 35%,
    rgba(233, 208, 56, 1) 100%
  );
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export default props => <Container>{props.children}</Container>;
