import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';

function Body({ children, ...styleProps }) {
  return <Container {...styleProps}>{children}</Container>;
}

Body.propTypes = {
  children: PropTypes.array.isRequired,
  type: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.string,
  bold: PropTypes.bool,
  right: PropTypes.bool,
  left: PropTypes.bool,
  semibold: PropTypes.bool,
};

export default Body;
export const BodyStyles = Container;
