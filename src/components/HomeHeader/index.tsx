import React from 'react';
import { Container, Greeting, Message, Name } from './styles';
export function HomeHeader() {
  return (
    <Container>
      <Greeting>
        <Message>
          Hi
        </Message>
        <Name>
          Caroline
        </Name>
      </Greeting>
    </Container>
  );
}