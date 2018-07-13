import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100vw;
  height: 5rem;
  color: white;
  opacity: 0.5;
  position: fixed;
`;

export default props => <HeaderContainer>This is the header.</HeaderContainer>;
