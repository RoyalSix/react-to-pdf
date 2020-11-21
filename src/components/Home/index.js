import React from 'react'
import styled from 'styled-components';
import Body from '../Text/Body';
import Input from '../Input'
import Flexor from '../Flexor';
import { useState } from 'react';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #f3f4f7;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


function Home() {
  const [url, setUrl] = useState(null);
  return (
    <Container>
      <Body>Easily generate your PDF below by entering a url</Body>
      <Flexor flex="0 0 30px" />
      <Input value={url} update={setUrl} />
    </Container>
  )
}
export default Home

