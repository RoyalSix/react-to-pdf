import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: ${props => props.flex};
  max-height: ${props => props.max};
  min-height: ${props => props.min};
`;

function Flexor({
  min, max, flex,
}) {
  return (
    <Container max={max} min={min} flex={flex} />
  );
}

export default Flexor;
