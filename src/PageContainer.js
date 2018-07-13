import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const linearBackground = `linear-gradient(
  45deg,
  rgba(196, 44, 118, 1) 0%,
  rgba(210, 48, 48, 1) 35%,
  rgba(233, 208, 56, 1) 100%
);`;

const Container = styled.div`
  background: rgb(196, 44, 118);
  background: ${props => props.background || linearBackground};
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

Container.propTypes = { background: PropTypes.string };
export default Container;
