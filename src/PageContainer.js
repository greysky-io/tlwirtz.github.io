import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PURPLE, RED, YELLOW } from './constants';

const linearBackground = `linear-gradient(
  30deg,
  ${PURPLE} 0%,
  ${RED} 50%,
  ${YELLOW} 100%
);`;

const background = RED;

const Container = styled.div`
  background: ${props => props.background || linearBackground};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-right: 1rem;
  padding-left: 1rem;
  padding-bottom: 1rem;

  @media only screen and (min-height: 768px) {
    height: 100vh;
  }
`;

Container.propTypes = { background: PropTypes.string };
export default Container;
