import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const linearBackground = `linear-gradient(
  30deg,
  #9B2873 0%,
  #EE2432 50%,
  #DDE03A 100%
);`;

const background = '#EE2432'

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
