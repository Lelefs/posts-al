import React from 'react';
import { Container } from './styles';

export default function Tooltip({ title, className = '', children }) {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
}
