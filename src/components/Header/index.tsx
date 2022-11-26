import React from 'react';
import { Container, Subtitle, Title } from './styles';

export function Header() {
  return (
    <Container>
      <Title>
        Acessar{'\n'}
        sua conta
      </Title>

      <Subtitle>
        Logue com o Google{'\n'}
        para acessar nossa aplicação
      </Subtitle>
    </Container>
  )
}