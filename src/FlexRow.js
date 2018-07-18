import React, { Component } from 'react';
import styled from 'styled-components';

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  flex: auto;
  flex-direction: ${props => props.flexDirection || 'row'};
`;

export default FlexRow;
