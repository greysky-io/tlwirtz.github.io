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

const background = RED

const Container = styled.div`
  background: ${props => props.background || linearBackground};
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

Container.propTypes = { background: PropTypes.string };
export default Container;
